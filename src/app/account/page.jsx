'use client';
import React, {useState} from 'react'
import Header from '../components/Account/Header'
import Link from 'next/link';
import { styles } from '../utils/styles';
import Footer from '../components/Home/Footer';
import Image from 'next/image';
import { staatliches } from '../utils/font';

const navOptions = [
    {
        id: '001',
        title: 'Profile',
        isSelected: true,
    },
    {
        id: '002',
        title: 'Personal Information',
        isSelected: false,
    },
    {
        id: '003',
        title: 'Account Id and Sign In Information',
        isSelected: false,
    },
    {
        id: '004',
        title: 'Purchases',
        isSelected: false,
    },
    {
        id: '005',
        title: 'Login Management',
        isSelected: false,
    },
]

function Page() {

    const [selected, setSelected] = useState(0);
    const [toggle, setToggle] = useState(0);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [location, setLocation] = useState('');
    const [username, setUsername] = useState('');

    const imageHandler = async (e) => {
        const fileReader = new FileReader();

        fileReader.onload = () => {
            if(fileReader.readyState === 2){
                const avatar = fileReader.result;
                updateAvatar(
                    avatar,
                );
            }
        };
        fileReader.readAsDataURL(e.target.files[0]);
    };

  return (
    <div className='w-[100%] pt-4 absoute top-0'>
        <div className="w-[90%] h-[10vh] m-auto">
            <Header />
        </div>

        <div className='w-full 800px:w-[90%] flex flex-row p-6 mb-8 m-auto rounded-xl account'>
            <div className="w-full 800px:w-[50%] 800px:border-r-[0.5px] border-white">
                <h1 className={`${staatliches.className} w-[90%] uppercase 800px:text-left text-center pt-12 pb-6 text-2xl text-[32px] font-bold m-auto`}>Account Management</h1>
                <div className='w-[90%] flex flex-col m-auto mt-10'>
                {
                    navOptions.map((nav, index) => (
                        <div key={nav.id} className='mb-6 mt-4'>
                            <p 
                                className={`border-white border-[0.5px] cursor-pointer uppercase p-2 pl-3 ${index === selected ? 'text-[#0C739B]' : ''}`}
                                onClick={() => {
                                    navOptions[selected].isSelected = false;
                                    setSelected(index);
                                    navOptions[selected].isSelected = true;
                                }}    
                            >{nav.title}</p>
                        </div>
                    ))
                }
                </div>
            </div>
            <div className="w-full hidden 800px:block 800px:w-[50%] h-full">
                {
                    selected === 0 && (
                        <>
                            <h1 className='w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto'>Profile Management</h1>
                            <div className='w-[90%] m-auto mt-10 flex flex-col gap-2 justify-center items-center'>
                                <div className="relative">
                                    <Image 
                                        src='/assets/noavatar.png'
                                        alt=''
                                        width={120}
                                        height={120}
                                        className='w-[120px] h-[120px] cursor-pointer  rounded-full'
                                    />
                                    <input 
                                        type="file" 
                                        name=""
                                        id='avatar'
                                        className='hidden'
                                        onChange={imageHandler}
                                        accept='image/png, image/jpg, image/jpeg, image/webp'
                                    />
                                </div>
                                <button 
                                    type='button'
                                    name=''
                                    className={`${styles.button} mt-4`}
                                >Change Avatar</button>
                                <div className='w-[90%] mt-6'>
                                    <input 
                                        type="text" 
                                        id='username' 
                                        placeholder='username@' 
                                        value={username} 
                                        className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>    
                            </div>
                        </>
                    )    
                }
                {
                    selected === 1 && (
                        <>
                            <h1 className='w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto'>Personal Information</h1>
                            <div className='w-[90%] m-auto flex flex-col gap-2'>
                                <div className="flex gap-2">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="firstName" className='uppercase text-lg font-semibold'>First Name</label>
                                        <input 
                                            type="text" 
                                            id='firstName' 
                                            placeholder='First Name' 
                                            value={firstName} 
                                            className={`${styles.button} bg-white bg-opacity-20`} 
                                            onChange={(e) => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="lastName" className='uppercase text-lg font-semibold'>Last Name</label>
                                        <input 
                                            type="text" 
                                            id='lastName' 
                                            placeholder='Last Name' 
                                            value={lastName} 
                                            className={`${styles.button} bg-white bg-opacity-20`} 
                                            onChange={(e) => setLastName(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mt-4 gap-2">
                                    <label htmlFor="location" className='uppercase text-lg font-semibold'>Country or Region</label>
                                    <input 
                                        type="text" 
                                        id='location' 
                                        placeholder='Last Name' 
                                        value={location} 
                                        className={`${styles.button} w-[92%] bg-white bg-opacity-20`} 
                                            onChange={(e) => setLocation(e.target.value)}
                                    />
                                </div>
                            </div>

                        </>
                    )    
                }
                {
                    selected === 2 && (
                        <>
                            <h1 className='w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto'>Sign In Information</h1>
                        </>
                    )    
                }
                {
                    selected === 3 && (
                        <>
                            <h1 className='w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto'>Purchases</h1>
                        </>
                    )    
                }
                {
                    selected === 4 && (
                        <>
                            <h1 className='w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto'>Login Management</h1>
                            <div className='w-[90%] m-auto mt-10'>
                                <Link href={"#"}>
                                    <button className={`${styles.button} w-[100%] text-center`}>
                                        Log out
                                    </button>
                                </Link>
                            </div>
                        </>
                    )    
                }

            </div>
        </div>

        <div className="text-center mt-10 mb-10">
            <Link href={'/'}>
                <button className={styles.button}>
                    Return
                </button>
            </Link>
        </div>

        <div className="bottom-0 w-[100vw]">
            <Footer />  
        </div>
    </div>
  )
}

export default Page