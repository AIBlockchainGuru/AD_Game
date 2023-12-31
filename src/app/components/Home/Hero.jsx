'use client'
import React from 'react'
import logo from '../../../../public/assets/adnetwork-logo.png'
import Header from '../Header';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';
import { styles } from '../../utils/styles'
import Link from 'next/link';

const HEADER = `Welcome to AD Network, where gaming becomes a lifestyle. Unleash your inner gamer and dive into our vast universe of games, memberships, and vouchers.`;

const Hero = () => {
  return (
      <div className="w-[100vw] 1100px:h-[100vh] bg-cover bg-center bg-no-repeat flex flex-col items-center hero">
        <Header />
        <div className="items-center text-white flex flex-col justify-evenly m-auto">
          <Image 
            src={logo}
            width={300}
            height={300}
            className='mt-12 p-4'
          />

          <div className="ṭext-center w-[90%] m-auto">
            <p className={`text-lg text-center mb-8`}>{HEADER}</p>
          </div>

          <Divider className='w-[90%] bg-slate-50 h-[0.5px] mt-4 mb-5'/>

          <Link href={'/sign-up'}>
            <button className={`${styles.button} mt-10 mb-3`}>Sign Up</button>
          </Link>
        </div>
      </div>
  );
};

export default Hero;
