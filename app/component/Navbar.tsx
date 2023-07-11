// import React from 'react';
// import Image from 'next/image';
// import navLogo from '../Resources/nav-logo.png'

// const Nav = () => {
//   return (
//     <div className='container max-w-full bg-white h-24'>
//       <div className='flex w-5/6 justify-between items-center mx-auto'>
//         <Image src={navLogo} alt='' />
//         <div className='flex'>
//           <div className='flex items-center justify-between w-64 md:w-96 text-black text-xl mx-4 md:mx-16'>
//             <a href='' className='mx-2 mr-5 hover:text-gray-900 '>About</a>
//             <a href='' className='mx-2 mr-5 hover:text-gray-900'>Features</a>
//             <a href='' className='mx-2 mr-5 hover:text-gray-900'>Pricing</a>
//           </div>
//           <div className='w-1/2 md:w-auto flex justify-between'>
//             <button className='h-14 w-32 md:w-40 rounded-full bg-black text-xl mx-3 text-white'>
//               Sign Up
//             </button>
//             <button className='w-32 md:w-40 rounded-full bg-white text-black border-2 border-black text-xl mx-3'>
//               Log In
//             </button>
//           </div>
//         </div>
//       </div>
//    </div>
//   );
// };

// export default Nav;
"use client"
// import React, { useState } from 'react';
// import Image from 'next/image';
// import navLogo from '../Resources/nav-logo.png';

// const Navbar = () => {
//   const [isMenuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white border-gray-200 dark:bg-gray-900">
//       <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//         <a href="https://fms.loadlc.com/login" className="flex items-center">
//           <Image src={navLogo} className="h-14 w-60 mr-3" alt="labour connect" />
//         </a>
//         <button
//           type="button"
//           className={`inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-orange-700 dark:focus:ring-orange-600 ${
//             isMenuOpen ? 'open' : ''
//           }`}
//           aria-controls="navbar-default"
//           aria-expanded={isMenuOpen}
//           onClick={toggleMenu}
//         >
//           <span className="sr-only">Open main menu</span>
//           <svg
//             className="w-6 h-6"
//             aria-hidden="true"
//             fill="currentColor"
//             viewBox="0 0 20 20"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
//               clipRule="evenodd"
//             ></path>
//           </svg>
//         </button>
//         <div
//           className={`${
//             isMenuOpen ? 'block' : 'hidden'
//           } w-full md:block md:w-auto`}
//           id="navbar-default"
//         >
//           <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//           <li>
//               <a
//                 href="#"
//                 className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 About
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Services
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Sign up
//               </a>
//             </li>
//             <li>
//               <a
//                 href="#"
//                 className="text-2xl block py-2 pl-3 pr-4 text-gray-900 rounded-full hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-orange-500 dark:hover:bg-orange-700 dark:hover:text-white md:dark:hover:bg-transparent"
//               >
//                 Log In
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// };

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
      className={`fixed top-0 left-0 w-full z-50 h-30 transition-colors duration-300 ${
        isScrolled ? 'bg-white w-45 rounded-lg mt-4 h-scrren'  : 'bg-black'
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="https://fms.loadlc.com/login" className={`flex-shrink-0 ${
               isScrolled ? 'text-black ' : 'text-white'
            }
            `}>
            <Image
                  src={isScrolled ? navLogo1 : navLogo}
                  className="h-12 w-auto"
                  alt="labour connect"
            />
            </a>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a
              href="#about"
              className= {`hover:text-blue-700 px-3 py-2 rounded-md ${
                 isScrolled ? 'text-black ' : 'text-white'
              }
              `}
            >
              About
            </a>
            <a
              href="#features"
              className={` hover:text-blue-700 px-3 py-2 rounded-md" ${
                isScrolled ? 'text-black' : 'text-white'
              }
              `}
            >
              Features
            </a>
            <a
              href="#pricing"
              className={` hover:text-blue-700 px-3 py-2 rounded-md" ${
                isScrolled ? 'text-black' : 'text-white'
              }
              `}
            >
              Pricing
            </a>
          </div>
          <div className="flex items-center">
          <button
              className={`hover:text-blue-700 px-3 py-2 bg-stone-800 rounded-full hidden md:block ${
                isScrolled ? 'text-white' : 'text-white'
              }`}
            >
              Sign Up
            </button>
           <button
              className={`hover:text-blue-700 px-5 py-2 mx-5 bg-stone-800 border-rose-800 rounded-full hidden md:block ${
                isScrolled ? 'text-white' : 'text-white'
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
                className="h-6 w-6"
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
        <div className={`md:hidden  px-2 pt-2 pb-4  
        ${
          isScrolled ? '' : 'h-screen ' 
        }`}>
          <a
            href="#about"
            className={`block text-black hover:text-blue-700 py-2 mx-80 hover:textShadow duration-500 hover:translate-y-[-5px] text-xl ${
              isScrolled ? 'text-black' : 'text-white'
            }

            `}
          >
            About
          </a>
          <a
            href="#features"
            className={`block text-black hover:text-blue-700 py-2 mx-80 hover:textShadow duration-500 hover:translate-y-[-5px] text-xl ${
              isScrolled ? 'text-black' : 'text-white'
            }
            `}
          >
            Features
          </a>
          <a
            href="#pricing"
            className={`block text-black hover:text-blue-700 py-2 mx-80 hover:textShadow duration-500 hover:translate-y-[-5px] text-xl ${
              isScrolled ? 'text-black' : 'text-white'
            }
            `}
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
