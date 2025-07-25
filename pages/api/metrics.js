import {MongoClient} from 'mongodb';

const uri = process.env.MONGODB_URI;  // gets enrionmental variable to connect to mongoDB
const client = new MongoClient(uri);  // gets client_page_views object

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        /* Connect to database and collections */
        await client.connect();

        const db = client.db('portfolio-metrics');
        const collection = db.collection('page-views');
        const downloadCollection = db.collection('resume-downloads');

        /* Count All Time Visits */
        const totalVisits = await collection.countDocuments();

        /* Count unique visitors of all time */
        const uniqueVisits = await collection.aggregate([
            {
                $group: {
                    _id: {
                        userAgent: "$userAgent",
                        ip: "$ip"
                    }
                }
            }
        ]).toArray();

        const uniqueVisitors = uniqueVisits.length;


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

        // get the length for the count
        const uniqueVisitors24HoursSize = uniqueVisitors24Hours.length;

        /* Get Number of Downloads */

        // get download count WARNING THIS WILL BE DIFFERENT IF WE TRY TO ADD OTHER DOWNLOADS LATER
        const resumeDownloadCount = await downloadCollection.countDocuments();

        /* Get Platform Distribution */
        const platformCounts = {};

        // use unique visits results from prior query as start
        uniqueVisits.forEach(group => {
            const userAgent = group._id.userAgent;
            let platform = 'Other';

            if (/Linux.*Android/i.test(userAgent) || /iPhone|iPad/i.test(userAgent)) {
                platform = 'Mobile';
            } else if (/Linux/i.test(userAgent)) {
                platform = 'Linux';
            } else if (/Mac/i.test(userAgent)) {
                platform = 'Mac';
            } else if (/Windows/i.test(userAgent)) {
                platform = 'Windows';
            }

            platformCounts[platform] = (platformCounts[platform] || 0) + 1;
        });

        const platformPercentages = {};

        Object.entries(platformCounts).forEach(([platform, count]) => {
            platformPercentages[platform] = Math.ceil((count / uniqueVisitors) * 100);
        });

        /* set response json */
        res.status(200).json({
            totalVisits,
            uniqueVisitors,
            uniqueVisitors24HoursSize,
            resumeDownloadCount,
            platformPercentages
        });

    } catch (error) {
        console.error('Error fetching metrics:', error);
        res.status(500).json({ error: 'Failed to fetch metrics' });
    } finally {
        await client.close();
    }
}