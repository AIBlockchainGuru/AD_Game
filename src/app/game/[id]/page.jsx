'use client'
import React, { useState} from 'react'
import { games } from '../../utils/games';
import Image from 'next/image';
import Header from '../../components/Game/Header';
import { styles } from '../../utils/styles';
import RatingCircle from '../../components/Game/RatingCircle'

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

    const game = [
        {
            id: 'ADNG00112',
            title: 'Marvels Spider-man 2',
            description: 'Will add later',
            genres: ['Action', 'Adventure'],
            thumbnailUrl: '/assets/adnetwork-9.jpeg',
            cardUrl: '/assets/adnetwork-8.jpg',
            price: '2000',
            available: true
        },
    ]

    const [activeSection, setActiveSection] = useState(0);
    
    const {title, description, genres, price, thumbnailUrl, cardUrl, available} = game[0];

    const handlleSectionChange = (idx) => {
        for(let i = 0; i < 3; i++){
            if(sections[i].isSelected === true){
                sections[i].isSelected === false;
            }
            sections[idx].isSelected = true
        }
    }

    return (
    <div className='w-[100%] h-[200vh] pb-4 '>
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
                <div className='absolute top-0 w-[100%] h-[130vh] bg-black bg-opacity-45'></div>
                <h1 className='w-[90%] text-center z-5 absolute top-[10vh] left-auto p-auto m-auto uppercase text-3xl font-bold'>{title}</h1>
                <div className='w-90% flex items-center absolute top-[15vh] p-5 m-auto gap-4 justify-around'>
                    <div className="w-[40%] ml-auto">
                        <Image 
                            src={thumbnailUrl}
                            alt=''
                            width={1024}
                            height={1024}
                            className='rounded-lg object-cover z-1 mt-5'
                        />
                    </div>
                    <div className="w-[40%] mr-auto">
                        <p className='text-sm text-gray-400 font-bold text-left'>OUR PRICE</p>
                        <p className='text-6xl font-bold text-left mt-5'>{price} 
                            <span className='text-sm text-gray-400 ml-1 font-bold text-left'>RS</span>
                        </p>
                        <p className='text-right text-lg text-sky-700 uppercase mr-24 mt-6 font-bold'>{available ? 'In Stock' : 'Out of Stock'}</p>
                        <div className='text-right mr-24'>
                            <label htmlFor="quantity" className='uppercase text-lg text-gray-400 mr-2'>QTY:</label>
                            <input type="text" name="Quantity" id="quantity" className={`${styles.input} mt-1 w-[20%] bg-transparent text-right`}  />
                        </div>
                        <br />
                        <div className="w-[100%]">
                            <button className={`${styles.button} w-[80%] mt-3 text-center`}>Add to cart</button>
                        </div>
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
    </div>
  )
}

export default Page;