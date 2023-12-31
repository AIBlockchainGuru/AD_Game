'use client'
import React, { useEffect, useState } from 'react'
import { news } from '../../utils/news';
import Loader from '../../components/Loader/Loader';
import Header from '../../components/News/Header';
import Image from 'next/image';
import { staatliches } from '../../utils/font';
import Footer from '../../components/Home/Footer';
import Link from 'next/link';
import { styles } from '../../utils/styles';

function Page({params}) {
    const { id } = params;
    const [displayNews, setDisplayNews] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
          }, 200);
          const newz = news.filter((obj) => obj.id === id);
          setDisplayNews(newz[0]);
    }, [])

    const { title, thumbnailUrl, description} = displayNews;

  return (
    <>
        {
            isLoading ? (
                <Loader />
            ) : (
                <>
                <div className="w-full h-full">
                    <div
                        className="z-2 relative h-[175vh] 800px:h-[200vh] bg-cover bg-center"
                        style={{ backgroundImage: `url(${thumbnailUrl})` }}
                    >
                    </div>
                    <div className='bg-black w-full h-[175vh] 800px:h-[200vh] bg-opacity-40 absolute top-0'></div>
                    <div className="w-[90%] m-auto">
                        <Header />
                    </div>

                    <div className="w-[90vw] absolute top-[150px] h-auto left-[5vw] bg-black bg-opacity-65 z-20 rounded-xl m-auto">
                        <div className="bg-[#00171F] text-center p-8 800px:text-left 800px:p-20 bg-opacity-5 z-30 w-[90vw] m-auto rounded-xl">
                            <h1 className={`${staatliches.className} uppercase text-lg 800px:text-xl 1100px:text-2xl mb-14`}>
                                {title}
                            </h1>
                            {
                                description.map((desc, index) => (
                                    <div key={`D00${index+1}`}>
                                        <p className='text-xs 800px:text-sm 1100px:text-lg'>{desc}</p>
                                        <br />
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    {/* make it stick to bottom */}
                    <div className="bottom-0 z-10 mt-10 mb-10 text-center">
                        <Link href={'/'}>
                            <button className={styles.button}>
                                Return
                            </button>
                        </Link>
                    </div>

                    <div className="bottom-0 z-10 w-[100vw]">
                        <Footer />
                    </div>
                </div>

                </>
            )
        }
    </>
  )
}

export default Page