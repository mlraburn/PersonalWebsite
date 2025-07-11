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

        // set response.json to totalVisits key with value of totalVisits
        res.status(200).json({
            totalVisits
        });

    } catch (error) {
        console.error('Error fetching metrics:', error);
        res.status(500).json({ error: 'Failed to fetch metrics' });
    } finally {
        await client.close();
    }
}