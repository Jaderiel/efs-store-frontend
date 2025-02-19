import React, { useState } from 'react';
import { Navbar } from '../components';
import { Link } from 'react-router-dom';

const SignupPage = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100">
            <Navbar />
            <div className="mt-24 w-full max-w-sm bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-2xl font-semibold text-center mb-4">Sign Up</h3>
                <div className="space-y-4">
                    <div>
                        <label className="block text-gray-600">Full Name</label>
                        <input type="text" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-gray-300" />
                    </div>
                    <div>
                        <label className="block text-gray-600">Email</label>
                        <input type="email" className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-gray-300" />
                    </div>
                    <div>
                        <label className="block text-gray-600">Password</label>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-gray-300"
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <input 
                            type="checkbox" 
                            id="showPassword" 
                            className="accent-gray-700"
                            onChange={() => setShowPassword(!showPassword)}
                        />
                        <label htmlFor="showPassword" className="text-gray-600">Show Password</label>
                    </div>
                    <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
                        Sign Up
                    </button>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">
                    Already have an account? <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default SignupPage;