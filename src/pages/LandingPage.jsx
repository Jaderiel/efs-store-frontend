import React from 'react';
import { Navbar } from '../components';
import { Header, Popular, NewArrivals, Footer } from '../container';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Popular />
            <NewArrivals />
            <Footer />
        </div>
    );
};

export default LandingPage;
