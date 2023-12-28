'use client'
import React, { useState } from 'react';
import Link  from 'next/link';
import Image from 'next/image';
import bgImage from '../../../public/assets/adnetwork-logo.png'
import { IoMenu } from "react-icons/io5";

const navOptions = [
  {
    title: 'Shop',
    url: '/shop',
  },
  {
    title: 'News and Updates',
    url: '/news-and-updates',
  },
  {
    title: 'Support',
    url: '/support',
  },
  {
    title: 'Cart',
    url: '/cart',
  },
  {
    title: 'Account',
    url: '/account',
  },
]

function Header() {
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleClose = (e) => {
    if(e.target.id === "screen"){
      setOpenSidebar(false);
    }
  }

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
        <ul className="800px:flex space-x-4 gap-2 hidden">
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
        <div className='800px:hidden grid'>
          <IoMenu
            className='w-[30px] h-[30px] cursor-pointer'
            onClick={() => setOpenSidebar(true)}
          />
          {
            openSidebar && (
              <>
              <div 
                className="fixed w-full h-screen top-0 left-0 z-[99999] bg-[#00000024] "
                onClick={handleClose}
                id='screen'
                >
                  <div className="w-[70%] fixed z-[99999999] h-[100vh] bg-gray-900 bg-opacity-90 top-0 right-0">
                    <div className="mt-[15vh] flex flex-col justify-evenly">
                      {
                        navOptions.map((item, index) => (
                                <Link href={`${item.url}`} passHref>
                                    <span
                                        className={`block py-5 text-[18px] px-6 font-[400]`}
                                    >
                                        {item.title}
                                    </span>
                                </Link>
                            )) 
                      }
                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>
      </div>
    </nav>

  )
}

export default Header;