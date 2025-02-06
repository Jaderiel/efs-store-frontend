import React from 'react'
import { LandingPageHeader, ProductCard, LandingPageButton } from '../../components'

const NewArrivals = () => {
    return (
        <div>
            <LandingPageHeader Title={"New Arrivals"}/>
            <div className='grid grid-cols-4 m-10 gap-4'>
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className='flex justify-center items-center'>
                <LandingPageButton Title={"View New Arrivals"} />
            </div>
        </div>
    )
}

export default NewArrivals