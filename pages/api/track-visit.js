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
        const collection = db.collection('page-views');


        /* Create data object */
        const visit = {
            timestamp: new Date(),
            userAgent: req.headers['user-agent'] || 'unknown',
            ip: req.headers['x-forwarded-for'] || req.connection.remoteAddress || 'unknown',
        };

        // Add data object to collection
        await collection.insertOne(visit);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error tracking visit:', error);
        res.status(500).json({ error: 'Failed to track visit' });
    } finally {
        await client.close();
    }
}