import React from 'react';
import Image from 'next/image';
import navLogo from '../Resources/nav-logo.png';

const Navbar = () => {
  return (
    <div className='container max-w-full bg-orange-200 h-24'>
      <div className='flex w-5/6 justify-between items-center mx-auto px-4 lg:px-0'>
        <Image src={navLogo} alt='' />
        <div className='flex'>
          <div className='flex items-center justify-between w-64 text-black text-xl mx-4 lg:mx-16'>
            <a href=''>About</a>
            <a href=''>Process</a>
            <a href=''>Jobs</a>
          </div>
          <div className='hidden lg:flex justify-between'>
            <button className='h-14 w-40 rounded-full bg-black text-xl'>
              Sign Up
            </button>
            <button className='w-40 rounded-full bg-white text-black border-2 border-black text-xl'>
              Log In
            </button>
          </div>
          <div className='lg:hidden'>
            <button className='h-10 w-10 p-2 bg-black rounded-full'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <line x1='3' y1='12' x2='21' y2='12' />
                <line x1='3' y1='6' x2='21' y2='6' />
                <line x1='3' y1='18' x2='21' y2='18' />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
