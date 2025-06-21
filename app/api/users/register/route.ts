import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const { 
        firstName,
        lastName,
        mobileNumber,
        email,
        password,
     } = await request.json();

    //hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = await prisma.users.create({
      data: { 
        firstName,
        lastName,
        email,
        mobileNumber,
        password:hashedPassword
     },
    });
    return NextResponse.json(admin, { status: 201 });

  } catch (error: any) {
    if (error.code === 'P2002') {
      return NextResponse.json({ error: 'Account already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: error.message || 'Internal server error.' }, { status: 500 });
  }
}
