import { styles } from '../../utils/styles'
import React from 'react';
import { staatliches } from '../../utils/font';

const Questions = [
    {
        id: "Q0011",
        title: 'What platforms do you support?',
        description: "Primarily, we focus on Playstation but stay tuned as we're constantly level up our offerings."
    },
    {
        id: "Q0012",
        title: 'How do I enter the giveaways?',
        description: "Simple, follow these three steps to enter the giveaways and chance to take home a exciting release."
    },
    {
        id: "Q0013",
        title: 'What makes AD Gaming stand out?',
        description: "AD Gaming stands out because of its dedication to the gaming community, offering exclusive deals, immersive content, and a platform to connect with like-minded gamers."
    }
]

function Faqs() {
    return (
        <div className='w-[100vw] flex flex-col justify-center items-center'>
            <div className="h-[10vh] w-[100vw] flex flex-col justify-center py-4 bg-black">
                <h1 className={`${staatliches.className} text-center text-3xl 800px:text-4xl m-auto uppercase`}>Got any Questions?</h1>
            </div>
            <div className="w-[90%] flex flex-col 800px:flex-row items-center 800px:items-start justify-center m-auto pt-6">
                <div className="w-[90%] 800px:w-[45%] mt-10">
                    {
                        Questions.map((question, index) => (
                            (index%2 === 0) && 
                            <div key={question.id} className="flex flex-col flex-wrap mb-[64px] w-[90%]">
                                <h1 className={`${staatliches.className} uppercase text-2xl`}>{question.title}</h1>
                                <p className='text-sm'>{question.description}</p>
                            </div>
                        ))
                    }

                </div>
                <div className="w-[90%] 800px:w-[45%] 800px:mt-10">
                    {
                        Questions.map((question, index) => (
                            (index%2 !== 0) && 
                            <div key={question.id} className="flex flex-col flex-wrap mb-[64px] w-[90%]">
                                <h1 className={`${staatliches.className} uppercase text-2xl`}>{question.title}</h1>
                                <p className='text-sm'>{question.description}</p>
                            </div>
                        ))
                    }

                </div>
                
            </div>
        </div>
    )
}

export default Faqs