import { styles } from '../../utils/styles'
import React from 'react';

function About() {

    const DESCRIPTION_ONE = "Enter the AD Network realm, pulsating with the gaming community's rhythm. We are more than just a gaming hub-we're your trusted ally for the latest titles, games, memberships, and more. Step into our domain, where gaming transcends a hobby-it's a lifestyle.";

    const DESCRIPTION_TWO = "Experience the story of Basim, a cunning street thief with nightmarish visions, seeking answers and justice as he navigates the bustling streets of ninth-century Baghdad.";

  return (
    <div className='w-[100vw]  flex flex-col justify-center items-center  bg-black'>
        <div className="flex flex-col justify-center p-3">
            <h1 className='text-center text-4xl m-auto'>Become Part of Trusted Network</h1>
        </div>
        <div className="w-[100vw] h-[80vh] 1100px:h-[90vh] flex flex-col items-center about pb-5">
            <div className="flex w-[90%] m-auto justify-between">
                <div className="w-[45%]">
                    <h1 className='text-3xl text-[800] mb-4' style={{ fontWeight: 'bolder'}}>ABOUT AD NETWORK</h1>
                    <p className='text-medium mb-3'>{DESCRIPTION_ONE}</p>
                    <div className='flex gap-4'>
                        <div className="flex flex-col mr-4">
                            <span className='text-[24px] text-[800] mb-0'>1000+</span>
                            <p className='text-[12px]'>Epic Games</p>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[24px] text-[800] mb-0'>24/7</span>
                            <p className='text-[12px]'>Customer Support</p>
                        </div>
                        <div className="flex flex-col">
                            <span className='text-[24px] text-[800] mb-0'>100%</span>
                            <p className='text-[12px]'>Secure Checkout</p>
                        </div>
                    </div>
                </div>
                <div className="w-[35%] text-right mr-10">
                    <h1 className='text-3xl text-[800] mb-5' style={{ fontWeight: 'bold'}}>Assasins Creed Mirage</h1>
                    <p className='text-medium mb-4'>{DESCRIPTION_TWO}</p>

                    <button className={styles.button}> Learn More </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About