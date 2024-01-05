'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import { Staatliches, Manrope } from 'next/font/google';
import { Providers } from '../Providers/Provider';

const inter = Inter({ subsets: ['latin'] })

const manrope = Manrope({
  subsets: ['latin'],
  weight: ["400", "200", "300", "500"],
  variable: "--font-manrope",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} !bg-[#00171F] bg-no-repeat duration-300 text-[#fff]`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
