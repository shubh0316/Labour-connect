import React from 'react';
import Image from 'next/image';
import { BsFill1CircleFill } from 'react-icons/bs';
import image from '../Resources/Frame 1410086302.png';

const ScrollSection = () => {
  return (
    <div className='max-w-full container text-black my-40 overflow-y-scroll'>
      <div className='container gap-10 flex-col w-2/3'>
        <p className='text-orange-500 text-2xl font-bold'>How it Works</p>
        <p className='text-6xl font-semibold'>Get Hired In 3 Simple Steps</p>

        <div className='container mx-auto px-4 py-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-start mr-10 mt-20 align-items-start'> {/* Use 'items-start' to align items from the top */}
              <div className='mr-4'> {/* Add margin-right to the icon container */}
                <BsFill1CircleFill className='text-orange-500 text-4xl p-1' />
              </div>
              <div>
                <h1 className='text-3xl font-bold mb-2 text-orange-500'> {/* Remove inline and apply margin-bottom */}
                  Create your profile
                </h1>
                <p className='text-gray-700 '>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum
                  lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat
                  placerat libero.
                </p>
              </div>
            </div>
            <div className='flex items-center'>
              <Image className='h-8 md:h-full max-w-lg ml-auto' src={image} alt=' ' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScrollSection;
