"use client"
import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-green-100 py-4 px-8 flex justify-between items-center">
            <div className="text-2xl font-bold text-green-800">PetaGov</div>
            <div className="flex space-x-40">
                <a href="#" className="text-gray-700 hover:text-gray-900">Tentang Kami</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Produk</a>
                <a href="#" className="text-gray-700 hover:text-gray-900">Informasi</a>
            </div>
            <FaUserCircle className="text-green-800 text-3xl" />
        </nav>
    );
};

export default Navbar;
