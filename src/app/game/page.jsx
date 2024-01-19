import Link from 'next/link'
import React from 'react'
import Heading from '../components/Heading'

function Page() {
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
      <Heading 
        title='Error'
      />
      <h1 className='text-center text-3xl'>Oops! Your URL is missing a Game ID.</h1>
      <p className='text-center text-xl '>Browse back to shop.{" "}</p>
      <Link href={'/shop'} className='text-xl text-sky-400 underline'>
          Click Here
      </Link>
    </div>
  )
}

export default Page