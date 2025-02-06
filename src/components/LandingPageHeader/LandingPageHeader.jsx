import React from 'react'
import Arrow from '../../assets/icons/arrow-right.png'

const LandingPageHeader = ({Title}) => {
    return (
        <div className='flex justify-between m-10 p-5 border-b-4 border-black'>
            <div className='text-xl font-bold'>{Title}</div>
            <img src={Arrow} alt="" className='cursor-pointer'/>
        </div>
    )
}

export default LandingPageHeader