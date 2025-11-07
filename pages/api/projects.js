import { getServerSession } from 'next-auth/next';
import { authOptions } from './auth/[...nextauth]';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db();

  if (req.method === 'GET') {
    const projects = await db.collection('projects').find({}).sort({ order: 1 }).toArray();
    return res.status(200).json(projects);
  }

  const session = await getServerSession(req, res, authOptions);
  if (!session) return res.status(401).json({ error: 'Unauthorized' });

  if (req.method === 'POST') {
    const project = { ...req.body, createdAt: new Date() };
    const result = await db.collection('projects').insertOne(project);
    return res.status(201).json({ id: result.insertedId });
  }

  if (req.method === 'PUT') {
    const { _id, ...data } = req.body;
    await db.collection('projects').updateOne({ _id: new ObjectId(_id) }, { $set: { ...data, updatedAt: new Date() } });
    return res.status(200).json({ success: true });
  }

  if (req.method === 'DELETE') {
    const { id } = req.query;
    await db.collection('projects').deleteOne({ _id: new ObjectId(id) });
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
