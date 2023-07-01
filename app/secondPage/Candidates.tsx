
import React from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';
import card1 from '../Resources/card1.png';
import card2 from '../Resources/card2.png';
import card3 from '../Resources/card3.png';

const Jobs = () => {
 
  return (
    <div className='relative bottom-50 container text-black  max-w-full '>
      <div className='flex flex-col w-5/6 gap-80 mb-40'>
        <div className='flex flex-col mb-40 gap-5'>
          <p className='text-orange-500 text-2xl font-bold'>Our Candidates</p>
          <div className='flex items-center justify-between'>
            <p className='text-rotate-360 align-text-center text-5xl font-semibold'>
              More than 400,000+  Verified candidates ready to hire
            </p>
            <button className='flex gap-8 h-112'>
              <BsArrowLeft size={50} />
              <BsArrowRight size={50} />
            </button>
          </div>
        </div>
        <div className='flex lg:flex-row flex-col gap-40 items-center'>
          <div className='relative mt-90 flex items-center'>
            <div className='flex flex-col p-5'>
              <p className='text-3xl text-white font-Inter'>Truck Drivers</p>
              <p className='text-lg text-zinc-400'>300K+ Job Openings</p>
            </div>
            <button className='text-black text-lg font-semibold flex items-center justify-center gap-4 mr-8 bg-white w-48 p-2 h-16 rounded-full'>
              Recruit Now <BsArrowRight size={30} />
            </button>
            <Image
                          className='absolute left-0 bottom-0 -z-10 max-w-full'
                          src={card1} alt={''}            />
          </div>
          <div className='relative mt-90 flex items-center'>
            <div className='flex flex-col p-5'>
              <p className='text-3xl text-white font-bold'>Truck Drivers</p>
              <p className='text-lg text-zinc-400'>800K+ Job Openings</p>
            </div>
            <button className='text-black text-lg font-semibold flex items-center justify-center gap-4 mr-4 bg-white w-48 p-2 h-16 rounded-full'>
              Apply Now <BsArrowRight size={30} />
            </button>
            <Image
                          className='absolute left-0 bottom-0 -z-10 max-w-full'
                          src={card2} alt={''}            />
          </div>
          <div className='relative mt-90 flex items-center'>
            <div className='flex flex-col p-5'>
              <p className='text-3xl text-white font-bold'>Truck Drivers</p>
              <p className='text-lg text-zinc-400'>100K+ Job Openings</p>
            </div>
            <button className='text-black text-lg font-semibold flex items-center justify-center gap-4 mr-4 bg-white w-48 p-2 h-16 rounded-full'>
              Apply Now <BsArrowRight size={30} />
            </button>
            <Image
                          className='absolute left-0 bottom-0 -z-10 max-w-full'
                          src={card3} alt={''}            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;