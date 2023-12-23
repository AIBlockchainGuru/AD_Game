'use client'
import React from 'react';
import { styles } from '../../utils/styles'
import Image from 'next/image';
import { releaseItems } from '../../utils/releaseItems';
import spiderman from '../../../../public/assets/adnetwork-9.jpeg'
import cod from '../../../../public/assets/adnetwork-6.jpg'
import { Divider } from '@nextui-org/react';

function Releases() {
  return (
    <div className='w-[100vw] flex flex-col justify-center items-center'>
        <div className="h-[10vh] w-[100vw] flex flex-col justify-center bg-black">
            <h1 className='text-center text-4xl m-auto uppercase'>All the Latest Triple A Releases</h1>
        </div>
        <div className="w-[100vw] flex flex-col items-center">
            <div className='flex flex-col w-[90%] m-auto mt-4'>

            <div className={`flex w-[90%] 1100px:w-[75%] flex-col 1100px:flex-row mt-5 p-4 bg-transparent rounded-md m-auto`}>
                {/* Left Side (Image) */}
                <div className="w-[100%] 1100px:w-[60%] mr-0">
                    <Image 
                        src={spiderman}
                        alt=''
                        height={100}
                        width={100}
                        className='rounded-lg w-[100%] h-[90%] object-contain'
                    />
                </div>
                {/* Right Side (Product Description) */}
                <div className={`w-[100%] 1100px:w-[40%] px-2`}>
                    <h2 className="text-xl font-bold mb-2">{releaseItems[0].title}</h2>
                    <h2 className="text-sm text-[#d5d3ee] mb-2 overflow-hidden">{releaseItems[0].description}</h2>
                    <div className="flex justify-between ">
                        <p className="mb-4 mt-2 text-[200]"><span className='text-[#4e43b1] mr-1'>Price:</span>{releaseItems[0].price}</p>
                        <button className={styles.button}>
                            Learn More
                        </button>
                    </div>
                </div>
            </div>

            <div className={`flex w-[75%] mt-5 p-4 bg-transparent rounded-md m-auto`} style={{ flexDirection: `row-reverse`}}>
                {/* Left Side (Image) */}
                <div className="w-[60%] mr-0">
                    <Image 
                        src={cod}
                        alt=''
                        height={100}
                        width={100}
                        className='rounded-lg w-[100%] h-[90%] object-contain'
                    />
                </div>
                {/* Right Side (Product Description) */}
                <div className={`w-[40%] px-2 text-right`}>
                    <h2 className="text-xl font-bold mb-2">{releaseItems[1].title}</h2>
                    <h2 className="text-sm text-[#d5d3ee] mb-2">{releaseItems[1].description}</h2>
                    <div className="flex justify-between ">
                        <p className="mb-4 mt-2 text-[200]"><span className='text-[#4e43b1] mr-1'>Price:</span>{releaseItems[1].price}</p>
                        <button className={styles.button}>
                            Learn More
                        </button>
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

{/* <ReleaseCard game={{title: "Spiderman", image: spiderman, price: 'Rs. 1000', description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum voluptas accusantium odio optio quod similique rerum atque nesciunt. Mollitia, quidem pariatur blanditiis debitis, reprehenderit voluptatum excepturi omnis consequuntur quibusdam necessitatibus laborum nam eaque impedit officia saepe amet vitae quos ipsam error rem ratione expedita. Aspernatur qui earum eligendi tempora ullam?'}}/> */}