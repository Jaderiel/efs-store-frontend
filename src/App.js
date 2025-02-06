import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import { Profile, Wishlist } from './pages';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/wishlist" element={<Wishlist />} />
            </Routes>
        </Router>
    );
};

export default App;
