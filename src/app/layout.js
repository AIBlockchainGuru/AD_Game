import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'AD Network',
  description: 'Generated with passion by Meraki Studio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className}  !bg-[#00171F] bg-no-repeat duration-300 text-[#fff]`}>{children}</body>
    </html>
  )
}
