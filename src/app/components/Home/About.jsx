import { styles } from '../../utils/styles'
import { staatliches } from '../../utils/font';
import React from 'react';

function About() {

    const DESCRIPTION_ONE = "Enter the AD Gaming realm, pulsating with the gaming community's rhythm. We are more than just a gaming hub-we're your trusted ally for the latest titles, games, memberships, and more. Step into our domain, where gaming transcends a hobby-it's a lifestyle.";

    const DESCRIPTION_TWO = "Experience the story of Basim, a cunning street thief with nightmarish visions, seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad.";

  return (
    <div className='w-[100vw]  flex flex-col justify-center items-center  bg-black'>
        <div className="flex flex-col justify-center py-4">
            <h1 className={`${staatliches.className} text-center text-3xl 800px:text-4xl m-auto`}>Become Part of Trusted Network</h1>
        </div>
        <div className="w-[100vw] h-[80vh] 1100px:h-[90vh] flex flex-col items-center about pb-0">
            <div className="items-center h-[100%] bg-black bg-opacity-45 text-white flex flex-col justify-center m-auto">
                <div className="flex w-[90%] flex-col-reverse 800px:flex-row m-auto justify-between">
                    <div className="1100px:w-[45%] 800px:w-[55%] w-[90%] 1100px:pt-[200px]">
                        <h1 className={`${staatliches.className} text-3xl 800px:text-4xl text-[800] mb-4`}>ABOUT AD Gaming</h1>
                        <p className='text-medium mb-3'>{DESCRIPTION_ONE}</p>
                        <div className='flex gap-4'>
                            <div className="flex flex-col mr-4">
                                <span className={`${staatliches.className} text-[24px] 800px:text-[26px] mb-0`}>1000+</span>
                                <p className='text-[12px]'>Epic Games</p>
                            </div>
                            <div className="flex flex-col">
                                <span className={`${staatliches.className} text-[24px] 800px:text-[26px] mb-0`}>24/7</span>
                                <p className='text-[12px]'>Customer Support</p>
                            </div>
                            <div className="flex flex-col">
                                <span className={`${staatliches.className} text-[24px] 800px:text-[26px] mb-0`}>100%</span>
                                <p className='text-[12px]'>Secure Checkout</p>
                            </div>
                        </div>
                    </div>
                    <div className="1100px:w-[35%] hidden 1100px:block mb-8 text-right mr-10">
                        <h1 className={`${staatliches.className} text-2xl 800px:text-3xl text-[800] mb-5`}>Assasins Creed Mirage</h1>
                        <p className='text-[16px] mb-4'>{DESCRIPTION_TWO}</p>

                        <button className={styles.button}> Learn More </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About