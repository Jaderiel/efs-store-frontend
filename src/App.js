import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components';
import { Header, Popular, NewArrivals } from './container';
import Profile from './pages/Profile'; //pakiayos to pag more than 1 na ang pages

const App = () => {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<><Header /><Popular /><NewArrivals /></>} />
                    <Route path="/profile" element={<Profile />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
