'use client'
import React from 'react';
import Shop from '../components/Shop/Shop';
import Heading from '../components/Heading';

const page = () => {
  return (
    <div className=''>
        <Heading 
          title='Shop at AD Gaming - Top Gaming Titles & Exclusive Deals'
          description={`Explore a vast collection of epic games and exclusive deals at AD Gaming's online shop. Find your next adventure with 1000+ games and secure checkout.`}
          keywords='AD Gaming Shop, Gaming Titles, Exclusive Deals, Secure Checkout, Online Game Store'
        />
        <Shop />
    </div>
  )
}

export default page