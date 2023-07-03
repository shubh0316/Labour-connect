import React from 'react'
import Welcome from '../Resources/Welcome.png';
import Image from 'next/image';
function WelcomePage() {
  return (
    
<div className='flex items-center w-4/5 text-black font-bold text-6xl text-center mt-20 ml-40'>
  <div className="w-full relative">
    Ignite Your Workforce with<br />Exceptional Staffing Solutions for Success
    <div className='text-2xl font-light mt-20'>Unleash talent potential with our strategic staffing solutions, ensuring access to the right candidates for optimal success.</div>
    <div className="relative">
      <Image className="mt-20" src={Welcome} alt={" "} />
    </div>
  </div>
</div>


  )
}

export default WelcomePage;
