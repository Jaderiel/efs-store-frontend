import React from 'react'

const LandingPageButton = ({Title}) => {
    return (
        <button className='text-white bg-black py-2 px-8 cursor-pointer 
            transition-all duration-300 ease-in-out 
            hover:bg-gray-800 hover:scale-105 active:scale-95 
            flex items-center gap-2'>
            {Title} →
        </button>
    )
}

export default LandingPageButton