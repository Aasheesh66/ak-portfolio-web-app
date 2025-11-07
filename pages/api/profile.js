import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import clientPromise from '@/lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'GET') {
    const profile = await db.collection('profile').findOne({});
    return res.status(200).json(profile || {});
  }

  if (req.method === 'PUT') {
    const session = await getServerSession(req, res, authOptions);
    if (!session) return res.status(401).json({ error: 'Unauthorized' });

    const { name, title, email, phone, location, experience, about, skills, social } = req.body;
    await db.collection('profile').updateOne(
      {},
      { $set: { name, title, email, phone, location, experience, about, skills, social, updatedAt: new Date() } },
      { upsert: true }
    );
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
