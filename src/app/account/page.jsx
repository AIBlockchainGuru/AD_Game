'use client';
import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Link from 'next/link';
import { styles } from '../utils/styles';
import Footer from '../components/Home/Footer';
import Image from 'next/image';
import { staatliches } from '../utils/font';
import { purchase } from '../utils/purchase';
import PurchaseCard from '../components/Account/PurchaseCard';
import { useSelector, useDispatch } from 'react-redux';
import { signOutUser, updateUserSuccess, updateUserFailure } from '../../redux/userSlice';
import toast, { Toaster } from 'react-hot-toast';
import Loader from '../components/Loader/Loader';
import { signOut, useSession } from 'next-auth/react'


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
    const session = useSession()
    console.log(session)

    const { currentUser } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const [selected, setSelected] = useState(0);
    const [toggle, setToggle] = useState(0);
    const [selectedInMobile, setSelectedInMobile] = useState(0)
    const [firstName, setFirstName] = useState(currentUser?.firstName || '');
    const [lastName, setLastName] = useState(currentUser?.lastName || '');
    const [location, setLocation] = useState(currentUser?.country || '');
    const [username, setUsername] = useState(currentUser?.username || '');
    const [email, setEmail] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [loading, setLoading] = useState(true);

    
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

    const handleLogOut = () => {
        dispatch(signOutUser(currentUser))
        signOut()
    }

    const handleUpdateUsername = async () => {

        if(username.length === 0 || username === currentUser?.username){
            toast.success("Nothing to change!")
            return;
        }

        try {
          const response = await fetch('/api/update-username', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: currentUser?.email, 
              username: username,
            }),
          });
    
          if (response.ok) {
            const data = await response.json();
            dispatch(updateUserSuccess(data.user));
            toast.success("Username updated successfully");
        } else {
            const errorData = await response.json();
            dispatch(updateUserFailure(errorData.message))
            toast.error('Error updating username: ', errorData.message);
        }
        } catch (error) {
            dispatch(updateUserFailure(error))
            toast.error('Error updating username: ', error);
        }
    };

    const handleProfileChange = async () => {
        try {
            const response = await fetch('/api/update-profile', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: currentUser?.email, 
                firstName: firstName,
                lastName: lastName,
                country: location
              }),
            });
      
            if (response.ok) {
                const data = await response.json();
                dispatch(updateUserSuccess(data.user));
                toast.success("Profile updated successfully");
            } else {
                const errorData = await response.json();
                dispatch(updateUserFailure(errorData.message))
                toast.error('Error updating Profile ', errorData.message);
            }
        } catch (error) {
            dispatch(updateUserFailure(error))
            toast.error('Error updating Profile ', error);
        }
    }

    const handlePasswordChange = async () => {
        if(newPassword !== confirmNewPassword){
            toast.error("Passwords do not match")
        }

        try {
            const response = await fetch('/api/update-password', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                email: currentUser?.email, 
                currentPassword: currentPassword,
                newPassword: newPassword
              }),
            });
      
            if (response.ok) {
                const data = await response.json();
                dispatch(updateUserSuccess(data.user));
                toast.success("Password updated successfully");
            } else {
                const errorData = await response.json();
                dispatch(updateUserFailure(errorData.message))
                toast.error(errorData.message);
            }
        } catch (error) {
            dispatch(updateUserFailure(error))
            toast.error('Error updating Profile ', error);
        }
    }

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 500)
    }, [])

    return (
        <>
            {
                loading ? (
                    <div className="">
                        <Loader />
                    </div>
                ) : (
                    <div className='w-[100%] pt-4 absoute top-0'>
                        <div className="w-[90%] h-[10vh] m-auto">
                            <Header />
                        </div>
                        {
                            !currentUser ? (
                                <div className='w-full 800px:w-[90%] h-[80vh] flex flex-col gap-3 justify-center items-center p-6 mb-8 m-auto rounded-xl account'>
                                        <h1 className={`${staatliches.className} text-2xl text-[#9793A6] uppercase`}>You are not logged in</h1>
                                        <Link href={"/sign-in"}>
                                            <button className={`${styles.button} !border-[#9793A6] !text-[#9793A6]`}>
                                                Sign In
                                            </button>
                                        </Link>
                                </div>
                            ) : (
                                <>
                                    <div className='hidden 800px:w-[90%] h-[100vh] 800px:flex flex-row p-6 mb-8 m-auto rounded-xl account'>
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
                                        <div className="w-full 800px:w-[50%] h-full">
                                            {
                                                selected === 0 && (
                                                    <>
                                                        <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Profile Management</h1>
                                                        <div className='w-[90%] m-auto h-[70%] mt-10 flex flex-col gap-2 justify-between'>
                                                            <div className='w-[100%] flex flex-col gap-2 justify-center items-center'>
                                                                <div className="relative">
                                                                    <Image 
                                                                        src='/assets/noavatar.png'
                                                                        alt='Profile'
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
                                                                        placeholder='@username' 
                                                                        value={username} 
                                                                        className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                        onChange={(e) => setUsername(e.target.value)}
                                                                    />
                                                                </div> 
                                                            </div>
                                                            <div className='flex flex-col items-center w-[100%]'>
                                                                <button onClick={() => handleUpdateUsername()} className={`${styles.button} w-[70%]`}>
                                                                    Save Changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )    
                                            }
                                            {
                                                selected === 1 && (
                                                    <>
                                                        <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Personal Information</h1>
                                                        <div className='w-[90%] m-auto h-[75%] flex flex-col justify-between gap-2'>
                                                            <div className="w-[100%] flex flex-col gap-2">
                                                                <div className="flex gap-2 w-[90%]">
                                                                    <div className="flex flex-col gap-2 w-[50%]">
                                                                        <label htmlFor="firstName" className={`${staatliches.className} uppercase text-xl font-semibold`}>First Name</label>
                                                                        <input 
                                                                            type="text" 
                                                                            id='firstName' 
                                                                            placeholder='First Name' 
                                                                            value={firstName} 
                                                                            className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                            onChange={(e) => setFirstName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className="flex flex-col gap-2 w-[50%]">
                                                                        <label htmlFor="lastName" className={`${staatliches.className} uppercase text-xl font-semibold`}>Last Name</label>
                                                                        <input 
                                                                            type="text" 
                                                                            id='lastName' 
                                                                            placeholder='Last Name' 
                                                                            value={lastName} 
                                                                            className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                            onChange={(e) => setLastName(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                                <div className="flex flex-col mt-4 gap-2 w-[90%]">
                                                                    <label htmlFor="location" className={`${staatliches.className} uppercase text-xl font-semibold`}>Country or Region</label>
                                                                    <input 
                                                                        type="text" 
                                                                        id='location' 
                                                                        placeholder='Country or Region' 
                                                                        value={location} 
                                                                        className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                            onChange={(e) => setLocation(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-col items-center w-[100%]'>
                                                                <button onClick={() => handleProfileChange()} className={`${styles.button} w-[70%]`}>
                                                                    Save Changes
                                                                </button>
                                                            </div>
                                                        </div>
                
                                                    </>
                                                )    
                                            }
                                            {
                                                selected === 2 && (
                                                    <>
                                                        <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Sign In Information</h1>
                                                        <div className='w-[90%] m-auto h-[75%] flex flex-col justify-between gap-2'>
                                                            <div className="w-[100%] flex flex-col gap-2">
                                                                <div className="flex flex-col mt-2 gap-2">
                                                                    <label htmlFor="email" className={`${staatliches.className} uppercase text-xl font-semibold`}>Email</label>
                                                                    <input 
                                                                        type="email" 
                                                                        id='email' 
                                                                        placeholder='default***@gmail.com' 
                                                                        className={`${styles.button} w-[92%] bg-white bg-opacity-20`} 
                                                                        value={currentUser?.email || email } 
                                                                        readOnly
                                                                    />
                                                                </div>
                                                                <div className="flex flex-col mt-4 gap-2">
                                                                    <label htmlFor="password" className={`${staatliches.className} uppercase text-xl font-semibold`}>Change Password</label>
                                                                    <input 
                                                                        type="password" 
                                                                        id='currentPassword' 
                                                                        placeholder='Current Password' 
                                                                        value={currentPassword} 
                                                                        className={`${styles.button} w-[92%] bg-white bg-opacity-20`} 
                                                                            onChange={(e) => setCurrentPassword(e.target.value)}
                                                                    />
                                                                    <input 
                                                                        type="password" 
                                                                        id='newPassword' 
                                                                        placeholder='New Password' 
                                                                        value={newPassword} 
                                                                        className={`${styles.button} w-[92%] mt-4 bg-white bg-opacity-20`} 
                                                                            onChange={(e) => setNewPassword(e.target.value)}
                                                                    />
                                                                    <input 
                                                                        type="password" 
                                                                        id='confirmNewPassword' 
                                                                        placeholder='Confirm New Password' 
                                                                        value={confirmNewPassword} 
                                                                        className={`${styles.button} w-[92%] mt-4 bg-white bg-opacity-20`} 
                                                                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className='flex flex-col items-center w-[100%]'>
                                                                <button onClick={() => handlePasswordChange()} className={`${styles.button} w-[70%]`}>
                                                                    Save Changes
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </>
                                                )    
                                            }
                                            {
                                                selected === 3 && (
                                                    <>
                                                        <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Purchases</h1>
                                                        <div className='w-[90%] h-[72vh] overflow-y-auto flex flex-col m-auto !mb-0 mt-5'>
                                                            {/* Cart Details */}
                                                            {
                                                                purchase.length !== 0 && purchase.map((curr) => (
                                                                    <>
                                                                        <div key={curr.gameId} className='mb-8'>
                                                                            <PurchaseCard purchase={curr} />
                                                                        </div>
                                                                    </>
                                                                ))
                                                            }
                                                            {
                                                                purchase.length == 0 && (
                                                                    <div className="flex flex-col h-[72vh] justify-center items-center">
                                                                        <h1 className={`${staatliches.className} text-[#9793A6] text-xl uppercase`}>Nothing Purchased Yet</h1>
                                                                    </div>
                                                                )
                                                            }
                                                        </div>
                                                    </>
                                                )    
                                            }
                                            {
                                                selected === 4 && (
                                                    <>
                                                        <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Login Management</h1>
                                                        <div className='w-[90%] m-auto mt-10'>
                                                            <Link href={"#"}>
                                                                <button onClick={handleLogOut} className={`${styles.button} w-[100%] text-center`}>
                                                                    Log out
                                                                </button>
                                                            </Link>
                                                        </div>
                                                    </>
                                                )    
                                            }
                                        </div>
                                    </div>
                                    <div className='w-full 800px:hidden h-[100vh] flex flex-row p-6 mb-8 m-auto rounded-xl account'>
                                        {
                                            toggle === 0 && (
                                                <div className="w-full 800px:w-[50%] 800px:border-r-[0.5px] border-white">
                                                    <h1 className={`${staatliches.className} w-[90%] uppercase 800px:text-left text-center pt-12 pb-6 text-2xl text-[32px] font-bold m-auto`}>Account Management</h1>
                                                    <div className='w-[90%] flex flex-col m-auto mt-10'>
                                                    {
                                                        navOptions.map((nav, index) => (
                                                            <div key={nav.id} className='mb-6 mt-4'>
                                                                <p 
                                                                    className={`border-white border-[0.5px] cursor-pointer uppercase p-2 pl-3`}
                                                                    onClick={() => {
                                                                        setSelectedInMobile(index);
                                                                        setToggle(1);
                                                                    }}    
                                                                >{nav.title}</p>
                                                            </div>
                                                        ))
                                                    }
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            toggle === 1 && (
                                                <div className="w-full h-full">
                                                    {
                                                        selectedInMobile === 0 && (
                                                            <>
                                                                <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Profile Management</h1>
                                                                <div className='w-[90%] m-auto h-[70%] mt-10 flex flex-col gap-2 justify-between'>
                                                                    <div className='w-[100%] flex flex-col gap-2 justify-center items-center'>
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
                                                                                placeholder='@username' 
                                                                                value={username} 
                                                                                className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                                onChange={(e) => setUsername(e.target.value)}
                                                                            />
                                                                        </div> 
                                                                    </div>
                                                                    <div className='flex flex-col items-center w-[100%]'>
                                                                        <button onClick={() => handleUpdateUsername()} className={`${styles.button} w-[70%]`}>
                                                                            Save Changes
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )    
                                                    }
                                                    {
                                                        selectedInMobile === 1 && (
                                                            <>
                                                                <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Personal Information</h1>
                                                                <div className='w-[90%] m-auto h-[75%] flex flex-col justify-between gap-2'>
                                                                    <div className="w-[100%] flex flex-col gap-2">
                                                                        <div className="flex gap-2 w-[90%]">
                                                                            <div className="flex flex-col gap-2 w-[50%]">
                                                                                <label htmlFor="firstName" className={`${staatliches.className} uppercase text-xl font-semibold`}>First Name</label>
                                                                                <input 
                                                                                    type="text" 
                                                                                    id='firstName' 
                                                                                    placeholder='First Name' 
                                                                                    value={firstName} 
                                                                                    className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                                    onChange={(e) => setFirstName(e.target.value)}
                                                                                />
                                                                            </div>
                                                                            <div className="flex flex-col gap-2 w-[50%]">
                                                                                <label htmlFor="lastName" className={`${staatliches.className} uppercase text-xl font-semibold`}>Last Name</label>
                                                                                <input 
                                                                                    type="text" 
                                                                                    id='lastName' 
                                                                                    placeholder='Last Name' 
                                                                                    value={lastName} 
                                                                                    className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                                    onChange={(e) => setLastName(e.target.value)}
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                        <div className="flex flex-col mt-4 gap-2 w-[90%]">
                                                                            <label htmlFor="location" className={`${staatliches.className} uppercase text-xl font-semibold`}>Country or Region</label>
                                                                            <input 
                                                                                type="text" 
                                                                                id='location' 
                                                                                placeholder='Country or Region' 
                                                                                value={location} 
                                                                                className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                                    onChange={(e) => setLocation(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex flex-col items-center w-[100%]'>
                                                                        <button onClick={() => handleProfileChange()} className={`${styles.button} w-[70%]`}>
                                                                            Save Changes
                                                                        </button> 
                                                                    </div>
                                                                </div>
                
                                                            </>
                                                        )    
                                                    }
                                                    {
                                                        selectedInMobile === 2 && (
                                                            <>
                                                                <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Sign In Information</h1>
                                                                <div className='w-[90%] m-auto h-[75%] flex flex-col justify-between gap-2'>
                                                                    <div className="w-[100%] flex flex-col gap-2">
                                                                        <div className="flex flex-col mt-2 gap-2">
                                                                            <label htmlFor="email" className={`${staatliches.className} uppercase text-xl font-semibold`}>Email</label>
                                                                            <input 
                                                                                type="email" 
                                                                                id='email' 
                                                                                placeholder='default***@gmail.com' 
                                                                                className={`${styles.button} w-[92%] bg-white bg-opacity-20`} 
                                                                                value={currentUser?.email || email } 
                                                                                readOnly
                                                                            />
                                                                        </div>
                                                                        <div className="flex flex-col mt-4 gap-2">
                                                                            <label htmlFor="password" className={`${staatliches.className} uppercase text-xl font-semibold`}>Change Password</label>
                                                                            <input 
                                                                                type="password" 
                                                                                id='currentPassword' 
                                                                                placeholder='Current Password' 
                                                                                value={currentPassword} 
                                                                                className={`${styles.button} w-[92%] bg-white bg-opacity-20`} 
                                                                                    onChange={(e) => setCurrentPassword(e.target.value)}
                                                                            />
                                                                            <input 
                                                                                type="password" 
                                                                                id='newPassword' 
                                                                                placeholder='New Password' 
                                                                                value={newPassword} 
                                                                                className={`${styles.button} w-[92%] mt-4 bg-white bg-opacity-20`} 
                                                                                    onChange={(e) => setNewPassword(e.target.value)}
                                                                            />
                                                                            <input 
                                                                                type="password" 
                                                                                id='confirmNewPassword' 
                                                                                placeholder='Confirm New Password' 
                                                                                value={confirmNewPassword} 
                                                                                className={`${styles.button} w-[92%] mt-4 bg-white bg-opacity-20`} 
                                                                                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className='flex flex-col items-center w-[100%]'>
                                                                        <button onClick={() => handlePasswordChange()} className={`${styles.button} w-[70%]`}>
                                                                            Save Changes
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </>
                                                        )    
                                                    }
                                                    {
                                                        selectedInMobile === 3 && (
                                                            <>
                                                                <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Purchases</h1>
                                                                <div className='w-[90%] h-[72vh] overflow-y-auto flex flex-col m-auto !mb-0 mt-5'>
                                                                    {/* Cart Details */}
                                                                    {
                                                                        purchase.length !== 0 && purchase.map((curr) => (
                                                                            <>
                                                                                <div key={curr.gameId} className='mb-8'>
                                                                                    <PurchaseCard purchase={curr} />
                                                                                </div>
                                                                            </>
                                                                        ))
                                                                    }
                                                                    {
                                                                        purchase.length == 0 && (
                                                                            <div className="flex flex-col h-[72vh] justify-center items-center">
                                                                                <h1 className={`${staatliches.className} text-[#9793A6] text-xl uppercase`}>Nothing Purchased Yet</h1>
                                                                            </div>
                                                                        )
                                                                    }
                                                                </div>
                                                            </>
                                                        )    
                                                    }
                                                    {
                                                        selectedInMobile === 4 && (
                                                            <>
                                                                <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-10 text-2xl text-[32px] font-bold m-auto`}>Login Management</h1>
                                                                <div className='w-[90%] m-auto mt-10'>
                                                                    <Link href={"#"}>
                                                                        <button onClick={handleLogOut} className={`${styles.button} w-[100%] text-center`}>
                                                                            Log out
                                                                        </button>
                                                                    </Link>
                                                                </div>
                                                            </>
                                                        )    
                                                    }
                                                </div>
                                            )
                                        }
                                    </div>
                                </>
                            )
                        }
                
                
                        <div className="text-center mt-10 mb-10">
                            {
                                toggle === 1 && (
                                    <Link href={'/account'}>
                                        <button className={styles.button} onClick={()=> setToggle(0)}>
                                            Return
                                        </button>
                                    </Link>
                                )
                            }
                            {
                                toggle === 0 && (
                                    <Link href={'/'}>
                                        <button className={styles.button}>
                                            Return
                                        </button>
                                    </Link>
                                )
                            }
                        </div>
                
                        <div className="bottom-0 w-[100vw]">
                            <Footer />  
                        </div>
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                    </div>
                )
            }
        </>
    )
}

export default Page;