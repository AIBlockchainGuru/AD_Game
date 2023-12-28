"use client";
import React, { useState } from "react";
import Header from "./Header";
import { FaSearch, FaFilter } from "react-icons/fa";
import { styles } from "../../utils/styles";
import { games } from "../../utils/games";
import GameCard from "../../components/Shop/GameCard";
import Footer from "../Home/Footer";
import { staatliches } from "../../utils/font";

function Shop() {
  const [search, setSearch] = useState("");
  return (
    <div className="w-[100vw] bg-cover bg-center bg-no-repeat flex flex-col items-center shop">
      <Header />
      
      <div className="w-[90%] m-auto mt-[100px] flex flex-col justify-evenly gap-7">
        <div className="flex flex-row gap-7">
            <div className="w-[50%] mt-5 relative mb-1">
                <input 
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search"
                    className={`${styles.input} px-9 bg-transparent w-[100%] placeholder:text-white`} 
                />
                <FaSearch
                    className="absolute bottom-2 left-2 z-1 cursor-pointer text-white"
                    size={20}
                />
            </div>
            <div className="w-[30%] mt-5 relative mb-1">
                <input 
                    type='text'
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Filter"
                    className={`${styles.input} bg-transparent px-8 placeholder:text-white`} 
                />
                <FaFilter
                    className="absolute bottom-2 left-2 z-1 cursor-pointer text-white"
                    size={20}
                />
            </div>
        </div>

        <div className="mt-12">
            <h2 className={`${staatliches.className} uppercase text-2xl 800px:text-3xl`}>Latest</h2>
        </div>

        <div className="flex flex-row flex-wrap justify-center">
            {
                games.map((game) => (
                    <div className="w-[25%] ">
                        <GameCard game={game} />
                    </div>
                ))
            }
        </div>
      </div>

      <div className="bottom-0 w-[100vw]">
        <Footer />
      </div>
    </div>
  );
}

export default Shop;
