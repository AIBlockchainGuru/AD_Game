// pages/api/login.ts
import { compare } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, password } = reqBody;

  try {
    // Check if the user exists
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return NextResponse.json({ message: 'User not found.' }, { status: 404 });
    }

    // Check if the password is correct
    const passwordMatch = await compare(password, existingUser.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Incorrect password.' }, { status: 401 });
    }

    return NextResponse.json({ message: 'Login successful', user: existingUser }, { status: 200 });
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
