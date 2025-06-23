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
    const user = await prisma.users.findUnique({ where: { email } });

    //compare password
    if (!user) {
      return NextResponse.json({ error: 'User with this account does not exist' }, { status: 401 });
    }

    // Compare password
        const isMatch = await bcrypt.compare(password,user.password);
        if (!isMatch) {
        return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
        }
    // Create JWT token
    const token = jwt.sign(
      { id:user.id},
      JWT_SECRET,
      { expiresIn: '1d' }
    );

      //check if user has a questionaire | if not redirect to questionaire

    const questionaire = await prisma.questionaire.findUnique({
      where:{
        userId:user.id
      }
    })
    return NextResponse.json({ token:token,hasQuestionaire:questionaire ? true : false }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || 'Internal server error.' }, { status: 500 });
  }
}
