'use client'
import React, { useState } from 'react'
import { styles } from '../utils/styles'
import Link from 'next/link'
import Footer from '../components/Home/Footer'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Page = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    
    const handleSignUp = () => {
        e.preventDefault();
        
        console.log('Form Submitted!')
    }
  return (
    <>
        <div className="w-[100vw] h-[100vh] bg-cover bg-no-repeat bg-center flex flex-col items-center hero">
            <div className='w-[90%] h-auto mt-[30px] 1100px:mt-[50px] p-6 800px:w-[75%] 1100px:w-[350px] border border-white'>
                <form 
                    onSubmit={handleSignUp}
                    className='flex flex-col justify-center items-center gap-4'
                >
                    <h1 className='text-xl text-left mb-3'>Sign Up</h1>
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
                    <input 
                        type="password"
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`text-white placeholder:text-white border-none rounded-md w-[80%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                    />

                    <div className='text-sm text-center'>
                        <span>By creating an account, you agree to the</span>
                        <span className='text-[#D5D3EE]'>{" "}Terms of Services <span className='text-[#fff]'>{" "}and{" "}</span>Privacy Policy</span>
                    </div>

                    <button type='submit' className='bg-[#02A9F4] uppercase w-[80%] py-2 text-sm px-2 border-none rounded-md'>
                        Create a New Account
                    </button>

                    <div className="text-sm text-center">
                        <span className='text-[#02A9F4]'>Have an account?{" "}
                            <Link href={'/sign-in'} className="underline">Sign In</Link>
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
        </div>
        <Footer />
    </>
  )
}

export default Page