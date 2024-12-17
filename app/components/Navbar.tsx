"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Search, Menu, X, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const navLinks = [
    { title: "Tentang Kami", href: "/about-us" },
    { title: "Proyek", href: "/project" },
    { title: "Guide", href: "/guide" },
  ];

  return (
    <nav className="bg-gradient-to-r from-teal-600 to-teal-700 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-3xl font-bold text-white hover:text-green-200 transition-colors duration-300"
            >
              PetaGov
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <div key={link.title} className="relative group">
                <Link
                  href={link.href}
                  className="text-white hover:text-green-200 transition-colors duration-300 font-medium flex items-center"
                >
                  {link.title}
                </Link>
              </div>
            ))}
          </div>

          {/* Search and Login (Desktop) */}
          <div className="hidden lg:flex items-center space-x-4">
            <form onSubmit={handleSearchSubmit} className="flex">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="Cari..."
                  className="w-64 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300 transition-all duration-300"
                />
                <button
                  type="submit"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <Search className="h-5 w-5" />
                </button>
              </div>
            </form>
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link
                  href="/profile"
                  className="text-white hover:text-green-200 transition-colors duration-300"
                >
                  <User className="h-6 w-6" />
                </Link>
                <button
                  onClick={logout}
                  className="bg-white text-teal-600 px-6 py-2 rounded-full hover:bg-green-100 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link
                href="/login"
                className="bg-white text-teal-600 px-6 py-2 rounded-full hover:bg-green-100 transition-all duration-300 font-medium shadow-md hover:shadow-lg"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-green-200 transition-colors duration-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden py-4"
            >
              <form onSubmit={handleSearchSubmit} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Cari..."
                    className="w-full px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-300"
                  />
                  <button
                    type="submit"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    <Search className="h-5 w-5" />
                  </button>
                </div>
              </form>
              <div className="flex flex-col space-y-3">
                {navLinks.map((link) => (
                  <div key={link.title}>
                    <Link
                      href={link.href}
                      className="text-white hover:text-green-200 transition-colors duration-300 font-medium"
                    >
                      {link.title}
                    </Link>
                  </div>
                ))}
                {isAuthenticated ? (
                  <>
                    <Link
                      href="/profile"
                      className="text-white hover:text-green-200 transition-colors duration-300 font-medium"
                    >
                      Profile
                    </Link>
                    <button
                      onClick={logout}
                      className="bg-white text-teal-600 px-4 py-2 rounded-full hover:bg-green-100 transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <Link
                    href="/login"
                    className="bg-white text-teal-600 px-4 py-2 rounded-full hover:bg-green-100 transition-all duration-300 font-medium text-center shadow-md hover:shadow-lg"
                  >
                    Login
                  </Link>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
