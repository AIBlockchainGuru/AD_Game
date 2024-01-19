import React from 'react'
import { Carousel } from 'flowbite-react';
import Image from "next/image";
import { staatliches } from '../../utils/font';
import Avatar from 'react-avatar';

const customTheme = {
  indicators: {
    active: {
      off: "hidden",
      on: "hidden"
    },
  },
  control: {
    base: "inline-flex h-8 w-8 items-center justify-center rounded-full sm:h-10 sm:w-10",
    icon: "h-5 w-5 text-white dark:text-gray-800 sm:h-6 sm:w-6"
  },
}

function ReviewSlider({reviews}) {


  return (
    <div className='w-full py-2 1100px:py-4'>
        <Carousel theme={customTheme} slideInterval={10000}>
            {
                reviews.map((review) => (
                    <div key={review.id} className='relative 1100px:pb-0 pb-5 px-20 1100px:px-20 flex flex-col'>
                        <div className="flex gap-x-3 items-center">
                        <Avatar 
                            name={`${review.title}`}
                            round={true}
                            size='36'  
                        />
                          <p className={`${staatliches.className} text-lg`}>{review.title}</p>
                        </div>
                        <div className='mt-2 pr-8'>
                          <p className='text-lg'>{review.review}</p>
                        </div>
                    </div>
                ))
            }
        </Carousel>
    </div>
  )
}

export default ReviewSlider