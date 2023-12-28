import { Inter } from 'next/font/google'
import './globals.css'
import { Staatliches, Manrope } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export const staatliches = Staatliches({
  subsets: ['latin'],
  weight: ["400"],
  variable: "--font-staatliches",
});

export const manrope = Manrope({
  subsets: ['latin'],
  weight: ["400", "200", "300", "500"],
  variable: "--font-manrope",
});

export const metadata = {
  title: 'AD Network',
  description: 'Generated with passion by Meraki Studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manrope.className} !bg-[#00171F] bg-no-repeat duration-300 text-[#fff]`}>{children}</body>
    </html>
  )
}
