import React from 'react'
import Welcome from '../Resources/Welcome.png';
import Image from 'next/image';
import Marquee from './Marquee';
function WelcomePage() {
  return (
    
    <div className="relative mt-40">
    <div className="bg-black  h-[50%] absolute top-[65%] inset-0 z-0"></div>
    <div className='flex items-center w-4/5 text-black font-bold text-6xl text-center mt-20 ml-40 relative z-10'>
      <div className="w-full">
        Ignite Your Workforce with<br />Exceptional Staffing Solutions for Success
        <div className='text-2xl font-light mt-20'>Unleash talent potential with our strategic staffing solutions, ensuring access to the right candidates for optimal success.</div>
        <div className="relative">
          <Image className="mt-20" src={Welcome} alt={" "} />
          <Marquee />
        </div>
      </div>
    </div>
  </div>




  )
}

export default WelcomePage;
