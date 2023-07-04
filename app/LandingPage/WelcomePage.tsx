import React from 'react';
import Welcome from '../Resources/Welcome.png';
import Image from 'next/image';
import Marquee from './Marquee';

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
        <div className="relative mt-12 sm:mt-20">
          <Image src={Welcome} alt="" />
          <Marquee />
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
