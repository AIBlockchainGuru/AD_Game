'use client'
import Image from 'next/image'
import React from 'react'
import { Divider } from '@nextui-org/react'
import { styles } from '../../utils/styles'
import {giveawayGames} from '../../utils/giveawayGames'

function Giveaways() {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className="h-[10vh] w-[100vw] flex flex-col justify-center bg-black">
            <h1 className='text-center text-4xl m-auto sm:text-3xl uppercase'>Enter Exciting Giveaways and Vouchers</h1>
        </div>
        <div className="w-[100vw] flex flex-col items-center m-auto pt-6">
            <div className='flex flex-col md:flex-row gap-6 m-auto pb-6 justify-center md:justify-start'>
                {giveawayGames.map((game) => (
                    <div key={game.id} className='relative'>
                        <Image 
                            src={game.thumbnailUrl}
                            alt=''
                            width={380}
                            height={275}
                            className='w-[380px] h-[275px] border-[0.5px] border-white rounded-xl'
                        />
                        <div className="absolute w-[380px] h-[275px] top-0 left-0 rounded-2xl bg-black bg-opacity-25 "></div>
                        <div className='absolute bottom-0 left-0 p-4'>
                            <p className='text-lg uppercase font-bold'>{game.title}</p>
                        </div>
                    </div>
                ))}
            </div>


            <Divider className='w-[90%] bg-slate-50 mt-5 1100px:mt-7 h-[0.5px] mb-5'/>

            <div className="mt-5 w-[100%] mb-9 flex flex-col items-center flex-wrap">
                <span className='w-[90%] uppercase text-center mb-1 text-3xl text-[#7C8BD0]' style={{ fontWeight: 'bold'}}> Want to stay updated with Ad network? </span>
                <span className='w-[90%] uppercase text-center mb-3 text-3xl text-[#7C8BD0]' style={{ fontWeight: 'bold'}}> Sign up now! </span>
            </div>

            <div className="w-[90%] flex flex-wrap gap-2 justify-center mb-10">
                <input 
                    type="text" 
                    placeholder='example@email.com'
                    className={`${styles.input} w-[350px] bg-transparent`}
                />
                <button className={styles.button}>
                    Stay Updated
                </button>
            </div>

        </div>
    </div>
  )
}

export default Giveaways