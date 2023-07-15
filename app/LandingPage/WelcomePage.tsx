"use client"
import React from 'react';
import Welcome from '../Resources/Welcome.png';
import Image from 'next/image';
import {motion} from 'framer-motion';
import Marquee from './Marquee';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

const WelcomePage = () => {
  return (
    <div className="relative mt-20">
      <div className="bg-black h-1/2 absolute top-1/2 inset-0 z-0 "></div>
      <div className="w-4/5 mx-auto text-black font-bold text-4xl sm:text-6xl text-center mt-10 sm:mt-20">
        <div>
          Ignite Your Workforce with<br />
          Exceptional Staffing Solutions for Success
        </div>
        <div className="text-lg sm:text-2xl font-light mt-6 sm:mt-12">
          Unleash talent potential with our strategic staffing solutions, ensuring access to the right candidates for optimal success.
        </div>
        <div className="flex flex-wrap justify-center mt-8 sm:mt-10">
          <div className="flex-shrink-0">
            <Link href="/component">
                <motion.div
                animate={{x:[450,0]}}
             
                >
              <button

                className="flex items-center justify-between bg-white-500 border-2 border-black hover:bg-orange-600 text-white font-semibold text-lg sm:text-xl py-2  sm:py-3 px-4 sm:px-8 rounded-full max-w-lg"
              >
                <span className="flex text-zinc-800">For Recruiters</span>
                <BsArrowRight className="w-10 text-zinc-800" />
              </button>
              </motion.div>
            </Link>
          </div>
          <div className="flex-shrink-0 ml-4">
            <Link href="/employee">
            <motion.div
                animate={{x:[450,0]}}
                transition={{ 
                   
                }}
                >
              <button
                className="flex items-center justify-between bg-white-500 border-2 border-black hover:bg-orange-600 text-white font-semibold text-lg sm:text-xl mt-5 py-2 sm:py-3 px-3 sm:px-8 rounded-full max-w-lg"
              >
                <span className="flex text-zinc-800">For Job Seeker</span>
                <BsArrowRight className="w-10 text-zinc-800" />
              </button>
             </motion.div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between z-10 py-20">
        <motion.div
          
          animate={{ x:-100, scale: 1 }}        
>
  <Image
    src={Welcome}
    alt=""
    className=" ml-[8rem] w-[80%] h-[20rem] z-10 rounded-lg shadow-2xl overflow-hidden md:w-[90rem] md:h-[40rem] lg:w-[90rem] lg:h-[40rem]"
  />
</motion.div>
          <Marquee />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
