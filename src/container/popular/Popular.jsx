import React from 'react'
import { ProductCard } from '../../components';
import Arrow from '../../assets/icons/arrow-right.png'
import 'primeicons/primeicons.css'


const Popular = () => {
    return (
        <div>
            <div className='flex justify-between m-10 p-5 border-b-4 border-gray-400'>
                <div className='text-xl font-bold'>Popular</div>
                <img src={Arrow} alt="" className='cursor-pointer'/>
            </div>
            <div className='grid grid-cols-4 m-10 gap-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='flex justify-center items-center'>
                <button className='text-white bg-black py-2 px-8 cursor-pointer 
                    transition-all duration-300 ease-in-out 
                    hover:bg-gray-800 hover:scale-105 active:scale-95 
                    flex items-center gap-2'>
                    View Popular →
                </button>
            </div>
        </div>
    )
}

export default Popular