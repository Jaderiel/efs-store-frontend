import React from 'react';
import { Navbar } from '../components';
import { Header, Popular, NewArrivals, Footer } from '../container';

const LandingPage = () => {
    return (
        <div className='bg-[#fcf8f1]'>
            <Navbar />
            <Header />
            <Popular />
            <NewArrivals />
            <Footer />
        </div>
    );
};

export default LandingPage;
