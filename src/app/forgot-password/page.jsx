'use client'
import React, { useState } from 'react'
import { styles } from '../utils/styles';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Home/Footer';

const Page = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    
    const handleSubmit = async (e) => {
        
        if(email.length === 0){
            toast.error("Please enter your email");
            return;
        }

        try {
          const response = await fetch('/api/forget-password', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            toast.success("Email Sent Successfully!")
            router.push("/sign-in");
          } else {
            toast.error(data.message || 'Something went wrong.');
            console.log(data)
          }
        } catch (error) {
          toast.error('Something went wrong. Please try again');
          console.log(error)
        }
      };
  return (
    <div className="h-[100vh] w-[100vw] bg-cover bg-no-repeat bg-center flex flex-col items-center hero">
        <div className='w-[90%] h-auto mt-[30px] 1100px:mt-[50px] p-6 800px:w-[75%] 1100px:w-[350px] bg-black bg-opacity-35 border border-white'>
            <div 
                className='flex flex-col justify-center items-center gap-4'
            >
                <h1 className='text-xl text-left mb-3'>Forgot Password?</h1>
                <p className='text-sm px-6 800px:px-3 text-justify'>Please enter the email address that you used to register, and we will send you a new password you can use to login.{" (Recommended: To change your password on next login)"}</p>
                <input 
                    type="text"  
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                    className={`text-white placeholder:text-white border-none rounded-md w-[80%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                />

                <button onClick={handleSubmit} className='bg-[#02A9F4] uppercase w-[80%] py-2 text-sm px-2 border-none rounded-md'>
                    Send Password
                </button>

                <div className="text-sm text-center">
                    <span className='text-[#02A9F4]'>
                      Return to <Link href={'/sign-in'} className='underline'>Sign in{" "}</Link>
                    </span>
                </div>
            </div>
        </div>
        <div className='text-center mt-8'>
            <Link href={'/'}>
                <button className={`${styles.button}`}>Return</button>
            </Link>
        </div>
        <div className="fixed bottom-0 w-[100vw]">
            <Footer />
        </div>
        <Toaster position='top-center' reverseOrder={false} />
    </div>
  )
}

export default Page;