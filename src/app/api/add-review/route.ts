import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, gameId, review, title } = reqBody;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Create a new review
    const newReview = await prisma.reviews.create({
      data: {
        gameId,
        review,
        title,
        userId: user.id,
      },
    });

    return NextResponse.json({ message: 'Review added', review: newReview }, { status: 200 });
  } catch (error) {
    console.error('Error adding review:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
