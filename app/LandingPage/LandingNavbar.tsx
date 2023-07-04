"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import navLogo from '../Resources/nav-logo.png';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-orange-100 h-24 fixed top-0 w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-full">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image src={navLogo} alt="Logo" width={180} height={60} />
            </div>
          </div>
          <div className="flex items-center">
            <div className="hidden md:flex space-x-20">
              <a href="#" className="text-zinc-500 hover:text-orange-500 text-2xl font-bold">
                About
              </a>
              <a href="#" className="text-zinc-500 hover:text-orange-500 text-2xl font-bold">
                Feature
              </a>
              <a href="#" className="text-zinc-500 hover:text-orange-500 text-2xl font-bold">
                Pricing
              </a>
              <button className="px-10 py-2 text-lg font-bold text-black bg-gray-200 rounded-2xl hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Sign Up
              </button>
              <button className=" px-10 py-2  text-lg font-bold text-gray-700 bg-white border rounded-2xl hover:bg-orange-500 border-gray-300 ">
                Log In
              </button>
            </div>
            <div className="md:hidden ml-4">
              <button
                onClick={toggleMenu}
                className="flex items-center justify-center h-10 w-10 text-gray-500 hover:text-gray-900 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden bg-white absolute top-0 left-0 right-0 mt-24">
            <div className="flex flex-col items-center">
              <a
                href="#"
                className="block px-4 py-2 text-zinc-500 hover:bg-orange-100 font-medium text-lg"
              >
                About
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-zinc-500 hover:bg-orange-100 font-medium text-lg"
              >
                Feature
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-zinc-500 hover:bg-orange-100 font-medium text-lg"
              >
                Pricing
              </a>
              <button className="px-8 py-3 mt-4 text-lg font-medium text-white bg-gray-900 rounded-2xl hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                Sign Up
              </button>
              <button className="mt-2 px-6 py-3 text-lg font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
                Log In
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
