import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { name, email, googleId } = reqBody;  // Add googleId if you're receiving it

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
        ],
      },
    });

    if (existingUser) {
      // Update the user's information if necessary
      const updatedUser = await prisma.user.update({
        where: { id: existingUser.id },
        data: {
          email: email || existingUser.email,  // Update email if provided
        },
      });
      return NextResponse.json({ message: 'Login successful', user: updatedUser }, { status: 200 });
    }

    // Handle name for new user
    let firstName = null;
    let lastName = null;
    if (name) {
      const nameParts = name.trim().split(/\s+/);
      firstName = nameParts[0];
      lastName = nameParts.length > 1 ? nameParts[nameParts.length - 1] : null;
    }

    // Creating a new user
    const newUser = await prisma.user.create({
      data: {
        firstName,
        lastName,
        email,
      },
    });

    return NextResponse.json({ message: 'User created successfully', user: newUser }, {status: 200});
  } catch (error) {
    console.error('Error during Google sign-in:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, {status: 500});
  } finally {
    await prisma.$disconnect();
  }
}