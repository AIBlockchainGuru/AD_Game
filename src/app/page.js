'use client'
import Image from 'next/image'
import Hero from './components/Home/Hero'
import {NextUIProvider} from "@nextui-org/react";
import About from './components/Home/About';
import Releases from './components/Home/Releases';
import Giveaways from './components/Home/Giveaways';
import Faqs from './components/Home/Faqs';
import Footer from './components/Home/Footer';
import { Toaster } from 'react-hot-toast';
import Heading from './components/Heading';

export default function Home() {
  return (
    <NextUIProvider>
      <div className="text-[15px]">
        <Heading
          title='AD Gaming - Premier Gaming Hub for Latest Titles & Memberships'
          description={`Join AD Gaming, the ultimate gaming community hub. Discover the latest games, exclusive memberships, and a world where gaming is not just a hobby, but a lifestyle.`}
          keywords='AD Gaming, Gaming Community, Latest Games, Game Memberships, Gaming Lifestyle'
        />
        <Hero />
        <About />
        <Releases />
        <Giveaways />
        <Faqs />
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
      </div>
    </NextUIProvider>
  )
}
