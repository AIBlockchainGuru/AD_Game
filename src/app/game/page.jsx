"use client";
import React, { useEffect, useState } from "react";
import { games } from "../utils/games";
import Image from "next/image";
import Header from "../components/Game/Header";
import { styles } from "../utils/styles";
import RatingCircle from "../components/Game/RatingCircle";
import Loader from "../components/Loader/Loader";
import { staatliches } from "../utils/font";
import { MdDone, MdClose } from "react-icons/md";


const sections = [
  {
    title: "Description",
    index: 0,
    isSelected: true,
  },
  {
    title: "Ratings",
    index: 1,
    isSelected: false,
  },
  {
    title: "Review",
    index: 2,
    isSelected: false,
  },
];

function Page() {
  // const { id } = params;
  const id = "ADNG00112";

  const [activeSection, setActiveSection] = useState(0);
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  const {
    title,
    description,
    genres,
    price,
    thumbnailUrl,
    cardUrl,
    available,
  } = game;

  const handlleSectionChange = (idx) => {
    for (let i = 0; i < 3; i++) {
      if (sections[i].isSelected === true) {
        sections[i].isSelected === false;
      }
      sections[idx].isSelected = true;
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    const game = games.filter((game) => game.id === id);
    setGame(game[0]);
  }, []);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="w-full h-full">
          <div className="z-10">
            <Image
              src={thumbnailUrl}
              alt=""
              width={1024}
              height={1024}
              className="w-[100%] h-full object-stretch z-1"
              quality={100}
              sizes="100vw, 200vh"
            />
          </div>
          <div className="w-[90%] m-auto">
            <Header />
          </div>
          <div className="w-[100vw] relative top-[-40vh] z-30">
            <div className="w-[85vw] m-auto">
              <Image
                src={cardUrl}
                width={1048}
                height={1048}
                alt=""
                quality={100}
                sizes="90vw, 150vh"
                className="w-[100%] rounded-2xl"
              />
              <div className="absolute top-0 w-[85vw] h-[130vh] bg-black bg-opacity-80 rounded-xl"></div>
            </div>
            <div className="w-[70vw] m-auto absolute pl-32 top-[10vh]">
            <h1
                  className={` ${staatliches.className}  text-left  m-auto uppercase text-3xl font-bold`}
                >
                  {title}
                </h1>
                <div className="flex gap-10">
                  <div className="w-[50%]">
                    <Image
                      src={thumbnailUrl}
                      alt=""
                      width={380}
                      height={380}
                      className=""
                      quality={100}
                      className="w-[100%] h-[380px] rounded-2xl "
                    />
                  </div>
                  <div className="w-[50%]">
                    <p className={`${staatliches.className} text-xl text-gray-400 font-bold text-left`}>
                      OUR PRICE
                    </p>
                    <p className={`${staatliches.className} font-bold text-9xl text-left mt-5`}>
                      {price}
                      <span className={`${staatliches.className} text-3xl text-gray-400 ml-1 text-left`}>
                        RS
                      </span>
                    </p>
                    <div className="flex flex-col items-end">
                        <div className={`${staatliches.className} font-bold text-xl uppercase`}>
                            {available ? (
                                <div className='flex gap-1'>
                                    <MdDone 
                                        className='w-[24px] h-[24px] text-[#7C8BD0]'
                                    /> <p className='text-[#7C8BD0]'>In Stock</p>
                                </div>
                            ) : (
                                <div className='flex gap-1'>
                                    <MdClose
                                        className='w-[24px] h-[24px]  text-red-600'
                                    /> <p className='text-red-600'>Out of Stock</p>
                                </div>
                            )}
                        </div>

                    <div className="text-right">
                      <label
                        htmlFor="quantity"
                        className={`${staatliches.className} uppercase text-xl text-gray-400 mr-2`}
                      >
                        QTY:
                      </label>
                      <input
                        type="text"
                        name="Quantity"
                        id="quantity"
                        className={`${styles.input} mt-1 w-[40%] bg-transparent text-right`}
                      />
                    </div>
                    <br />
                    <div className="w-[100%] text-right">
                      <button
                        className={`${styles.button} w-[80%] mt-3 text-center`}
                      >
                        Add to cart
                      </button>
                    </div>
                  </div>
                    
                  </div>
                </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page;
