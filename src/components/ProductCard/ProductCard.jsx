import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = () => {
    return (
        <div>
            <div className='bg-blue-300 w-full h-120'>1</div>
            <div className='flex justify-between items-center'>
                <Link to="/ItemPage">
                    <div className='cursor-pointer'>
                        <div>Product Name</div>
                        <div>Price</div>
                    </div>
                </Link>
                <div className='mr-2'>
                    <i className='pi pi-heart cursor-pointer'></i>
                </div>
            </div>
        </div>
    )
}

export default ProductCard