import React from 'react'
import { Navbar } from '../components';
import { SimilarProducts } from '../container';

const ItemPage = () => {
  return (
    
    <div>
        <Navbar />
        <div className='mt-12'>
            <div className='flex p-10 gap-10'>

                <div className='flex flex-col gap-4'>
                    <div className='bg-blue-300 h-20 w-20'>1</div>
                    <div className='bg-blue-300 h-20 w-20'>1</div>
                    <div className='bg-blue-300 h-20 w-20'>1</div>
                    <div className='bg-red-300 h-20 w-20'>2</div>
                    {/* <div className='bg-green-300 h-20 w-20'>3</div> */}
                </div>

                <div className='flex flex-col'>
                    <div className='bg-yellow-300 h-130 w-130'>4</div>
                </div>

                <div className='flex flex-col'>
                    <h4 className='text-lg font-bold'>Product Name</h4>
                    <p>Product Price</p>
                    <p>sizes</p>
                    <div>
                        <button>ADD TO CART</button>
                        <button>BUY NOW</button>
                    </div>
                    <p>Product Description</p>
                </div>
            </div>
            <div>
                {/* <SimilarProducts /> */}
            </div>
        </div>
    </div>
  )
}

export default ItemPage