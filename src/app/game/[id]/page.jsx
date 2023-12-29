'use client'
import React, { useEffect, useState} from 'react'
import { games } from '../../utils/games';
import Image from 'next/image';
import Header from '../../components/Game/Header';
import { styles } from '../../utils/styles';
import RatingCircle from '../../components/Game/RatingCircle'
import Loader from '../../components/Loader/Loader'
import { staatliches } from '../../utils/font';

const sections = [
    {
        title: "Description",
        index: 0,
        isSelected: true
    },
    {
        title: "Ratings",
        index: 1,
        isSelected: false,
    },
    {
        title: "Review",
        index: 2,
        isSelected: false
    },
]


function Page({params}) {
    const { id } = params;

    const [activeSection, setActiveSection] = useState(0);
    const [game, setGame] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    
    const {title, description, genres, price, thumbnailUrl, cardUrl, available} = game;

    const handlleSectionChange = (idx) => {
        for(let i = 0; i < 3; i++){
            if(sections[i].isSelected === true){
                sections[i].isSelected === false;
            }
            sections[idx].isSelected = true
        }
    }

    useEffect(() => {
        setTimeout(()=>{
            setIsLoading(false);
        }, 200)
        const game = games.filter((game) => game.id === id);
        setGame(game[0]);
    }, [])

    return (
        <>
        { isLoading ? (
            <Loader />
        )
          :  (<div className='w-[100%] h-[200vh] pb-4 '>
                <div className='w-[100%] z-1 game'>
                    <Image 
                        src={thumbnailUrl}
                        alt=''
                        width={1024}
                        height={1024}
                        className='w-[100%] h-[100vh] object-stretch z-1'
                    />
                </div>
                <h1 className='z-3 absolute top-0 w-[100%] p-4 m-auto'>
                    <Header />
                </h1>
                <div className='z-3 absolute top-[50vh] w-[90%] left-[5%] p-4 m-auto'>
                    <div className='w-[90%] relative h-[60vh] z-4 m-auto text-center game--innercard'>
                        <Image 
                            src={cardUrl}
                            alt=''
                            width={1024}
                            height={1024}
                            className='w-[100%] h-[130vh] object-stretch z-4 rounded-2xl'
                            style={{
                                boxShadow: '0px 0px 100px white', // Adjust the shadow values as needed
                            }}
                        />
                        <div className='absolute top-0 w-[100%] h-[130vh] bg-black bg-opacity-45 rounded-xl'></div>
                        <h1 className={` ${staatliches.className} w-[90%] z-5 absolute top-[10vh] text-left pl-32 m-auto uppercase text-3xl font-bold`}>{title}</h1>
                        <div className='w-90% flex items-center absolute top-[15vh] p-5 m-auto gap-4 justify-around'>
                            <div className="w-[40%] 800px:w-[380px] 800px:h-[380px]ml-auto">
                                <Image 
                                    src={thumbnailUrl}
                                    alt=''
                                    width={380}
                                    height={380}
                                    className='w-[100%] h-[100%] rounded-lg z-1 mt-5'
                                />
                            </div>
                            
                        </div>
                        
                        <div className="w-[100%] flex flex-col gap-2 absolute top-[68vh] left-[] z-5  m-auto">
                            <div className='w-[100%] flex p-2 bg-[#00171F] m-auto'>
                                {
                                    sections.map((section, index) => (
                                        <div key={section.title} className={`w-[90%] text-center cursor-pointer ${index === activeSection ? 'border-b-2 border-white' : ''}`}>
                                            <p 
                                                className={`uppercase text-lg font-bold ${section.isSelected ? 'text-white' : 'text-gray-400'}`}
                                                onClick={() => {
                                                    sections[activeSection].isSelected = false;
                                                    setActiveSection(index)
                                                    sections[index].isSelected = true;
                                                }}
                                            >
                                                {section.title}
                                            </p>
                                        </div>
                                    ))
                                }
                            </div>

                            {
                                activeSection === 0 && (
                                    <div className='w-[80%] m-auto p-2 text-justify'>
                                        {games[1].description.map((description) => (
                                            <div>
                                                <p>{description}</p>
                                                <br />
                                            </div>
                                        ))}
                                    </div>
                                )
                            }
                            {
                                activeSection === 1 && (
                                    <div className='w-[85%] m-auto p-2 flex gap-3 justify-between'>
                                        <div className='w-[40%]'>
                                            <RatingCircle rating={3} />
                                        </div>
                                        <div className='w-[45%] mt-4 flex flex-col gap-2'>
                                            <p className='text-3xl font-bold text-right uppercase'>{games[1].ratings[0].positive.title}</p>
                                            <p className='text-sm text-right font-semibold pl-[6rem] text-gray-400'>{games[1].ratings[0].positive.description}</p>
                                            <p className='text-3xl mt-6 font-bold text-right uppercase'>{games[1].ratings[0].negative.title}</p>
                                            <p className='text-sm text-right font-semibold pl-[6rem] text-gray-400'>{games[1].ratings[0].negative.description}</p>
                                        </div>
                                    </div>
                                )
                            }

                        </div>

                    </div>
                </div>

                <div className='text-center z-5'>
                    <button className={`${styles.button} uppercase`}>
                        return
                    </button>
                </div>
            </div>)}
        </>
  )
}

export default Page;