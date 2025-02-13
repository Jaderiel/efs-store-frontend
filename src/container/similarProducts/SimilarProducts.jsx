import React from 'react'
import { ProductCard, LandingPageHeader } from '../../components';
import 'primeicons/primeicons.css'

const similarProducts = () => {
  return (
    <div>
        <LandingPageHeader Title={"Similar Products"}/>
        <div className='grid grid-cols-4 m-10 gap-4'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    </div>
  )
}

export default similarProducts