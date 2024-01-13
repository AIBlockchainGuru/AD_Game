import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, firstName, lastName, country } = reqBody;

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

    // Update the username
    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { firstName, lastName, country },
    });

    return NextResponse.json({ message: 'Profile updated successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error during profile update:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}