import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import jwt from 'jsonwebtoken';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export async function GET(request: Request) {
  try {
    const authHeader = request.headers.get('authorization');
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json({ error: 'No token provided.' }, { status: 401 });
    }
    const token = authHeader.replace('Bearer ', '');
    let decoded: any;
    try {
      decoded = jwt.verify(token, JWT_SECRET);
    } catch (err) {
      return NextResponse.json({ error: 'Invalid or expired token.' }, { status: 401 });
    }
    const user = await prisma.users.findUnique({ where: { id: decoded.id } });
    if (!user) {
      return NextResponse.json({ error: 'User not found.' }, { status: 404 });
    }
    // Optionally omit sensitive fields
    const { password, ...userData } = user;
    return NextResponse.json(userData, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error.' }, { status: 500 });
  }
}
