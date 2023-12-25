'use client'
import React from 'react';
import Image from 'next/image'
import Link from 'next/link';
import { styles } from '../../utils/styles';

function GameCard({game}) {
    const {id, title, genres, price, available, thumbnailUrl} = game;
  return (
    <>
        <div 
            className="w-[100%] flex flex-col mb-4"
        >
            <Image
                alt="Card background"
                className="object-cover rounded-none w-[85%] h-[30vh]"
                src={thumbnailUrl}
                width={270}
                height={320}
            />
            <div className="!bg-[#00171F] w-[85%] p-2 flex flex-col">
                <p className='text-[600] uppercase text-left text-ellipsis truncate w-[100%]'>{title}</p>
                <p className='text-[12px] text-slate-300 text-left'>{genres.map((genre, index) => ( index !== genres.length - 1 ? genre + ',' : genre))}</p>
                <div className="mt-2 flex justify-between gap-2">
                    <div className="">
                        <p className='text-md'>{price + ' RS'}</p>    
                    </div>
                    <div>
                        <p className='text-md'>{available ? 'In Stock' : 'Out of Stock'}</p>
                    </div>
                </div>
                <div className='text-center mt-4'>
                    <Link href={`/game/${id}`}>
                        <button className={`${styles.button} p-1`}>
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