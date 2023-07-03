import React from 'react';
import Image from 'next/image';
import About from '../Resources/About.png';
function AboutUs() {
  return (
    <div >
      <Image className="w-100 h-100 mt-[20px]" src={About} alt={" "} />
    </div>
  )
}

export default AboutUs;           

//shadow and z-index scaling 