import React from 'react';
import Image from 'next/image';
import heroImage from '../Resources/wepik-export-202305311201196YQU 1.png';
import { BsArrowRight } from 'react-icons/bs';

const Home = () => {
  return (
    <div className='container relative max-w-full bg-zinc-950 border-cyan-400 h-90'>
      <div className='grid-cols-2 w-5/6 relative justify-between items-center border-orange-300 h-full'>
        <div className='flex flex-col gap-16 justify-between w-3/5 h-full border-red-700 my-10 mt-200'>
        {/* <p className='text-orange-500 text-2xl'>For Recruiters</p> */}
          <div className='flex gap-14 flex-col text-white'>
          <p className='text-orange-500 text-2xl mt-10'>For Recruiters</p>
            
            <p className='text-7xl font-semibold space-y-5  -mt-5 '> 
            <span className="block">We Have Best</span>
            <span className="block">Solution For You.</span></p>
            <p className='text-xl leading-8'>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae
              libero quaerat, pariatur eum doloribus sequi enim est sed, eveniet
              accusantium hic adipisci repellendus praesentium ipsa possimus
              veniam optio beatae laudantium.
            </p>
            <div className='flex relative '>
            <button className='flex items-center absolute mt-4 justify-center gap-3 text-xl w-55 h-25 rounded-full bg-orange-500 text-white p-2'>
                Post Your Job <BsArrowRight size={24} />
              </button></div>
          </div>
         </div>
      </div>
      <Image
        className='absolute w-2/5 right-0 top-12'
        src={heroImage}
        alt=''
      />
    </div>
  );
};

export default Home;

