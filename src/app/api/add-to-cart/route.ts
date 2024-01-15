import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, gameId, quantity } = reqBody;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email: email },
      include: { cart: true },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    const qty = Number(quantity);

    // Check if the product with the same ID is already in the cart
    const existingCartItem = user.cart.find((item) => item.gameId === gameId);

    if (existingCartItem) {
        // Increment the quantity if the product is already in the cart
        const updatedQty = existingCartItem.qty + qty;
  
        // Validate that the new quantity is less than or equal to 5
        if (updatedQty > 5) {
          return NextResponse.json({ message: 'Maximum Quantity should be less than 6' }, { status: 400 });
        }
  
        const updatedCartItem = await prisma.cart.update({
          where: { id: existingCartItem.id },
          data: { qty: updatedQty },
        });

      return NextResponse.json({ message: 'Added to cart', cartItem: updatedCartItem }, { status: 200 });
    } else {
      // Add a new item to the cart if the product is not in the cart
      const newCartItem = await prisma.cart.create({
        data: {
          gameId,
          qty,
          userId: user.id,
        },
      });

      return NextResponse.json({ message: 'Added to cart', cartItem: newCartItem }, { status: 200 });
    }
  } catch (error) {
    console.error('Error adding to cart:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}