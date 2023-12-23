'use client'
import React, { useState } from 'react'
import { styles } from '../utils/styles';
import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import Footer from '../components/Home/Footer'

const Page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const handleSignIn = () => {
        e.preventDefault();
        
        console.log('Form Submitted!')
    }
  return (
    <>
        <div className="h-[100vh] w-[100vw] bg-cover bg-no-repeat bg-center flex flex-col items-center hero">
            <div className='w-[90%] h-auto mt-[30px] 1100px:mt-[50px] p-6 800px:w-[75%] 1100px:w-[350px] border border-white'>
                <form 
                    onSubmit={handleSignIn}
                    className='flex flex-col justify-center items-center gap-4'
                >
                    <h1 className='text-xl text-left mb-3'>Sign In</h1>
                    <input 
                        type="text"  
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className={`text-white placeholder:text-white border-none rounded-md w-[80%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                    />
                    <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className={`text-white placeholder:text-white border-none rounded-md w-[80%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                    />

                    <button className='bg-[#02A9F4] uppercase w-[80%] py-2 text-sm px-2 border-none rounded-md'>
                        Sign In
                    </button>

                    <div className="text-sm text-center">
                        <span className='text-[#02A9F4]'>
                            <Link href={'#'}>Forgot Password{" "}</Link>
                        </span>
                    </div>
                    
                    <button className='bg-[#fff] flex justify-center bg-opacity-30 uppercase w-[80%] py-2 text-sm px-2 border-none rounded-md'>
                        <FcGoogle className='text-center mr-2 w-[20px] h-[20px]' />
                        Sign Up with Google
                    </button>
                    <button className='bg-[#fff] flex justify-center bg-opacity-30 uppercase w-[80%] py-2 text-sm px-2 border-none rounded-md'>
                        <FaFacebook className='text-[#02A9F4] rounded-full border-[2px] border-[#02A9F4] bg-white text-center mr-2 w-[20px] h-[20px]' />
                        Sign Up with Facebook
                    </button>
                </form>
            </div>
            <div className='text-center mt-8'>
                <Link href={'/'}>
                    <button className={`${styles.button}`}>Return</button>
                </Link>
            </div>
            <div className="fixed bottom-0 w-[100vw]">
                <Footer />
            </div>
        </div>
    </>
  )
}

export default Page