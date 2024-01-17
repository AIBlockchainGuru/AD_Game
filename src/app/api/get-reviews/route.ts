import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { gameId } = reqBody;

  try {
    // Retrieve reviews based on gameId
    const reviews = await prisma.reviews.findMany({
      where: { gameId: gameId as string },
    });

    return NextResponse.json({ reviews }, { status: 200 });
  } catch (error) {
    console.error('Error getting reviews:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
