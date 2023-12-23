'use client'
import React from 'react'
import bgImage from '../../../../public/assets/adnetwork-logo.png'
import Header from '../Header';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import { styles } from '../../utils/styles'
import Link from 'next/link';

const Hero = () => {
  return (
      <div className="h-[100vh] w-[100vw] bg-cover bg-no-repeat flex flex-col items-center hero">
        <Header />
        <div className="items-center text-white flex flex-col justify-center m-auto">
          <Image 
            src={bgImage}
            width={300}
            height={300}
            className='mt-4 p-4'
          />

          <div className="ṭext-center w-[90%] m-auto">
            <p className="text-lg text-center mb-8">Wecome to AD Network, where gaming becomes a lifestyle. Unleash your inner gamer and dive into our vast universe of games, memberships, and vouchers.</p>
          </div>

          <Divider className='w-[90%] bg-slate-50 h-[0.5px] mb-5'/>

          <Link href={'/sign-up'}>
            <button className={`${styles.button}`}>Sign Up</button>
          </Link>
        </div>
      </div>
  );
};

export default Hero;
