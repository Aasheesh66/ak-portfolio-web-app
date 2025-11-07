import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const client = await clientPromise;
  const db = client.db();

  const existingUser = await db.collection('users').findOne({ username: 'admin' });
  if (existingUser) {
    return res.status(400).json({ error: 'Admin already exists' });
  }

  const hashedPassword = await bcrypt.hash('admin123', 10);
  await db.collection('users').insertOne({
    username: 'admin',
    password: hashedPassword,
    email: 'admin@portfolio.com',
    createdAt: new Date()
  });

  return res.status(200).json({ message: 'Admin created successfully. Username: admin, Password: admin123' });
}
