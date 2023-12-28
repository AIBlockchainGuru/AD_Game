'use client'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { styles } from '../../utils/styles';
import { MdDone, MdClose } from "react-icons/md";
import { staatliches } from "../../utils/font";

function GameCard({game}) {
    const {id, title, genres, price, available, thumbnailUrl} = game;
  return (
    <>
        <div 
            className="w-[100%] flex flex-col mb-4"
        >
            <Image
                alt="Card background"
                className="object-cover rounded-t-2xl w-[85%] h-[30vh]"
                src={thumbnailUrl}
                width={270}
                height={320}
            />
            <div className="!bg-[#00171F] w-[85%] p-2 flex flex-col">
                <p className={`${staatliches.className} text-[22px] uppercase text-left text-ellipsis truncate w-[100%]`}>{title}</p>
                <p className='text-lg text-left'>{genres.map((genre, index) => ( index !== genres.length - 1 ? genre + ',' : genre))}</p>
                <div className="mt-6 flex justify-between">
                    <div className="">
                        <p className={`${staatliches.className} text-xl`}>{price + ' RS'}</p>    
                    </div>
                    <div>
                        <p className={`${staatliches.className} font-bold text-xl uppercase`}>
                            {available ? (
                                <div className='flex gap-1'>
                                    <MdDone 
                                        className='w-[24px] h-[24px] text-center text-[#7C8BD0]'
                                    /> <p className='text-[#7C8BD0]'>In Stock</p>
                                </div>
                            ) : (
                                <div className='flex gap-1'>
                                    <MdClose
                                        className='w-[24px] h-[24px] text-center text-red-600'
                                    /> <p className='text-red-600'>Out of Stock</p>
                                </div>
                            )}
                        </p>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <Link href={`/game/${id}`}>
                        <button className={`${styles.button} p-1 w-full`}>
                            Learn More
                        </button>
                    </Link>
                </div>
            </div>
        </div>

    </>
  );
}

export default GameCard