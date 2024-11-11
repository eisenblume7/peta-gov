"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your search functionality here
    console.log("Searching for:", searchQuery);
  };

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-teal-700 py-4 px-8 shadow-lg">
      {/* Top Section: Logo, Full-Width Search Bar, and Login Button */}
      <div className="flex justify-evenly items-center space-x-4">
        <Link href={"/"} className="text-3xl font-semibold text-white mx-12">
          PetaGov
        </Link>

        {/* Full-Width Search Bar */}
        <form onSubmit={handleSearchSubmit} className="flex flex-grow mx-10">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Cari..."
            className="w-full px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-green-200"
          />
          <button
            type="submit"
            className="px-4 bg-green-600 text-white rounded-r-lg hover:bg-green-700 transition duration-300"
          >
            <FaSearch className="text-xl" />
          </button>
        </form>

        {/* Login Button */}
        <div>
          <a
            href="#"
            className="bg-white text-green-500 px-4 py-2 rounded-lg hover:bg-green-100 transition duration-300 ml-12 mr-4"
          >
            Login
          </a>
        </div>
      </div>

      {/* Bottom Section: Navigation Links */}
      <div className="mt-4 flex justify-center space-x-8">
        <a
          href="#"
          className="text-white hover:text-green-200 transition duration-300"
        >
          Tentang Kami
        </a>
        <Link
          className="text-white hover:text-green-200 transition duration-300"
          href="/project"
        >
          Proyek
        </Link>
        <a
          href="#"
          className="text-white hover:text-green-200 transition duration-300"
        >
          Informasi
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
