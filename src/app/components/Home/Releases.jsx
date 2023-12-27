'use client'
import React from 'react';
import { styles } from '../../utils/styles'
import Image from 'next/image';
import { releaseItems } from '../../utils/releaseItems';
import spiderman from '../../../../public/assets/adnetwork-9.jpeg'
import cod from '../../../../public/assets/adnetwork-6.jpg'
import { Divider } from '@nextui-org/react';
import Link from 'next/link';

function Releases() {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className="w-[100vw] p-3 flex flex-col justify-center bg-black">
            <h1 className='text-center text-4xl m-auto uppercase'>All the Latest Triple A Releases</h1>
        </div>
        <div className="w-[100vw] flex flex-col items-center">
            <div className='flex flex-col w-[90%] m-auto mt-4'>

                <div className="w-[80%] mb-8 mt-6 flex flex-col gap-4 m-auto">
                    <div className="flex flex-row gap-4">
                        <div className="w-[90%] md:w-[40%]">
                            <Image
                                src={'/assets/adnetwork-9.jpeg'}
                                alt=''
                                width={320}
                                height={320}
                                className='w-[503px] h-[301px] '
                            />
                        </div>
                        <div className="w-[90%] md:w-[50%] flex flex-col justify-between">
                            <div>
                                <p className='uppercase font-bold text-xl line-clamp-3'>{releaseItems[0].title}</p>
                                <p className='font-medium text-md text-gray-400 mt-5 line-clamp-4'>{releaseItems[0].description}</p>
                            </div>
                            <div className='pb-1'>
                                <Link href={`#`}>
                                    <button className={styles.button}>Learn More</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] mb-8 mt-6 flex flex-col gap-4 m-auto">
                    <div className="flex flex-row-reverse gap-4">
                        <div className="w-[90%] md:w-[40%]">
                            <Image
                                src={'/assets/adnetwork-6.jpg'}
                                alt=''
                                width={320}
                                height={320}
                                className='w-[503px] h-[301px] '
                            />
                        </div>
                        <div className="w-[90%] md:w-[50%] md:text-right flex flex-col justify-between">
                            <div>
                                <p className='uppercase font-bold text-xl line-clamp-3'>{releaseItems[1].title}</p>
                                <p className='font-medium text-md text-gray-400 mt-5 line-clamp-4'>{releaseItems[1].description}</p>
                            </div>
                            <div className='pb-1'>
                                <Link href={`#`}>
                                    <button className={styles.button}>Learn More</button>
                                </Link>
                            </div>
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