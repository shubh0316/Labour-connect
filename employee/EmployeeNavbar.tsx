"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import navLogo from '../Resources/Group 1000002110.png';
import navLogo1 from "../Resources/LOBOUR CONNECT-01 (1) 1.png";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isTop = window.scrollY < 100;
      setScrolled(!isTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 h-20 transition-colors duration-300  ${
        isScrolled ? 'bg-white w-45 rounded-3xl mt-4 h-scrren shadow-2xl' : ''
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="https://fms.loadlc.com/login"
              className={`flex-shrink-0 ${
                isScrolled ? 'text-black ' : 'text-white'
              }`}
            >
              <Image
                src={ navLogo1}
                className={`h-12 w-auto ${
                  isScrolled ? 'mt-4' : ''
                }`}
                alt="labour connect"
              />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4 ">
            <a
              href="#about"
              className={`transform hover:scale-125 px-3 py-2 rounded-md ${
                isScrolled ? 'text-black mt-4 text-xl' : 'text-black text-lg'
              }`}
            >
              About
            </a>
            <a
              href="#features"
              className={`transform hover:scale-125 px-3 py-2 rounded-md ${
                isScrolled ? 'text-black mt-4 text-xl' : 'text-black  text-lg'
              }`}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={`transform hover:scale-125 px-3 py-2 rounded-md ${
                isScrolled ? 'text-black mt-4 text-xl' : 'text-black  text-lg'
              }`}
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center">
            <button
              className={`h-14 w-32 md:w-40 rounded-full bg-orange-600 text-xl mx-3 text-white hover:scale-110 hidden md:block ${
                isScrolled ? 'text-white mt-4' : 'text-white '
              }`}
            >
              Sign Up
            </button>
            <button
              className={`w-32  h-14 md:w-40 rounded-full bg-white text-black border-2 border-black text-xl mx-3 hover:scale-110 hidden md:block ${
                isScrolled ? 'text-black mt-4' : 'text-black'
              }`}
            >
              Log In
            </button>
          </div>
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 text-gray-800 hover:text-blue-700 focus:outline-none focus:text-blue-700"
              onClick={toggleMenu}
            >
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'hidden' : 'block'}`}
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
              <svg
                className={`h-6 w-6 ${isMenuOpen ? 'block' : 'hidden'}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div
          className={`md:hidden px-2 pt-2 pb-4 ${
            isScrolled ? '' : 'h-screen bg-slate-200'
          }`}
        >
          <a
            href="#about"
            className={`block text-black hover:text-blue-700 py-2 mx-80 hover:textShadow duration-500 hover:translate-y-[-5px] text-xl ${
              isScrolled ? 'text-black' : 'text-white flex-row'
            }`}
          >
            About
          </a>
          <a
            href="#features"
            className={`block text-black hover:text-blue-700 py-2 mx-80 hover:textShadow duration-500 hover:translate-y-[-5px] text-xl ${
              isScrolled ? 'text-black' : 'text-white flex-row'
            }`}
          >
            Features
          </a>
          <a
            href="#pricing"
            className={`block text-black hover:text-blue-700 py-2 mx-80 hover:textShadow duration-500 hover:translate-y-[-5px] text-xl ${
              isScrolled ? 'text-black' : 'text-white flex-row'
            }`}
          >
            Pricing
          </a>
          <a
            href="#signup"
            className="text-gray-800 hover:text-blue-700 px-3 py-2 rounded-full hidden md:block"
          >
            Sign Up
          </a>
          <a
            href="#login"
            className="text-gray-800 hover:text-blue-700 px-3 py-2 rounded-full hidden md:block"
          >
            Log In
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
