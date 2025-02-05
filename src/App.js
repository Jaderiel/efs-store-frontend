import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Header, Popular, NewArrivals } from './container';
import { Profile, Wishlist } from './pages';

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<><Header /><Popular /><NewArrivals /></>} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/wishlist" element={<Wishlist />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
