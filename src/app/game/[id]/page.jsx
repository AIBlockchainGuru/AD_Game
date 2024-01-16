"use client";
import React, { useEffect, useState } from "react";
import { games } from "../../utils/games";
import Image from "next/image";
import Header from "../../components/Header";
import { styles } from "../../utils/styles";
import RatingCircle from "../../components/Game/RatingCircle";
import Loader from "../../components/Loader/Loader";
import { staatliches } from "../../utils/font";
import { MdDone, MdClose } from "react-icons/md";
import Footer from "../../components/Home/Footer";
import Link from "next/link";
import { useSelector } from "react-redux";
import toast, { Toaster } from "react-hot-toast";

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

function Page({params}) {
  const { id } = params;

  const { currentUser } = useSelector(state => state.user);

  const [activeSection, setActiveSection] = useState(0);
  const [game, setGame] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

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

  const handleAddToCart = async () => {
    if(!currentUser){
      toast.error("Please Login to add to cart");
      return;
    }
    try {
      const response = await fetch('/api/add-to-cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: currentUser?.email, 
          gameId: id,
          quantity: quantity
        }),
      });

      if (response.ok) {
          const data = await response.json();
          toast.success(data.message);
      } else {
          const errorData = await response.json();
          console.log(errorData.message)
          toast.error('Error Adding to Cart');
      }
    } catch (error) {
        toast.error('Error Error Adding to Cart', error);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 200);
    const game = games.filter((game) => game.id === id);
    setGame(game[0]);
  }, []);
  return (
    <>
      { 
        isLoading ? (
          <Loader />
      ) : (
        <div className="w-full h-full">
          <div className="z-10">
            <Image
              src={thumbnailUrl}
              alt=""
              width={1024}
              height={1024}
              className="w-[100%] h-[100vh] 800px:object-cover object-center z-1"
              quality={100}
              sizes="100vw, 200vh"
            />
          </div>
          <div className="w-[90%] m-auto">
            <Header />
          </div>
          <div className="w-[100vw] relative 800px:top-[-40vh] z-30">
            <div className="1100px:w-[85vw] m-auto">
              <Image
                src={cardUrl}
                width={1048}
                height={1048}
                alt=""
                quality={100}
                sizes="90vw, 150vh"
                className="w-[100%] 800px:h-[1000px] h-[1500px] object-stretch rounded-2xl"
              />
              <div className="absolute top-0 1100px:w-[85vw] w-[100vw] 800px:h-[1000px] h-[1500px] bg-black bg-opacity-80 rounded-xl"></div>
            </div>
            <div className="w-[70vw] m-auto absolute pl-5 1100px:pl-32 top-[10vh] 800px:left-[9vw]">
              <div className="w-[100%] m-auto">
                <h1
                  className={` ${staatliches.className} text-left mb-12  m-auto uppercase text-2xl 800px:text-3xl font-bold`}
                >
                  {title}
                </h1>
                <div className="flex flex-col 800px:flex-row gap-10 mb-12">
                  <div className="1100px:w-[50%] w-[90vw]">
                    <Image
                      src={thumbnailUrl}
                      alt=""
                      width={380}
                      height={380}
                      quality={100}
                      sizes="90vw, 150vh"
                      className="w-[100%] h-[380px] rounded-2xl"
                    />
                  </div>
                  <div className="w-[90vw] 800px:w-[50%] flex 800px:flex-col justify-between">
                    <div>
                    <p
                      className={`${staatliches.className} 800px:text-xl text-sm text-gray-400 font-bold text-left`}
                    >
                      OUR PRICE
                    </p>
                    <p
                      className={`${staatliches.className} font-bold 800px:text-9xl text-6xl text-left mt-5`}
                    >
                      {price}
                      <span
                        className={`${staatliches.className} 800px:text-3xl text-sm text-gray-400 ml-1 text-left`}
                      >
                        RS
                      </span>
                    </p>
                    </div>
                    <div className="flex flex-col items-end">
                    
                      <div
                        className={`${staatliches.className} font-bold 800px:text-xl uppercase`}
                      >
                        {available ? (
                          <div className="flex gap-1">
                            <MdDone className="w-[24px] h-[24px] text-[#7C8BD0]" />{" "}
                            <p className="text-[#7C8BD0]">In Stock</p>
                          </div>
                        ) : (
                          <div className="flex gap-1">
                            <MdClose className="w-[24px] h-[24px] text-red-600" />{" "}
                            <p className="text-red-600">Out of Stock</p>
                          </div>
                        )}
                      </div>

                      <div className="text-right">
                        <label
                          htmlFor="quantity"
                          className={`${staatliches.className} uppercase 800px:text-xl text-gray-400 mr-2`}
                        >
                          QTY:
                        </label>
                        <input
                          type="number"
                          name="Quantity"
                          min={1}
                          readOnly={!available}
                          value={quantity}
                          onChange={(e) => {
                            if(e.target.value <= 5){
                              setQuantity(e.target.value)
                            }
                          }}
                          id="quantity"
                          placeholder="00"
                          className={`text-white  py-1 px-4 border-slate-50 border-small rounded-none text-lg h-6 800px:h-9 800px:mt-1 800px:w-[40%] w-[30%] bg-transparent text-right`}
                        />
                      </div>
                      <br />
                      <div className="w-[100%] text-right">
                        <button
                          onClick={handleAddToCart}
                          className={`bg-transparent text-white py-1 800px:px-4 px-3 border-slate-50 border-small rounded-none text-sm 800px:text-lg 800px:w-[85%] 800px:mt-3 w-[60%] text-center`}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="800px:w-[85vw] w-[100vw] absolute 800px:left-[-1.5vw] left-0 flex flex-col gap-2">
                <div className="w-[100%] flex py-2 bg-black">
                  {sections.map((section, index) => (
                    <div
                      key={section.title}
                      className={`${
                        staatliches.className
                      } w-[90%] text-center cursor-pointer ${
                        index === activeSection ? "border-b-2 border-white" : ""
                      }`}
                    >
                      <p
                        className={`uppercase text-2xl ${
                          section.isSelected ? "text-white" : "text-gray-400"
                        }`}
                        onClick={() => {
                          sections[activeSection].isSelected = false;
                          setActiveSection(index);
                          sections[index].isSelected = true;
                        }}
                      >
                        {section.title}
                      </p>
                    </div>
                  ))}
                </div>

                {activeSection === 0 && (
                  <div className="800px:w-[80%] w-[90vw] m-auto 800px:p-2 text-justify">
                    {game.description.map((description, index) => (
                      <div key={`D00${index}`} className="text-center">
                        <p className="text-base text-center">{description}</p>
                        <br />
                      </div>
                    ))}
                  </div>
                )}
                {activeSection === 1 && (
                  <div className="w-[85%] 800px:px-24 m-auto p-2 flex 800px:flex-row flex-col gap-3 justify-between">
                    <div className="800px:w-[40%] w-[100%] flex justify-center mt-8">
                      <RatingCircle rating={game.ratings[0].rating} />
                    </div>
                    <div className="800px:w-[45%] w-[100%] mt-8 flex flex-col justify-between gap-8">
                      <div className="">
                        <p
                          className={`${staatliches.className} 800px:text-5xl text-3xl 800px:text-right text-center uppercase`}
                        >
                          {game.ratings[0].positive.title}
                        </p>
                        <p className="800px:text-lg text-xs 800px:text-right text-center 800px:pl-[6rem] text-slate-200">
                          {game.ratings[0].positive.description}
                        </p>
                      </div>
                      <div>
                        <p
                          className={`${staatliches.className} 800px:text-5xl text-3xl 800px:text-right text-center uppercase`}
                        >
                          {game.ratings[0].negative.title}
                        </p>
                        <p className="800px:text-lg text-xs 800px:text-right text-center 800px:pl-[6rem] text-slate-200 ">
                          {game.ratings[0].negative.description}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {
                  activeSection == 2 && (
                    <>
                      <h1 className="text-center text-xl">Review</h1>
                    </>
                  )
                }
              </div>
            </div>
            {
              activeSection == 2 && (
                <div className="w-[90vw] 800px:absolute 800px:left-[5%] 800px:bottom-[-20vh] text-center !m-auto !mb-0 800px:!mb-10 !pt-10">
                  <Link href={'/'}>
                      <button className={`${styles.button}`}>
                        Add Review
                      </button>
                  </Link>
                </div>
              )
            }
            <div className="w-[90vw] 800px:absolute 800px:left-[5%] 800px:bottom-[-30vh] text-center !m-auto !mb-10 800px:mb-0 !pt-10">
              <Link href={'/'}>
                  <button className={`${styles.button}`}>
                    Return
                  </button>
              </Link>
            </div>
          </div>


          <div className="w-[100vw]">
            <Footer />
          </div>

        </div>
      )}
      <Toaster 
        position="top-center"
        reverseOrder={false}
      />
    </>
  );
}

export default Page;