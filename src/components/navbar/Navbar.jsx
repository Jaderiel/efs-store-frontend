import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';
import logo from '../../assets/EFS Apparel.png';
import { Sidebar } from 'primereact/sidebar';
import 'primeicons/primeicons.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [visible, setVisible] = useState(false);

    const showSidebar = () => {
        setVisible(true);
    };

    const hideSidebar = () => {
        setVisible(false);
    };

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
                            <span className="text-xs">WOMEN</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link to="#men" className="group relative">
                            <span className="text-xs" >MEN</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link to="#accessories" className="group relative">
                            <span className="text-xs" >ACCESSORIES</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                        <Link to="#more" className="group relative">
                            <span className="text-xs" >MORE</span>
                            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                        </Link>
                    </div>

                    {/* Icons Placeholder */}
                    <div className="flex items-center hidden md:block">
                        <div className="flex space-x-4 items-center cursor-pointer">
                            <div className={`relative w-64 flex items-center border rounded-md transition-all duration-300 ${isFocused ? "border-blue-500 shadow-md" : "border-gray-300"}`}>
                                {/* Search Icon */}
                                <i className="pi pi-search absolute left-3 text-gray-500 transition-transform duration-300 cursor-pointer hover:scale-110"></i>
                                {/* Search Input */}
                                <input
                                    type="text"
                                    placeholder="Search..."
                                    className="w-full h-7 pl-10 pr-3 text-sm text-gray-700 outline-none bg-white rounded-md focus:ring-0"
                                    onFocus={() => setIsFocused(true)}
                                    onBlur={() => setIsFocused(false)}
                                />
                            </div>
                            <div className="flex items-center">
                                <div onClick={showSidebar}>
                                    <i className="pi pi-shopping-cart hover:text-gray-500" style={{ fontSize: '22px' }}></i>
                                    {/* <img src={cart} alt="cart" /> */}
                                </div>
                                <Sidebar visible={visible} onHide={hideSidebar} position="right" transition="500ms" className="p-sidebar-right">
                                    <h2>Cart</h2>
                                    <p>Here is your cart content...</p>
                                </Sidebar>
                            </div>
                            <Link to="/wishlist">
                                <i className="pi pi-heart hover:text-gray-500" style={{ fontSize: '22px' }}></i>
                            </Link>
                            <Link to="/profile">
                                <i className="pi pi-user hover:text-gray-500" style={{ fontSize: '22px' }}></i>
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
