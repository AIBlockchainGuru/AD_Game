import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function DELETE(req: NextRequest) {
  const reqBody = await req.json();
  const { email, deleteItemId } = reqBody;

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

    // Check if the product with the given gameId is in the user's cart
    const existingCartItem = user.cart.find((item) => item.gameId === deleteItemId);

    if (!existingCartItem) {
      return NextResponse.json({ message: 'Product not found in the cart' }, { status: 404 });
    }

    // Delete the item from the cart
    await prisma.cart.delete({
      where: { id: existingCartItem.id },
    });

    // Extract relevant cart information
    const cartItems = cart.filter((cartItem) => {
      return (cartItem.id !== deleteItemId) && {
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