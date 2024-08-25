import React from 'react';
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook, FaInstagram } from "react-icons/fa";


function Footer() {
  return (
    <div className='w-[screen] py-10 bg-[#000] flex flex-col'>
        <div className="w-[90%] m-auto flex justify-center items-center gap-4">
            <FaFacebook 
                className='w-[25px] h-[25px] text-[#A6E1FA] cursor-pointer'
            />
            <FaXTwitter 
                className='w-[25px] h-[25px] text-[#A6E1FA] cursor-pointer'
            />
            <FaInstagram 
                className='w-[25px] h-[25px] text-[#A6E1FA] cursor-pointer'
            />
        </div>
        <div className="w-[90%] m-auto flex justify-center items-center">
            <span className='text-sm mt-5'>2023 AD Gaming. All Rights Reserved.</span>
        </div>
    </div>
  )
}

export default Footer