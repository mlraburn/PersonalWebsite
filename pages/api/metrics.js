import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;  // gets enrionmental variable to connect to mongoDB
const client = new MongoClient(uri);  // gets client object

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        /* Connect to database */
        await client.connect();
        const db = client.db('portfolio-metrics');
        const collection = db.collection('page-views');

        // Count total visits
        const totalVisits = await collection.countDocuments();

        /* Count unique-ish visitors in the last 24 hours */

        // First get the time 24 hours ago
        const now = new Date();
        let twentyFourHoursAgo = new Date(now);
        twentyFourHoursAgo.setHours(now.getHours() - 24);

        // Filter out the last 24 hours of records and save as an array
        const uniqueVisitors24Hours = await collection.aggregate([
            {
                $match: {
                    timestamp: { $gte: twentyFourHoursAgo}
                }
            },
            {
                $group: {
                    _id: {
                        userAgent: "$userAgent",
                        ip: "$ip"
                    }
                }
            }
        ]).toArray();

        const uniqueVisitors24HoursSize = uniqueVisitors24Hours.length;

        // set response.json to totalVisits key with value of totalVisits
        res.status(200).json({
            totalVisits,
            uniqueVisitors24HoursSize
        });

    } catch (error) {
        console.error('Error fetching metrics:', error);
        res.status(500).json({ error: 'Failed to fetch metrics' });
    } finally {
        await client.close();
    }
}