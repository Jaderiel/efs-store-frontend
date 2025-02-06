import React from 'react';
import { Navbar } from '../components';
import { Header, Popular, NewArrivals } from '../container';

const LandingPage = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Popular />
            <NewArrivals />
        </div>
    );
};

export default LandingPage;
