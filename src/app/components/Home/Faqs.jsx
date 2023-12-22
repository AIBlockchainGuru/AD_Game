import { styles } from '@/app/utils/styles'
import React from 'react';

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
        title: 'What makes ad network stand out?',
        description: "AD Network stands out because of its dedication to the gaming community, offering exclusive deals, immersive content, and a platform to connect with like-minded gamers."
    }
]

function Faqs() {
    return (
        <div className='w-[100vw] flex flex-col justify-center items-center'>
            <div className="h-[10vh] w-[100vw] flex flex-col justify-center bg-black">
                <h1 className='text-center text-4xl m-auto sm:text-3xl uppercase'>Got any Questions?</h1>
            </div>
            <div className="w-[90%] flex justify-center m-auto pt-6">
                <div className="w-[45%] mt-10">
                    {
                        Questions.map((question, index) => (
                            (index%2 === 0) && 
                            <div key={question.id} className="flex flex-col flex-wrap mb-8 w-[90%]">
                                <h1 className='uppercase text-3xl'>{question.title}</h1>
                                <p className='text-sm'>{question.description}</p>
                            </div>
                        ))
                    }

                </div>
                <div className="w-[45%] mt-10">
                    {
                        Questions.map((question, index) => (
                            (index%2 !== 0) && 
                            <div key={question.id} className="flex flex-col flex-wrap mb-3 w-[90%]">
                                <h1 className='uppercase text-3xl'>{question.title}</h1>
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