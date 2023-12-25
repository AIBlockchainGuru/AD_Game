import React from 'react'
import Header from '../components/News-and-Updates/Header'
import Image from 'next/image'
import {news} from '../utils/news';
import {styles} from '../utils/styles';
import Link from 'next/link';
import { Divider } from '@nextui-org/react';
import { giveawayGames } from '../utils/giveawayGames';
import Footer from '../components/Home/Footer'

const GIVEAWAY_DESCRIPTION = `Participating in our giveaways becomes even more exciting when you share them with friends. 
Not only does it create a sense of community, but it also boosts your chances of winning. 
So, feel free to spread the word and increase your odds of success!`

function Page() {
  return (
    <div className='w-[100%] h-[100%] pt-4 absoute top-0 news'>
        <div className="w-[90%] h-[10vh] m-auto">
            <Header />
        </div>
        <div className="w-[90%] m-auto">
            <h1 className='uppercase font-medium text-2xl underline mt-5 ml-3'>Latest network on the ad network</h1>
        </div>
        <div className="w-[90%] mt-6 flex flex-col gap-4 m-auto">
            {
                news.map((curr) => (
                    <div className="flex flex-row gap-2">
                        <div key={curr.id} className="w-[90%] md:w-[40%]">
                            <Image
                                src={curr.thumbnailUrl}
                                alt=''
                                width={320}
                                height={320}
                                className='w-[503px] h-[301px] '
                            />
                        </div>
                        <div className="w-[90%] md:w-[50%] flex flex-col justify-between">
                            <div>
                                <p className='uppercase font-bold text-xl line-clamp-3'>{curr.title}</p>
                                <p className='font-medium text-md text-gray-400 mt-5 line-clamp-4'>{curr.description}</p>
                            </div>
                            <div className='pb-1'>
                                {
                                    curr.genre === 'game' && (
                                        <Link href={`/game/${curr.gameId}`}>
                                            <button className={styles.button}>Shop Now</button>
                                        </Link>
                                    )
                                }
                                {
                                    curr.genre === 'news' && (
                                        <Link href={`/news/${curr.id}`}>
                                            <button className={styles.button}>Learn More</button>
                                        </Link>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <Divider className='w-[90%] m-auto bg-slate-50 h-[0.5px] mt-10 mb-8'/>

        <div className='w-[100%] bg-black p-6'>
            <p className='text-3xl text-center uppercase font-bold'>Give away entry</p>
        </div>

        <div className='w-[60%] pt-8 m-auto'>
            <p className='text-sm text-center pb-8'>{GIVEAWAY_DESCRIPTION}</p>
        </div>

        <div className='w-[90%] m-auto'>
            <h1 className='text-xl uppercase font-bold pb-8'>giveaway games for this week</h1>

            <div className='flex flex-col md:flex-row gap-6 m-auto pb-6 justify-center md:justify-start'>
                {
                    giveawayGames.map((game) => (
                        <Image 
                            src={game.thumbnailUrl}
                            alt=''
                            width={320}
                            height={320}
                            className='w-[380px] h-[275px] border-[0.5px] border-white rounded-xl'
                        />
                    ))
                }
            </div>
        </div>
        
        <div className='text-center mt-8 mb-10'>
            <Link href={'#'}>
                <button className={styles.button}>
                    Participate and Share
                </button>
            </Link>
        </div>

        <div className="bottom-0 w-[100vw]">
            <Footer />
        </div>
    </div>
  )
}

export default Page