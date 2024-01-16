import React, { useEffect, useState } from 'react'
import { games } from '../../utils/games';
import Image from 'next/image';
import { staatliches } from '../../utils/font';
import Loader from '../Loader/Loader';
import toast from 'react-hot-toast';
import { useSelector } from 'react-redux';

function CartCard({cart, total, setTotal, setCartData}) {
  const { gameId, qty } = cart;
  
  const { currentUser } = useSelector(state => state.user );

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
      setTotal((total) => Number(total) + (Number(price) * Number(qty)))
    }
    
  }, [price])

  const handleDelete = async () => {
    console.log("Delete Clicked!")
    if(currentUser){
      try {
        const response = await fetch('/api/remove-item', {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: currentUser?.email, deleteItemId: gameId}),
        });
  
        if (!response.ok) {
          toast.error('Failed to delete!');
        }
        
        const data = await response.json();
        setCartData(data.cartItems);
        toast.success("Game removed from cart")
      } catch (error) {
      //   console.error('Error fetching data:', error);
        toast.error('Failed to fetch data');
      }
    }
  }

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
                  alt='...'
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
                    <h1 onClick={() => handleDelete()} className='text-lg px-1 py-1 cursor-pointer'>x</h1>
                  </div>
                  <p className='text-xs line-clamp-5 mt-2'>{description && description[0]}</p>
                </div>
                <div className='w-[100%] 800px:mt-0 mt-2 flex 800px:flex-row flex-col 800px:justify-between'>
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