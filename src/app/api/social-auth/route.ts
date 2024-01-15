import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {

  const reqBody = await req.json();
  const { email } = reqBody;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
        ],
      },
    });

    if (existingUser) {
        return NextResponse.json({ message: 'Login successful', user: existingUser }, { status: 200 });
    }

    // Creating a new user
    const newUser = await prisma.user.create({
      data: {
        email: email,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, {status: 200});
  } catch (error) {
    console.error('Error during signup:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
  } finally {
    await prisma.$disconnect();
  }
}