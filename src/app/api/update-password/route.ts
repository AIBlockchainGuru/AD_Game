import { compare, hash } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email, currentPassword, newPassword } = reqBody;

  try {
    const existingUser = await prisma.user.findFirst({
      where: {
        email: email,
      },
    });

    if (!existingUser) {
      return NextResponse.json({ message: 'User not found, please check your email' }, { status: 404 });
    }

    const passwordMatch = await compare(currentPassword, existingUser.password);

    if (!passwordMatch) {
      return NextResponse.json({ message: 'Incorrect current password.' }, { status: 401 });
    }

    const hashedNewPassword = await hash(newPassword, 10);

    const updatedUser = await prisma.user.update({
      where: { email: email },
      data: { password: hashedNewPassword },
    });

    return NextResponse.json({ message: 'Password updated successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Error during password update:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
