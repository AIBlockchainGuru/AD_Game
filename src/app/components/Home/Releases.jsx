'use client'
import React from 'react';
import { styles } from '../../utils/styles'
import Image from 'next/image';
import { releaseItems } from '../../utils/releaseItems';
import spiderman from '../../../../public/assets/adnetwork-9.jpeg'
import cod from '../../../../public/assets/adnetwork-6.jpg'
import { Divider } from '@nextui-org/react';
import Link from 'next/link';
import { staatliches } from '../../utils/font';

function Releases() {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className="w-[100vw] py-4 flex flex-col justify-center bg-black">
            <h1 className={`${staatliches.className} text-center text-3xl 800px:text-4xl m-auto uppercase`}>All the Latest Triple A Releases</h1>
        </div>
        <div className="w-[100vw] flex flex-col items-center">
            <div className='flex flex-col w-[90%] m-auto mt-4'>

                <h1 className={`${staatliches.className} uppercase text-2xl 800px:text-left text-center mt-6 underline 800px:text-4xl w-[80%] m-auto`}>
                    hot titles 
                </h1>

                <div className="w-[80%] mb-8 mt-6 flex flex-col gap-4 m-auto">
                    <div className="flex flex-col 800px:flex-row gap-4">
                        <div className="w-[90%] 800px:w-[40%] 800px:m-0 m-auto">
                            <Image
                                src={'/assets/adnetwork-9.jpeg'}
                                alt=''
                                width={320}
                                height={320}
                                className='w-[503px] h-[301px] '
                            />
                        </div>
                        <div className="w-[90%] 800px:w-[50%] 800px:m-0 m-auto 800px:text-left text-center flex flex-col justify-between">
                            <div>
                                <p className={`${staatliches.className} uppercase text-2xl line-clamp-3`}>{releaseItems[0].title}</p>
                                <p className='font-medium text-md text-gray-400 mt-5 line-clamp-4'>{releaseItems[0].description}</p>
                            </div>
                            <div className='pb-1 py-2 flex flex-row items-center flex-between'>
                                <div className="text-left w-[80%]">
                                    <p className=''><span className='text-[#7C8BD0]'>{`Price:`}</span>{releaseItems[0].price}</p>
                                </div>
                                <div className='text-right w-[80%]'>
                                    <Link href={`/game/${releaseItems[0].gameId}`}>
                                        <button className={`${styles.button} !py-1 !px-3 !text-sm`}>Learn More</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="w-[80%] mb-8 mt-6 flex flex-col gap-4 m-auto">
                    <div className="flex flex-col 800px:flex-row-reverse gap-4">
                        <div className="w-[90%] 800px:w-[40%] m-auto 800px:m-0 ">
                            <Image
                                src={'/assets/adnetwork-6.jpg'}
                                alt=''
                                width={320}
                                height={320}
                                className='w-[503px] h-[301px] '
                            />
                        </div>
                        <div className="w-[90%] 800px:w-[50%] 800px:m-0 m-auto text-center 800px:text-right flex flex-col justify-between">
                            <div>
                                <p className={`${staatliches.className} uppercase text-2xl line-clamp-3`}>{releaseItems[1].title}</p>
                                <p className='font-medium text-md text-gray-400 mt-5 line-clamp-4'>{releaseItems[1].description}</p>
                            </div>
                            <div className='pb-1 py-2 flex flex-row items-center flex-between'>
                                <div className="text-left w-[80%]">
                                    <p className=''><span className='text-[#7C8BD0]'>{`Price:`}</span>{releaseItems[1].price}</p>
                                </div>
                                <div className='text-right w-[80%]'>
                                    <Link href={`/game/${releaseItems[1].gameId}`}>
                                        <button className={`${styles.button} !py-1 !px-3 !text-sm`}>Learn More</button>
                                    </Link>
                                </div>
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