import React from 'react'
import { ProductCard, LandingPageHeader, LandingPageButton } from '../../components';
import 'primeicons/primeicons.css'


const Popular = () => {
    return (
        <div>
            <LandingPageHeader Title={"Popular"}/>
            <div className='grid grid-cols-4 m-10 gap-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='flex justify-center items-center'>
                <LandingPageButton Title={"View Popular"} />
            </div>
        </div>
    )
}

export default Popular