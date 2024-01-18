import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import crypto from 'crypto';
import { PrismaClient } from '@prisma/client';
import { hash } from 'bcryptjs';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { email } = reqBody;

  try {
    // Check if the user exists
    const user = await prisma.user.findUnique({
      where: { email: email },
    });

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Generate a random 10-digit password
    const randomPassword = crypto.randomBytes(5).toString('hex');

    const hashedPassword = await hash(randomPassword, 10);

    // Update the user's password in the database
    await prisma.user.update({
      where: { id: user.id },
      data: { password: hashedPassword },
    });

    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Send the new password to the user's email
    const mailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Password Reset',
      text: `Your new password is: \n${randomPassword}. \n\nPlease change it after your next login.`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Password reset successful. Check your email for the new password.' }, { status: 200 });
  } catch (error) {
    console.error('Error resetting password:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
