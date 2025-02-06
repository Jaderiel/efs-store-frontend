import React from 'react'

const Footer = () => {
    return (
        <div>
        <div className='flex justify-center items-center p-8 gap-10 mt-10'>
            <i className='pi pi-instagram cursor-pointer' style={{ fontSize: '2rem' }}></i>
            <i className='pi pi-facebook cursor-pointer' style={{ fontSize: '2rem' }}></i>
            <i className='pi pi-tiktok cursor-pointer' style={{ fontSize: '2rem' }}></i>
            <i className='pi pi-twitter cursor-pointer' style={{ fontSize: '2rem' }}></i>
            <i className='pi pi-youtube cursor-pointer' style={{ fontSize: '2rem' }}></i>
        </div>
        <div className='flex justify-center items-center flex-col gap-4'>
            <p className='cursor-pointer'>About EFS</p>
            <p className='cursor-pointer'>FAQs</p>
            <p className='cursor-pointer'>Privacy Policy</p>
            <p className='cursor-pointer'>Terms & Conditions</p>
            <p className='cursor-pointer'>Contact Us</p>
        </div>
        <div className='flex justify-center items-center p-8'>
            <p>Store Address</p>
        </div>
        </div>
    )
}

export default Footer