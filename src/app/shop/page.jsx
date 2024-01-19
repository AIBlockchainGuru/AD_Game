'use client'
import React from 'react';
import Shop from '../components/Shop/Shop';
import Heading from '../components/Heading';

const page = () => {
  return (
    <div className=''>
        <Heading 
          title='Shop'
          description=''
          keywords=''
        />
        <Shop />
    </div>
  )
}

export default page