import React from 'react';
import Image from 'next/image';
import EmployeePageImage from '../Resources/EmployeePageImage.png';
const Process = () => {
  return (
    <div className='relative max-w-full container text-black my-40'>
      <div className='relative w-5/6 flex flex-col'>
        <div className='flex flex-col items-center gap-8'>
          <p className='text-orange-500 text-3xl font-bold'>How it works</p>
          <p className='text-5xl text-max-width-500 font-poppins'>Get Hired in 3 simple steps</p>
        </div>
        <div className='grid grid-auto-flow:row grid-cols-2 items-center justify-between w-full mt-0.5 '>
          <div className='flex flex-col gap-30 my-40'>
            <div className=' rounded-xl flex gap-6 flex-col  w-full p-10 hover:scale-110 shadow-lg'>
              <p className='text-2xl font-semibold'>
                Step 1 : Create Your Profile
              </p>
              <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suscipit adipiscing bibendum est ultricies integer quis. A lacus
                vestibulum sed.
              </p>
            </div>
            <div className='flex gap-6 flex-col w-full p-10 rounded-xl hover:scale-110 shadow-lg'>
              <p className='text-2xl font-semibold'>
                Step 2 : Create Your Profile
              </p>
              <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suscipit adipiscing bibendum est ultricies integer quis. A lacus
                vestibulum sed.
              </p>
            </div>
            <div className='flex gap-6 flex-col w-full p-10 rounded-xl hover:scale-110 shadow-lg'>
              <p className='text-2xl font-semibold'>
                Step 3 : Create Your Profile
              </p>
              <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Suscipit adipiscing bibendum est ultricies integer quis. A lacus
                vestibulum sed.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Image className='absolute  bottom-40  right-0' src={EmployeePageImage} alt={''} style={{height: '60%'}} />
    </div>
  );
};

export default Process;