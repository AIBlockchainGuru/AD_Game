'use client'
import React from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import bgImage from '../../../../public/assets/adnetwork-logo.png'

const navOptions = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Shop',
    url: '/shop',
  },
  {
    title: 'Support',
    url: '/support',
  },
]

function Header() {
  return (
    <nav className="p-4 absolute top-5 w-[90%] m-auto">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-xl">
            <Image 
              src={bgImage}
              width={50}
              height={50}
              className='p-0 m-0 absolute top-0'
            />
          </div>
        </div>
        <ul className="flex space-x-4 gap-2">
          {
            navOptions.map((current) => (
              <li key={`${Math.floor(Math.random() * 1000000)}`}>
                <Link href={current.url} className={`text-slate-50`}>
                      {current.title}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </nav>

  )
}

export default Header;