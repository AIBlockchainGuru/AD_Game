import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email } = reqBody;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email: email },
      include: { cart: true },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const cart = await prisma.cart.findMany({
      where: { userId: user.id}
    })

    // Extract relevant cart information
    const cartItems = cart.map((cartItem) => {
      return {
        id: cartItem.id,
        gameId: cartItem.gameId,
        qty: cartItem.qty,
      };
    });

    return NextResponse.json({ message: 'Cart items retrieved', cartItems }, { status: 200 });
  } catch (error) {
    console.error('Error getting cart items:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
