import React from 'react';
import Image from 'next/image';
import navLogo from '../Resources/nav-logo.png';

const Fotter = () => {
  return (
    <div className='max-w-full bg-zinc-100 p-20'>
       
        <Image 
         src={navLogo} alt={" "} />
          <div className='flex flex-col w-3/5 text-black text-6xl font-sans mt-15'>Ignite Your Workforce with Exceptional Staffing Solutions for Success.</div>
          <div className='flex flex-col  w-5/6 mt-5 text-black items-right'>
          <div className='flex flex-col gap-4'>
          <p className='text-2xl font-bold  '>Contact Us</p>
          <p className='text-xl font-normal '>(888) 123 1234</p>
          <p className='text-xl font-normal '>info@loadlc.com</p>
          <p className='flex flex-col w-1/2  text-xl font-normal my-2'>dfdsfsd sdsafasf asdfsafs asdsf asd</p>
          <p className='text-xl font-normal '>Canada</p>
        </div>        
      </div>
    </div>
  );
};

export default Fotter;