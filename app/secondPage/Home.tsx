import React from 'react';
import Image from 'next/image';
import heroImage from '../Resources/hero-picc.png';
import { BsArrowRight } from 'react-icons/bs';

const Hero = () => {
  return (
    <div className='container relative max-w-full bg-zinc-950 border-cyan-400 h-auto'>
      <div className='grid-cols-1 md:grid-cols-2 w-5/6 relative justify-between items-center border-orange-300 mx-auto'>
        <div className='flex flex-col gap-8 md:gap-16 justify-between md:w-3/5 h-auto border-red-700 my-10 md:my-40'>
          <p className='text-orange-500 text-2xl'>For Recuriter</p>
          <div className='flex flex-col text-white'>
            <p className='text-4xl md:text-7xl font-semibold'>
              We have the best solutions for you
            </p>
            <p className='text-base md:text-xl leading-7 md:leading-10'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              libero quaerat, pariatur eum doloribus sequi enim est sed, eveniet
              accusantium hic adipisci repellendus praesentium ipsa possimus
              veniam optio beatae laudantium.
            </p>
            <button className='flex items-center justify-center gap-2 md:gap-6 text-base md:text-xl left-0 w-48 md:w-64 h-12 md:h-14 rounded-full bg-orange-500 text-white'>
              Explore Jobs <BsArrowRight size={24} />
            </button>
          </div>
        </div>
        <div className='aboslute right-0 bottom-0 w-full  md:w-30'>
          <Image className='w-full' src={heroImage} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Hero;
