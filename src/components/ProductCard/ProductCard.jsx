import React from 'react'

const ProductCard = () => {
    return (
        <div>
            <div className='bg-blue-300 w-full h-120'>1</div>
            <div className='flex justify-between items-center'>
                <div>
                    <div>Product Name</div>
                    <div>Price</div>
                </div>
                <div className='mr-2'>
                    <i className='pi pi-heart'></i>
                </div>
            </div>
        </div>
    )
}

export default ProductCard