import React from 'react';
import Welcome from '../Resources/Welcome.png';
import Image from 'next/image';
import Marquee from './Marquee';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';

function WelcomePage() {
  return (
    <div className="relative mt-20">
      <div className="bg-black h-1/2 absolute top-1/2 inset-0 z-0"></div>
      <div className="w-4/5 mx-auto text-black font-bold text-4xl sm:text-6xl text-center mt-10 sm:mt-20 relative z-10">
        <div>
          Ignite Your Workforce with<br />
          Exceptional Staffing Solutions for Success
        </div>
        <div className="text-lg sm:text-2xl font-light mt-6 sm:mt-12">
          Unleash talent potential with our strategic staffing solutions, ensuring access to the right candidates for optimal success.
        </div>
        <div className="flex flex-row">
            <Link href="/component">
                
        <button className="flex items-center justify-between ml-96  bg-white-500  border-2 border-black hover:bg-orange-600 text-white font-semibold mt-8 sm:mt-10 text-lg sm:text-2xl py-2 sm:py-3 px-4 sm:px-8 rounded-full animate__animated animate__fadeInUp">
          <span className="flex  text-zinc-800">For Recruiters</span>
          <BsArrowRight className="w-10 text-zinc-800 " />
        </button>       
        </Link>
        
        <Link href="/employee">
        <button className="flex items-center justify-between ml-10  bg-white-500  border-2 border-black hover:bg-orange-600 text-white font-semibold mt-8 sm:mt-10 text-lg sm:text-2xl py-2 sm:py-3 px-4 sm:px-8 rounded-full animate__animated animate__fadeInUp">
          <span className="flex  text-zinc-800">For Job Seeker</span>
          <BsArrowRight className="w-10 text-zinc-800 " />
        </button>
        </Link>
        </div>
        <div className="relative mt-12 sm:mt-20">
          <Image src={Welcome} alt="" />
          <Marquee />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
