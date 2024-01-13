import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, username } = reqBody;

  try {
    // Check if the new username is different from the current one
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });
    
    if (!existingUser) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }
    
    if (existingUser.username === username) {
      return NextResponse.json({ message: 'New username is the same as the current one' }, { status: 400 });
    }

    const existingUserName = await prisma.user.findFirst({
      where: {
        username: username,
      },
    });
    
    if(existingUserName){
      return NextResponse.json({ message: 'Username not available, please try another' }, { status: 400 });
    }

    // Update the username
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { username },
    });

    return NextResponse.json({ message: 'Username updated successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error during username update:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}