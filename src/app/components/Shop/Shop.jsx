'use client'
import React, { useState } from 'react'
import Header from './Header';
import { FaSearch, FaFilter } from 'react-icons/fa';
import { styles } from '../../utils/styles';
import { games } from '../../utils/games';
import GameCard from '../../components/Shop/GameCard'
import Footer from '../Home/Footer'

function Shop() {
    const [search, setSearch] = useState('');
  return (
    <div className="w-[100vw] bg-cover bg-center bg-no-repeat flex flex-col items-center shop">
        <Header />
        <div className="w-[90%] text-white flex flex-col m-auto">
            <div className="w-[90%] md:w-[80%] lg:w-[60%] absolute top-[5rem] flex left-[5.5rem]">
                <div className="w-[70%] mt-5 relative mb-1">
                    <input 
                        type='text'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="   Search"
                        className={`${styles.input} bg-transparent w-[70%] placeholder:text-white placeholder:left-5`} 
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
                        placeholder="   Filter"
                        className={`${styles.input} bg-transparent  placeholder:text-white placeholder:left-5`} 
                    />
                    <FaFilter
                        className="absolute bottom-2 left-2 z-1 cursor-pointer text-white"
                        size={20}
                    />
                </div>
            </div>
            <div className="w-[90%] items-center flex flex-row gap-2 m-auto flex-wrap pt-52 pb-2">
                {
                    games.map((game) => (
                        <div key={game.id} className="w-[22.5%] items-center">
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
  )
}

export default Shop