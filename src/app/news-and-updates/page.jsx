'use client'
import React from 'react'
import Header from '../components/Header'
import Image from 'next/image'
import {news} from '../utils/news';
import {styles} from '../utils/styles';
import Link from 'next/link';
import { Divider } from '@nextui-org/react';
import { giveawayGames } from '../utils/giveawayGames';
import { giveawayWinner } from '../utils/giveawayWinner';
import Footer from '../components/Home/Footer'
import { staatliches } from '../utils/font';
import Heading from '../components/Heading';

const GIVEAWAY_DESCRIPTION = `Participating in our giveaways becomes even more exciting when you share them with friends. 
Not only does it create a sense of community, but it also boosts your chances of winning. 
So, feel free to spread the word and increase your odds of success!`

function Page() {
    return (
        <div className='w-[100%] h-[100%] pt-4 absoute top-0 news'>
            <Heading
                title='News and Updates'
                description=''
                keywords=''
            />
            <div className="w-[90%] h-[10vh] m-auto">
                <Header />
            </div>
    
            <div className="w-[90%] m-auto">
                <h1 className={`${staatliches.className} uppercase text-2xl font-medium 800px:text-2xl underline mt-5 ml-3`}>latest news on the ad network</h1>
            </div>
            <div className="w-[95%] 800px:w-[90%] mt-6 flex flex-col gap-4 m-auto items-center 800px:items-start">
                {
                    news.map((curr) => (
                        <div className="flex flex-col 800px:flex-row gap-4 my-5">
                            <div key={curr.id} className="w-[90%] 800px:w-[503px] mx-auto">
                                <Image
                                    src={curr.thumbnailUrl}
                                    alt=''
                                    width={320}
                                    height={320}
                                    className='w-[503px] h-[371px] object-cover rounded-xl'
                                />
                            </div>
                            <div className="w-[90%] 800px:w-[50%] flex flex-col justify-between mx-auto gap-4">
                                <div className='flex flex-col gap-6'>
                                    <p className={`${staatliches.className} uppercase text-xl 800px:text-4xl line-clamp-3`}>{curr.title}</p>
                                    <p className={`text-md mt-2 line-clamp-4`}>{curr.brief}</p>
                                </div>
                                <div className='pb-1 mt-2'>
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
                <p className={`${staatliches.className} text-2xl 800px:text-3xl text-center uppercase`}>Give away entry</p>
            </div>
    
            <div className='w-[80%] 800px:w-[60%] pt-8 m-auto'>
                <p className='text-[16px] text-center pb-8'>{GIVEAWAY_DESCRIPTION}</p>
            </div>
    
            <div className='w-[90%] m-auto'>
                <h1 className={`${staatliches.className} text-center text-2xl 800px:text-3xl uppercase pb-8`}>giveaway games for this week</h1>
    
                <div className='flex flex-col 800px:flex-row gap-6 800px:w-[95%] m-auto pb-6 items-center 800px:justify-between'>
                    {giveawayGames.map((game) => (
                        <div key={game.id} className='relative'>
                            <Image 
                                src={game.thumbnailUrl}
                                alt=' '
                                width={380}
                                height={275}
                                quality={100}
                                sizes='200vh, 150vw'
                                className='w-[380px] h-[275px] border-[0.5px] border-white rounded-xl brightness-50'
                            />
                            <div className='absolute bottom-0 left-0 p-4'>
                                <p className={`${staatliches.className} text-2xl uppercase`}>{game.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={`text-center mt-8 mb-10`}>
                <Link href={'#'}>
                    <button className={`${styles.button}`}>
                        Participate and Share
                    </button>
                </Link>
            </div>
    
            <div className='w-[100%] bg-black p-6'>
                <p className={`${staatliches.className} text-2xl 800px:text-3xl text-center uppercase`}>{"Last week's winner of the giveaway"}</p>
            </div>
            
            <div className='w-[100%] h-[500px] giveaway'>
                <div className='w-[100%] h-[500px] bg-black bg-opacity-30 flex flex-col items-center'>
                    <div className='m-auto text-center'>
                        <Image
                            src={giveawayWinner.imgUrl}
                            alt=''
                            className='w-[180px] h-[180px] rounded-full m-auto'
                            width={320}
                            height={320}
                        />
                        <p className={`${staatliches.className} mt-4 text-3xl uppercase text-center`}>{giveawayWinner.name}</p>
                        <p className='mt-4 text-lg text-center'> {`Congratulations to ${giveawayWinner.name} for winning the last week's giveaway`}</p>
                    </div>
                </div>
            </div>
    
            <div className="w-[90%] m-auto">
                <h1 className={`${staatliches.className} uppercase text-2xl font-medium 800px:text-2xl underline mt-5 ml-3`}>More News</h1>
            </div>
            <div className="w-[95%] 800px:w-[90%] mt-6 flex flex-col gap-4 m-auto items-center 800px:items-start">
                {
                    news.map((curr) => (
                        <div className="flex flex-col 800px:flex-row gap-4 my-5">
                            <div key={curr.id} className="w-[90%] 800px:w-[503px] mx-auto">
                                <Image
                                    src={curr.thumbnailUrl}
                                    alt=''
                                    width={320}
                                    height={320}
                                    className='w-[503px] h-[371px] object-cover rounded-xl'
                                />
                            </div>
                            <div className="w-[90%] md:w-[50%] flex flex-col justify-between gap-4 mx-auto">
                                <div className='flex flex-col gap-6'>
                                    <p className={`${staatliches.className} uppercase text-xl 800px:text-4xl line-clamp-3`}>{curr.title}</p>
                                    <p className={`text-md mt-2 line-clamp-4`}>{curr.brief}</p>
                                </div>
                                <div className='pb-1 mt-2'>
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
    
            <div className="bottom-0 w-[100vw]">
                <Footer />  
            </div>
        </div>
      )
}

export default Page