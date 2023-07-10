import React from 'react';
import Image from 'next/image';
import LeftImage from '../Resources/LeftImage.png';
import Right from '../Resources/Right.png';
import Top from '../Resources/Top.png';
import MacbookCenter from '../Resources/MacbookCenter.png';
// import 'animate.css';

function HeroSectionAnimation() {
  return (
    <div className="relative flex flex-row">
      <div className="relative z-10 flex flex-col">
        <Image
          className="absolute top-0 left-0 z-10 animate__animated animate__fadeInRight"
          src={Top}
          alt=""
        />
        <Image
          className="absolute top-40 right-80 z-10 animate__animated animate__fadeInRight"
          src={Right}
          alt=""
        />
        <Image
          className="relative w-[40rem] h-80 mt-20 animate__animated animate__slideInDown animate__slower"
          src={MacbookCenter}
          alt=""
        />
      </div>
      <Image
        className="absolute top-0 right-0 w-[10rem] h-[20rem] mb-20 z-10 animate__animated animate__fadeInLeft"
        src={LeftImage}
        alt=""
      />
    </div>
  );
}

export default HeroSectionAnimation;
