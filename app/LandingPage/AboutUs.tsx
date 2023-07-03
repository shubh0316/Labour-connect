import React from 'react';
import Image from 'next/image';
import About from '../Resources/About.png';
function AboutUs() {
  return (
    <>
<div className="flex items-center">
  <Image className="w-90 h-90 mb-40 ml-60 transform hover:scale-110" src={About} alt="" />
  <div className="text-black text-left text-2xl font-sans mb-80 ml-20 ">
    <div className='text-orange-500 text-4xl font-bold mt-20'>About us</div> 
    <div className='flex flex-col w-4/5 text-black-500 font-semibold text-5xl mb-10'>We’re Helping Companies & Job Seekers in a Better Way</div>
    Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
    quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
    nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
    officia assumenda sed magnam illo. Qui rerum nisi et pariatur
    omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
    et dolores suscipit et nulla veritatis. Id saepe pariaturs.
    Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
    quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
    nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
    officia assumenda sed magnam illo. Qui rerum nisi et pariatur
    omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
    et dolores suscipit et nulla veritatis. Id saepe pariaturs.
  </div>
</div>



  </>
  )
}

export default AboutUs;           

//shadow and z-index scaling 
// logo slider in marquee 