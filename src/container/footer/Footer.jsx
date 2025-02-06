import React from 'react'

const Footer = () => {
    return (
        <div>
        <div className='flex justify-center items-center p-8 gap-10 mt-10'>
            <a href="https://www.instagram.com/efs_apparel/" target="_blank" rel="noopener noreferrer">
                <i className='pi pi-instagram cursor-pointer hover:text-gray-500 transition-all duration-300' style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://www.facebook.com/EFSApparel" target="_blank" rel="noopener noreferrer">
                <i className='pi pi-facebook cursor-pointer hover:text-gray-500 transition-all duration-300' style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://www.tiktok.com/@efsapparel" target="_blank" rel="noopener noreferrer">
                <i className='pi pi-tiktok cursor-pointer hover:text-gray-500 transition-all duration-300' style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://x.com/EFS_Apparel" target="_blank" rel="noopener noreferrer">
                <i className='pi pi-twitter cursor-pointer hover:text-gray-500 transition-all duration-300' style={{ fontSize: '2rem' }}></i>
            </a>
            <a href="https://www.youtube.com/@EFSAPPAREL" target="_blank" rel="noopener noreferrer">
                <i className='pi pi-youtube cursor-pointer hover:text-gray-500 transition-all duration-300' style={{ fontSize: '2rem' }}></i>
            </a>
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