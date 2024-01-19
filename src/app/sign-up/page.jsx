'use client'
import React, { useState, useEffect } from 'react'
import { styles } from '../utils/styles'
import Link from 'next/link'
import {useRouter} from "next/navigation";
import Footer from '../components/Home/Footer'
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';
import { signIn, useSession } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import { signInStart, signInSuccess, signInFailure } from '../../redux/userSlice';
import Heading from '../components/Heading';

const Page = () => {
    const session = useSession();
    console.log(session);
    const router = useRouter();
    const { currentUser } = useSelector(state => state.user)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    
    const handleSignUp = async () => {
    
        // Check if passwords match
        if (password !== confirmPassword) {
            setPassword('');
            setConfirmPassword('');
            toast.error('Passwords do not match');
            return;
        }

        if(password === '' || firstName === '' || lastName === '' || email === ''){
            toast.error('Please fill all the details');
            return;
        }
    
        try {
            const response = await fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    password: password,
                }),
            });
    
            if (response.ok) {
                const data = await response.json();
                toast.success("Sign Up Successfull!");
                router.push("/sign-in");
            } else {
                try {
                    const errorData = await response.json();
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    toast.error(errorData.message || 'Signup failed');
                } catch (jsonError) {
                    setEmail('');
                    setPassword('');
                    setConfirmPassword('');
                    // console.error('Error parsing JSON:', jsonError);
                    toast.error('Signup failed. Please try again.');
                }
            }
        } catch (error) {
            setEmail('');
            setPassword('');
            setConfirmPassword('');
            // console.error('Error during signup:', error);
            alert('Error during signup. Please try again.');
        }
    };

    const dispatch = useDispatch();

    useEffect(() => {
        if(currentUser){
            router.push("/");
        }
    }, [])
    
    useEffect(() => {
        const handleGoogleLogin = async () =>{
            try {
                const response = await fetch('/api/social-auth', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        email: session.data.user?.email,
                        name: session.data.user?.name,
                    }),
                });
        
                if (response.ok) {
                    const data = await response.json();
                    dispatch(signInSuccess(data.user));
                    toast.success("Welcome!");
                    router.push("/");
                }
            } catch (error) {
                // console.error('Error during sign-in:', error);
                setEmail('');
                setPassword('');
                dispatch(signInFailure(error))
                toast.error('Error during sign-in. Please try again.');
            }
        }

        if(!currentUser && session.data?.user?.email){
            handleGoogleLogin();
        }
    }, [session.data?.user?.email])
    
  return (
    <>
        <Heading
            title="Sign Up"
            description=''
            keywords=''
        />
        <div className="w-[100vw] h-[100vh] bg-cover bg-no-repeat bg-center flex flex-col items-center hero z-0">
            <div className='w-[90%] h-auto mt-[30px] 1100px:mt-[50px] p-6 800px:w-[75%] 1100px:w-[350px] bg-black bg-opacity-35 border border-white z-10'>
                <div 
                    className='flex flex-col justify-center items-center gap-4'
                >
                    <h1 className='text-xl text-left mb-3'>Sign Up</h1>
                    <div className="w-[80%] flex gap-2">
                        <input 
                            type="text"  
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder='First Name'
                            className={`text-white placeholder:text-white border-none rounded-md w-[49%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                        />
                        <input 
                            type="text"  
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder='Last Name'
                            className={`text-white placeholder:text-white border-none rounded-md w-[49%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                        />
                    </div>
                    <input 
                        type="text"  
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'
                        className={`text-white placeholder:text-white border-none rounded-md w-[80%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                    />
                    <input 
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder='Password'
                        className={`text-white placeholder:text-white border-none rounded-md w-[80%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                    />
                    <input 
                        type="password"
                        required
                        value={confirmPassword}
                        placeholder='Confirm Password'
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className={`text-white placeholder:text-white border-none rounded-md w-[80%] py-2 px-4 bg-[#fff] bg-opacity-30`}
                    />

                    <div className='text-sm text-center'>
                        <span>By creating an account, you agree to the</span>
                        <span className='text-[#D5D3EE]'>{" "}Terms of Services <span className='text-[#fff]'>{" "}and{" "}</span>Privacy Policy</span>
                    </div>

                    <button onClick={() => handleSignUp()} className='bg-[#02A9F4] uppercase w-[80%] py-2 text-sm px-2 border-none rounded-md'>
                        Create a New Account
                    </button>

                    <div className="text-sm text-center">
                        <span className='text-[#02A9F4]'>Have an account?{" "}
                            <Link href={'/sign-in'} className="underline">Sign In</Link>
                        </span>
                    </div>
                    
                    <button onClick={() => signIn("google")} className='bg-[#fff] flex justify-center bg-opacity-30 uppercase w-[80%] py-2 text-sm px-2 border-none rounded-md'>
                        <FcGoogle className='text-center mr-2 w-[20px] h-[20px]' />
                            Sign Up with Google
                    </button>
                </div>
            </div>
            <div className='text-center mt-8'>
                <Link href={'/'}>
                    <button className={`${styles.button}`}>Return</button>
                </Link>
            </div>
        </div>
        <Footer />
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
    </>
  )
}

export default Page