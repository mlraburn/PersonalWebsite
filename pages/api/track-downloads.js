import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // grab environmental variable for connecting to db
const client = new MongoClient(uri); // create client object

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    try {
        /* Connect to client->db->collection */
        await client.connect();
        const db = client.db('portfolio-metrics');
        const collection = db.collection('resume-downloads'); // connect to resume download collection

        /* Create data object with referrer for more data*/
        const download = {
            timestamp: new Date(),
            userAgent: req.headers['user-agent'] || 'unknown',
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown',
            referrer: req.headers['referer'] || 'unknown'
        };

        await collection.insertOne(download); // add record to MongoDB
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error tracking download:', error);
        res.status(500).json({ error: 'Failed to track download' });
    } finally {
        await client.close();
    }
}