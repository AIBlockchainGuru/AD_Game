import React from 'react'
import { games } from '../../utils/games';

function Page({params}) {
    const { id } = params;

    const game = games.filter((game) => game.id === id);
    
    return (
    <div>
        <h1>This is Game {id} </h1>
    </div>
  )
}

export default Page;