import React from 'react';
import Image from 'next/image';
import navLogo from '../Resources/nav-logo.png'

const Nav = () => {
  return (
    <div className='container max-w-full bg-white h-24'>
      <div className='flex w-5/6 justify-between items-center mx-auto'>
        <Image src={navLogo} alt='' />
        <div className='flex'>
          <div className='flex items-center justify-between w-64 md:w-96 text-black text-xl mx-4 md:mx-16'>
            <a href='' className='mx-2 mr-5 hover:text-gray-900 '>About</a>
            <a href='' className='mx-2 mr-5 hover:text-gray-900'>Features</a>
            <a href='' className='mx-2 mr-5 hover:text-gray-900'>Pricing</a>
          </div>
          <div className='w-1/2 md:w-auto flex justify-between'>
            <button className='h-14 w-32 md:w-40 rounded-full bg-black text-xl mx-3 text-white'>
              Sign Up
            </button>
            <button className='w-32 md:w-40 rounded-full bg-white text-black border-2 border-black text-xl mx-3'>
              Log In
            </button>
          </div>
        </div>
      </div>
   </div>
  );
};

export default Nav;