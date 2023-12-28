import { Staatliches, Manrope } from 'next/font/google';

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