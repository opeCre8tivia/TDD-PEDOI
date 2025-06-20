import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { name, email,password } = await request.json();
    if (!name || !email || !password) {
      return NextResponse.json({ error: 'Name and email are required.' }, { status: 400 });
    }


    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.admin.create({
      data: { name, email,password:hashedPassword },
    });
    return NextResponse.json(admin, { status: 201 });
  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Email already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: error.message || 'Internal server error.' }, { status: 500 });
  }
}
