import React from 'react'
import { ProductCard, LandingPageHeader, LandingPageButton } from '../../components';
import 'primeicons/primeicons.css'

const Popular = () => {
    return (
        <div className="px-4">
            <LandingPageHeader Title={"Popular"} />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4 sm:m-6 md:m-10">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
            <div className="flex justify-center items-center mt-6">
                <LandingPageButton Title={"View Popular"} />
            </div>
        </div>
    )
}

export default Popular;
