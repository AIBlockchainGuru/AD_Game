// import { PrismaClient } from '@prisma/client';
// import { NextRequest, NextResponse } from 'next/server';

// const prisma = new PrismaClient();

// export async function POST(req: NextRequest) {
//   const reqBody = await req.json();
//   const { email, gameId } = reqBody;

//   try {
//     // Check if the user exists
//     const user = await prisma.user.findUnique({
//       where: { email: email },
//       include: { cart: true },
//     });

//     if (!user) {
//       return NextResponse.json({ message: 'User not found' }, { status: 404 });
//     }

//     // Check if the game exists in the user's cart
//     const cartItem = await prisma.cart.findUnique({
//       where: { userId_gameId: { userId, gameId } },
//     });

//     if (!cartItem) {
//       return NextResponse.json({ message: 'Game not found in the cart' }, { status: 404 });
//     }

//     // Remove the game from the cart
//     await prisma.cart.delete({
//       where: { id: cartItem.id },
//     });

//     return NextResponse.json({ message: 'Game removed from the cart' }, { status: 200 });
//   } catch (error) {
//     console.error('Error removing game from cart:', error);
//     return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//   } finally {
//     await prisma.$disconnect();
//   }
// }
