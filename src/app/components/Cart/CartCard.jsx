import React, { useEffect, useState } from 'react'
import { games } from '../../utils/games';
import Image from 'next/image';
import { staatliches } from '../../utils/font';
import Loader from '../Loader/Loader';

function CartCard({cart, total, setTotal}) {
  const { gameId, qty } = cart;
  
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    title,
    description,
    genres,
    price,
    thumbnailUrl,
    cardUrl,
    available,
  } = game;
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    const game = games.filter((game) => game.id === gameId);
    setGame(game[0]);
  }, []);

  useEffect(() => {
    if(!isNaN(price)){
      setTotal((total) => Number(total) + Number(price))
    }
    
  }, [price])

  return (
    <>
      {
        isLoading ? (
          <> </>
        ) : (
          <div className='w-[90%] flex gap-0 mx-auto'>
              <div className='w-[209px]'>
                <Image
                  src={thumbnailUrl}
                  alt=''
                  width={380}
                  height={380}
                  quality={100}
                  sizes='200vw, 200vh'
                  className='w-[209px] h-[209px] object-cover'
                />
              </div>
              <div className='w-[55%] h-[209px] flex flex-col pl-2 pr-4 justify-between bg-[#D9D9D9] bg-opacity-20 pt-2 pb-2'>
                <div>
                  <div className='flex justify-between'>
                    <h1 className={`${staatliches.className} w-[80%] text-lg line-clamp-2`}>{title}</h1>
                    <h1 className='text-lg cursor-pointer'>x</h1>
                  </div>
                  <p className='text-xs line-clamp-5 mt-2'>{description && description[0]}</p>
                </div>
                <div className='w-[100%] flex justify-between'>
                  <p className={`${staatliches.className} text-[1rem] uppercase`}>QTY: {qty}</p>
                  <p className={`${staatliches.className} text-[1rem] uppercase`}>{price} {" Rs"}</p>
                </div>
              </div>
          </div>
        )
      }
    </>
  )
}

export default CartCard