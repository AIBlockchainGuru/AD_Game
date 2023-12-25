import React from 'react'
import Header from '../components/Support/Header';
import Footer from '../components/Home/Footer';
import logo from '../../../public/assets/adnetwork-logo.png';
import gamer from '../../../public/assets/adnetwork-gamer.jpg';
import programming from '../../../public/assets/adnetwork-programming.jpg';
import Image from 'next/image';
import { Divider } from '@nextui-org/react';

function Page() {
  return (
    <>
        <div className='w-[100%] support'>
            <Header />
            <div className="items-center bg-black bg-opacity-45 text-white flex flex-col justify-center m-auto">
                <Image 
                    alt=''
                    src={logo}
                    width={320}
                    height={320}
                    className='rounded-full mt-[125px]'
                />
                <div className='w-[65%] m-auto p-4'>
                    <p className='text-center'>
                        Welcome to AD Network, where gaming becomes a lifestyle. Unleash your inner gamer and dive into our vast universe of games, memberships, and vouchers.
                        <br />
                        Enter the AD Network realm, pulsating with the gaming community's rhythm. We are more than just a gaming hub—we&#39;re your trusted ally for the latest titles, games, memberships, and more. Step into our domain, where gaming transcends a hobby-it's a lifestyle.
                    </p>
                </div>
                <div className='w-[100%] bg-black p-6'>
                    <p className='ml-5 text-3xl uppercase font-bold'>gaming should be for everyone</p>
                </div>
                <div className='w-[90%] flex flex-col md:flex-row justify-around m-auto'>
                    <div className="w-[100%] md:w-[45%] text-right mt-6 mb-6">
                        <Image 
                            src={gamer}
                            alt=''
                            width={320}
                            height={320}
                            className='w-[100%] h-[320px] rounded-md'
                        />
                    </div>
                    <div className='w-[90%] md:w-[45%] m-auto p-4'>
                        <p className='text-left'>
                        AD Network is an online platform that offers a wide range of gaming products at unbeatable prices. We are dedicated to providing gamers with access to affordable gaming copies, ensuring that everyone can enjoy their favorite games without breaking the bank. Our team of experts carefully curates our product database, ensuring that only the best and most popular items are available to our users. Whether you're looking for the latest AAA games, high-performance peripherals, or exclusive games, you'll find it all on ADNetwork. 
                        <br />
                        We believe that gaming should be accessible to everyone, and our mission is to make that a reality. By offering competitive prices and a seamless shopping experience, we aim to empower gamers to level up their gaming experience without emptying their wallets.
                        </p>
                    </div>
                </div>
                <div className='w-[100%] bg-black p-6'>
                    <p className='mr-5 text-right text-3xl uppercase font-bold'>we work for your greater experience in gaming</p>
                </div>
                <div className='w-[90%] flex flex-col md:flex-row-reverse justify-around m-auto'>
                    <div className="w-[100%] md:w-[45%] text-right mt-6 mb-6">
                        <Image 
                            src={programming}
                            alt=''
                            width={320}
                            height={320}
                            className='w-[100%] h-[320px] rounded-md'
                        />
                    </div>
                    <div className='w-[90%] md:w-[45%] m-auto p-4'>
                        <p className='md:text-right'>
                        At ADNetwork, we take pride in our extensive selection of gaming products. From top-tier gaming PCs to cutting-edge virtual reality headsets, we have everything you need to take your gaming to the next level. Our team works tirelessly to source products from trusted manufacturers and distributors, ensuring that each item meets our high standards of quality and performance. Whether you're a casual gamer or a professional esports player, you can trust that ADNetwork has the perfect product to suit your needs. 
                        <br />
                        We are committed to providing exceptional customer service and support. Our friendly and knowledgeable team is always ready to assist you with any questions or concerns you may have. We strive to create a community of passionate gamers who can rely on ADNetwork for all their gaming needs.
                        </p>
                    </div>
                </div>

                <div className="!bg-[#00171F] h-[150px] w-[100vw] p-24 m-auto">
                    <Divider className='w-[70%] bg-slate-50 h-[0.5px] mt-10 mb-5 m-auto'/>
                    <p className='w-[90%] md:w-[70%] mt-6 m-auto text-center'>For any further enquires please contact us via email at adnetwork@gmail.com</p>
                </div>
                <div className="bottom-0 w-[100vw]">
                    <Footer />
                </div>
            </div>
        </div>

    </>
  )
}

export default Page