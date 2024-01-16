'use client';
import React, {useCallback, useEffect, useState} from 'react';
import Header from '../components/Header';
import Link from 'next/link';
import { styles } from '../utils/styles';
import Footer from '../components/Home/Footer';
import Image from 'next/image';
import { staatliches } from '../utils/font';
import { cart } from '../utils/cart';
import CartCard from '../components/Cart/CartCard';
import { Divider } from '@nextui-org/react';

import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import { useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import Loader from '../components/Loader/Loader';

function Page() {

    const { currentUser } = useSelector(state => state.user);

    const [toggle, setToggle] = useState(0);
    const [email, setEmail] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiry, setExpiry] = useState(null);
    const [cvv, setCvv] = useState('');
    const [name, setName] = useState('');
    const [country, setCountry] = useState('');
    const [total, setTotal] = useState(0);

    const [loading, setLoading] = useState(true);
    const [cartData, setCartData] = useState([]);

    const handleDateChange = (date) => {
        setExpiry(date);
    }

    const formatCardNumber = (input) => {
        // Remove non-digit characters
        const numericInput = input.replace(/\D/g, '');
    
        // Add a space after every 4 digits
        const formattedInput = numericInput.replace(/(\d{4})/g, '$1 ');
    
        // Trim any leading or trailing spaces
        const trimmedInput = formattedInput.trim();
    
        // Limit to 16 digits
        const limitedInput = trimmedInput.slice(0, 19);
    
        return limitedInput;
    };
    
    const handleInputChange = (event) => {
        const inputValue = event.target.value;
        const formattedValue = formatCardNumber(inputValue);
        setCardNumber(formattedValue);
    };

    const handleCvvChange = (event) => {
        // Remove non-digit characters
        const numericInput = event.target.value.replace(/\D/g, '');
    
        // Limit to 3 digits
        const limitedInput = numericInput.slice(0, 3);
    
        setCvv(limitedInput);
    };



    useEffect(() => {
        const fetchData = async () => {
            if(!currentUser){
                setLoading(false);
                return;
            }
            try {
              const response = await fetch('/api/get-cart-products', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email: currentUser?.email }),
              });
      
              if (!response.ok) {
                toast.error('Failed to fetch data');
                setLoading(false);
              }
              
              const data = await response.json();
              setCartData(data.cartItems);
            //   console.log(data);
              setLoading(false);
            } catch (error) {
            //   console.error('Error fetching data:', error);
              toast.error('Failed to fetch data');
              setLoading(false);
            }
        };
        
        fetchData();
    }, [cartData])

    return (
        <>
            {
                loading ? (
                    <Loader />
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
                                    <div className='hidden 800px:w-[90%] h-[120vh] 800px:flex flex-row p-6 mb-8 m-auto rounded-xl account'>
                                        <div className="w-[50%] 800px:border-r-[0.5px] border-white">
                                            <h1 className={`${staatliches.className} w-[90%] uppercase 800px:text-left text-center pt-12 pb-6 text-[32px] font-bold m-auto`}>Order Details</h1>
                                            <div className='w-[90%] h-[70vh] overflow-y-auto flex flex-col m-auto !mb-0 mt-10'>
                                                {/* Cart Details */}
                                                {
                                                    cartData && cartData.length !== 0 && cartData.map((curr) => (
                                                        <>
                                                            <div key={curr.gameId} className='mb-8'>
                                                                <CartCard cart={curr} total={Number(total)} setTotal={setTotal} setCartData={setCartData} />
                                                            </div>
                                                        </>
                                                    ))
                                                }
                                                {
                                                    cartData && cartData.length == 0 && (
                                                        <div className="flex flex-col h-[70vh] justify-center items-center">
                                                            <h1 className={`${staatliches.className} text-xl text-[#9793A6] uppercase`}>Your cart is empty</h1>
                                                        </div>
                                                    )
                                                }
                                            </div>
                                            <div className='w-[90%] m-auto !mt-8'>
                                                <Divider className='w-[90%] mx-auto bg-slate-50 h-[0.5px] mt-4 mb-5'/>
                                                <div className='flex justify-between w-[90%] m-auto'>
                                                    <p className={`${staatliches.className} text-lg uppercase`}>Subtotal</p>
                                                    <p className={`${staatliches.className} text-lg uppercase`}>{Number(total)}</p>
                                                </div>
                                                <div className='flex justify-between w-[90%] m-auto !mt-1'>
                                                    <p className={`${staatliches.className} text-lg uppercase`}>Fee</p>
                                                    <p className={`${staatliches.className} text-lg uppercase`}>{total !== 0 ? 100 : 0}</p>
                                                </div>
                                                <div className='flex justify-between w-[90%] m-auto !mt-1'>
                                                    <p className={`${staatliches.className} text-lg uppercase`}>Total</p>
                                                    <p className={`${staatliches.className} text-lg uppercase`}>{total !== 0 ? total + 100 : 0}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-full">
                                            <h1 className={`${staatliches.className} w-[90%] uppercase pt-12 pb-5 text-[32px] font-bold m-auto`}>Payment Details</h1>
                                            <div className='w-[90%] h-[80%] m-auto flex flex-col justify-between'>
                
                                                <p className='text-lg w-[80%]'>{"Please provide your payment information to complete your purchase"}</p>
                
                                                <div className="flex flex-col mt-2 gap-2">
                                                    <label htmlFor="email" className={`${staatliches.className} uppercase text-xl font-semibold`}>Email</label>
                                                    <input 
                                                        type="email" 
                                                        id='email' 
                                                        placeholder='default***@gmail.com' 
                                                        value={email} 
                                                        className={`${styles.button} w-[92%] bg-white bg-opacity-20`} 
                                                        onChange={(e) => setEmail(e.target.value)}
                                                    />
                                                </div>
                                                <div className="flex w-[100%] flex-col mt-2 gap-2">
                                                    <label htmlFor="cardNumber" className={`${staatliches.className} uppercase text-xl font-semibold`}>Card Information</label>
                                                    <input
                                                        type="text" 
                                                        id="cardNumber"
                                                        placeholder="4424 4424 4424 4425"
                                                        value={cardNumber}
                                                        className={`${styles.button} w-[92%] bg-white bg-opacity-20`}
                                                        onChange={handleInputChange}
                                                    />
                                                    <div className='flex w-[92%] gap-2'>
                                                        <DatePicker
                                                            selected={expiry}
                                                            onChange={handleDateChange}
                                                            dateFormat="MM/yy" // Specify the format to show month and year
                                                            showMonthYearPicker
                                                            className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                            placeholderText="MM/YY"
                                                        />
                                                        <input
                                                            type="text"
                                                            id="cvv"
                                                            placeholder="123"
                                                            value={cvv}
                                                            className={`${styles.button} w-[100%] bg-white bg-opacity-20`}
                                                            onChange={handleCvvChange}
                                                        />
                
                                                    </div>
                                                </div>
                                                
                                                <div className="flex flex-col mt-2 gap-2">
                                                    <label htmlFor="name" className={`${staatliches.className} uppercase text-xl font-semibold`}>Name on the Card</label>
                                                    <input
                                                        type="text" 
                                                        id="name"
                                                        placeholder="John Doe"
                                                        value={name}
                                                        className={`${styles.button} w-[92%] bg-white bg-opacity-20 uppercase`}
                                                        onChange={(e) => setName(e.target.value)}
                                                    />
                                                </div>
                                                
                                                <div className="flex flex-col mt-2 gap-2">
                                                    <label htmlFor="country" className={`${staatliches.className} uppercase text-xl font-semibold`}>Country or Region</label>
                                                    <input
                                                        type="text" 
                                                        id="country"
                                                        placeholder="Select Your Country"
                                                        value={country}
                                                        className={`${styles.button} w-[92%] bg-white bg-opacity-20`}
                                                        onChange={(e) => setCountry(e.target.value)}
                                                    />
                                                </div>
                
                                                <Link href={"#"}>
                                                    <button className={`${styles.button} w-[92%] text-center`}>
                                                        Proceed to Pay
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                    {/*  Mobile UI  */}
                                    <div className='w-full 800px:hidden h-[120vh] flex flex-row p-6 mb-8 m-auto rounded-xl account'>
                                        {
                                            toggle === 0 && (
                                                <div className="w-full h-full">
                                                    <h1 className={`${staatliches.className} w-[90%] text-center uppercase pt-12 pb-5 text-[32px] font-bold m-auto`}>Payment Details</h1>
                                                    <div className='w-[90%] h-[80%] m-auto flex flex-col items-center justify-between'>
                
                                                        <p className='text-lg w-[90%] text-center'>{"Please provide your payment information to complete your purchase"}</p>
                
                                                        <div className="flex w-[100%] flex-col mt-2 gap-2">
                                                            <label htmlFor="email" className={`${staatliches.className} uppercase text-xl font-semibold`}>Email</label>
                                                            <input 
                                                                type="email" 
                                                                id='email' 
                                                                placeholder='default***@gmail.com' 
                                                                value={email} 
                                                                className={`${styles.button} w-[92%] bg-white bg-opacity-20`} 
                                                                onChange={(e) => setEmail(e.target.value)}
                                                            />
                                                        </div>
                                                        <div className="flex w-[100%] flex-col mt-2 gap-2">
                                                            <label htmlFor="cardNumber" className={`${staatliches.className} uppercase text-xl font-semibold`}>Card Information</label>
                                                            <input
                                                                type="text" 
                                                                id="cardNumber"
                                                                placeholder="4424 4424 4424 4425"
                                                                value={cardNumber}
                                                                className={`${styles.button} w-[92%] bg-white bg-opacity-20`}
                                                                onChange={handleInputChange}
                                                            />
                                                            <div className='flex gap-2 w-[92%]'>
                                                                <DatePicker
                                                                    selected={expiry}
                                                                    onChange={handleDateChange}
                                                                    dateFormat="MM/yy" // Specify the format to show month and year
                                                                    showMonthYearPicker
                                                                    className={`${styles.button} w-[100%] bg-white bg-opacity-20`} 
                                                                    placeholderText="MM/YY"
                                                                />
                                                                <input
                                                                    type="text"
                                                                    id="cvv"
                                                                    placeholder="123"
                                                                    value={cvv}
                                                                    className={`${styles.button} w-[100%] bg-white bg-opacity-20`}
                                                                    onChange={handleCvvChange}
                                                                />
                
                                                            </div>
                                                        </div>
                                                        
                                                        <div className="flex w-[100%] flex-col mt-2 gap-2">
                                                            <label htmlFor="name" className={`${staatliches.className} uppercase text-xl font-semibold`}>Name on the Card</label>
                                                            <input
                                                                type="text" 
                                                                id="name"
                                                                placeholder="John Doe"
                                                                value={name}
                                                                className={`${styles.button} w-[92%] bg-white bg-opacity-20 uppercase`}
                                                                onChange={(e) => setName(e.target.value)}
                                                            />
                                                        </div>
                                                        
                                                        <div className="flex w-[100%] flex-col mt-2 gap-2">
                                                            <label htmlFor="country" className={`${staatliches.className} uppercase text-xl font-semibold`}>Country or Region</label>
                                                            <input
                                                                type="text" 
                                                                id="country"
                                                                placeholder="Select Your Country"
                                                                value={country}
                                                                className={`${styles.button} w-[92%] bg-white bg-opacity-20`}
                                                                onChange={(e) => setCountry(e.target.value)}
                                                            />
                                                        </div>
                                                        
                                                        <div className="flex w-[100%] flex-col mt-2 gap-2">    
                                                            <Link href={"#"}>
                                                                <button className={`${styles.button} w-[92%] text-center`}>
                                                                    Proceed to Pay
                                                                </button>
                                                            </Link>
                                                        </div>
                
                                                    </div>
                                                </div>
                                            )
                                        }
                                        {
                                            toggle === 1 && (
                                                <div className="w-full h-[120vh]">
                                                    <h1 className={`${staatliches.className} w-[90%] uppercase 800px:text-left text-center pt-5 pb-6 text-[32px] font-bold m-auto`}>Order Details</h1>
                                                    <div className='w-[90%] h-[72vh] overflow-y-auto flex flex-col m-auto !mb-0 mt-5'>
                                                        {/* Cart Details */}
                                                        {
                                                            cartData && cartData.length !== 0 && cartData.map((curr) => (
                                                                <>
                                                                    <div key={curr.gameId} className='mb-8'>
                                                                        <CartCard cart={curr} total={Number(total)} setTotal={setTotal} setCartData={setCartData} />
                                                                    </div>
                                                                </>
                                                            ))
                                                        }
                                                        {
                                                            cartData && cartData.length == 0 && (
                                                                <div className="flex flex-col h-[72vh] justify-center items-center">
                                                                    <h1 className={`${staatliches.className} text-[#9793A6] text-xl uppercase`}>Your cart is empty</h1>
                                                                </div>
                                                            )
                                                        }
                                                    </div>
                                                    <div className='w-[90%] m-auto !mt-8'>
                                                        <Divider className='w-[90%] mx-auto bg-slate-50 h-[0.5px] mt-4 mb-5'/>
                                                        <div className='flex justify-between w-[90%] m-auto'>
                                                            <p className={`${staatliches.className} text-lg uppercase`}>Subtotal</p>
                                                            <p className={`${staatliches.className} text-lg uppercase`}>{Number(total)}</p>
                                                        </div>
                                                        <div className='flex justify-between w-[90%] m-auto !mt-1'>
                                                            <p className={`${staatliches.className} text-lg uppercase`}>Fee</p>
                                                            <p className={`${staatliches.className} text-lg uppercase`}>{total !== 0 ? 100 : 0}</p>
                                                        </div>
                                                        <div className='flex justify-between w-[90%] m-auto !mt-1'>
                                                            <p className={`${staatliches.className} text-lg uppercase`}>Total</p>
                                                            <p className={`${staatliches.className} text-lg uppercase`}>{total !== 0 ? total + 100 : 0}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                    </div>
                                    {
                                        toggle == 0 && (
                                            <div className='800px:hidden text-center mt-10 mb-10'>
                                                <button className={styles.button} onClick={() => {
                                                    setTotal(0)
                                                    setToggle(1)
                                                }}>
                                                    Check Cart
                                                </button>
                                            </div>
                                        )
                
                                    }
                                </>
                            )
                        }
                
                        <div className="text-center mt-10 mb-10">
                            {
                                toggle === 1 && (
                                    <button className={styles.button} onClick={()=> setToggle(0)}>
                                        Return
                                    </button>
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
                    </div>
                )
            }
        </>
    )
}

export default Page