import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from '../../assets/EFS Apparel.png';
import { user, cart, heart, search } from './import';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-transparent fixed top-0 left-0 w-full z-10 p-4">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
            <div className="container mx-auto flex justify-between items-center relative z-10">
                {/* Logo with Link to home */}
                <Link to="/" className="flex items-center">
                    <img src={logo} alt="EFS Apparel Logo" />
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6">
                    <Link to="#women" className="group relative">
                        <span>WOMEN</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                    <Link to="#men" className="group relative">
                        <span>MEN</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                    <Link to="#accessories" className="group relative">
                        <span>ACCESSORIES</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                    <Link to="#more" className="group relative">
                        <span>MORE</span>
                        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                    </Link>
                </div>

                {/* Icons Placeholder */}
                <div className="hidden md:block">
                    <div className="flex space-x-4 cursor-pointer">
                        <img src={search} alt="search" />
                        <img src={cart} alt="cart" />
                        <Link to="/wishlist">
                            <img src={heart} alt="wishlist" />
                        </Link>
                        {/* Make the user icon a link to the profile page */}
                        <Link to="/profile">
                            <img src={user} alt="user" />
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="flex flex-col p-4 space-y-4 relative z-10">
                        <Link to="#women" className="group relative">
                            <span>WOMEN</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link to="#men" className="group relative">
                            <span>MEN</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link to="#accessories" className="group relative">
                            <span>ACCESSORIES</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link to="#more" className="group relative">
                            <span>MORE</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                    </div>
                    <div className="border-l-2 border-gray-500 h-full mx-4"></div>
                    <div className="flex flex-col p-4 space-y-4 relative z-10">
                        <a href="#profile" className="hover:underline">Profile</a>
                        <a href="#wishlist" className="hover:underline">Wishlist</a>
                        <a href="#cart" className="hover:underline">Cart</a>
                        <a href="#search" className="hover:underline">Search</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
