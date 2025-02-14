import React from 'react';
import { Navbar, QuantityCounter } from '../components';

const ItemPage = () => {
  return (
    
    <div>
        <Navbar />
        <div className='mt-12'>
            <div className='flex p-10 gap-10 justify-center'>

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

                <div className='flex flex-col gap-4'>
                    <div>
                        <h4 className='text-2xl font-bold'>Camsy</h4>
                        <p>₱ 899</p>
                    </div>
                    <div>
                        <p className='font-bold'>Color</p>
                        <p>White 2</p>
                    </div>
                    <div>
                        <p className='font-bold'>Size</p>
                        <p>FS, XS, S, M, L, XL, 2XL</p>
                    </div>
                    <div>
                        <QuantityCounter />
                    </div>
                    <div className='flex gap-4'>
                        <button className='border border-black py-2 px-8 hover:bg-zinc-200 cursor-pointer'>ADD TO CART</button>
                        <button className='bg-black text-white py-2 px-8 hover:bg-zinc-700 cursor-pointer'>BUY NOW</button>
                    </div>
                    <div>
                        <p className='font-bold'>Product Description</p>
                        <p>White cotton blouse with ribbon</p>
                    </div>
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