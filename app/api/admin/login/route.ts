import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'changeme';

export async function POST(request: Request) {
  try {
    const { email,password } = await request.json();
    if (!email || !password) {
      return NextResponse.json({ error: 'Email and Password are required.' }, { status: 400 });
    }
    const admin = await prisma.admin.findUnique({ where: { email } });

    //compare password
    if (!admin) {
      return NextResponse.json({ error: 'User with this account does not exist' }, { status: 401 });
    }

    // Compare password
        const isMatch = await bcrypt.compare(password, admin.password);
        if (!isMatch) {
        return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
        }
    // Create JWT token
    const token = jwt.sign(
      { id: admin.id, email: admin.email, name: admin.name },
      JWT_SECRET,
      { expiresIn: '1d' }
    );
    return NextResponse.json({ token }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error.' }, { status: 500 });
  }
}
