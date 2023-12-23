'use client'
import React from 'react';
import { styles } from '../../utils/styles'
import NextImage from 'next/image';
import { releaseItems } from '../../utils/releaseItems';
import spiderman from '../../../../public/assets/adnetwork-9.jpeg'
import cod from '../../../../public/assets/adnetwork-6.jpg'
import { Divider } from '@nextui-org/react';
import { Image } from '@nextui-org/react';

function Releases() {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className="h-[10vh] w-[100vw] flex flex-col justify-center bg-black">
            <h1 className='text-center text-4xl m-auto uppercase'>All the Latest Triple A Releases</h1>
        </div>
        <div className="w-[100vw] flex flex-col items-center">
            <div className='flex flex-col w-[90%] m-auto mt-4'>

            <div className={`flex w-[90%] 1100px:w-[75%] flex-col 1100px:flex-row mt-5 gap-7 p-4 bg-transparent m-auto`}>
                {/* Left Side (Image) */}
                <div className="w-[100%] 1100px:w-[50%]">
                    <Image 
                        as={NextImage}
                        src={"/assets/adnetwork-9.jpeg"}
                        alt=''
                        width={500}
                        height={400}
                        className='rounded-lg w-[100%] h-[90%] object-contain'
                    />
                </div>
                
                <div className={`w-[100%] 1100px:w-[40%] text-left`}>
                    <h2 className="text-xl font-bold mb-2">{releaseItems[0].title}</h2>
                    <h2 className="text-sm text-[#d5d3ee] mb-2 overflow-hidden">{releaseItems[0].description}</h2>
                    <div className="flex justify-between ">
                        <p className="mb-4 mt-2 text-[200]"><span className='text-[#4e43b1] mr-1'>Price:</span>{releaseItems[0].price}</p>
                        <button className={styles.button}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className={`flex w-[90%] 1100px:w-[75%] flex-col 1100px:flex-row mt-10 p-4 bg-transparent m-auto`} style={{ flexDirection: `row-reverse`}}>
                {/* Left Side (Image) */}
                <div className="w-[100%] 1100px:w-[50%] mx-3">
                    <Image 
                        as={NextImage}
                        src={"/assets/adnetwork-6.jpg"}
                        alt=''
                        width={500}
                        height={400}
                        className='rounded-lg w-[100%] h-[90%] object-contain'
                    />
                </div>
                
                <div className={`w-[100%] 1100px:w-[40%] px-2 mx-3 text-right`}>
                    <h2 className="text-xl font-bold mb-2">{releaseItems[1].title}</h2>
                    <h2 className="text-sm text-[#d5d3ee] mb-2">{releaseItems[1].description}</h2>
                    <div className="flex justify-between ">
                        <p className="mb-4 mt-2 text-[200]"><span className='text-[#4e43b1] mr-1'>Price:</span>{releaseItems[1].price}</p>
                        <button className={styles.button}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            </div>
        </div>

        <Divider className='w-[90%] bg-slate-50 h-[0.5px] mb-5'/>

        <button className={`${styles.button} mb-5`}>Continue Exploring</button>
    </div>
  )
}

export default Releases;