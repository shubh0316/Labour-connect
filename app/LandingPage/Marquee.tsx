import React from 'react';
import Marquee from 'react-fast-marquee';

function Marqueecomponent() {
  return (
    <div>
      <Marquee direction="left" speed={80}>
        <span className="mx-2 text-black font-serif text-sm sm:text-base lg:text-lg xl:text-xl">
          Labour Connect
        </span>
        <span className="mx-2 text-black font-serif text-sm sm:text-base lg:text-lg xl:text-xl">
          Labour Connect
        </span>
        <span className="mx-2 text-black font-serif text-sm sm:text-base lg:text-lg xl:text-xl">
          Labour Connect
        </span>
        <span className="mx-2 text-black font-serif text-sm sm:text-base lg:text-lg xl:text-xl">
          Labour Connect
        </span>
        <span className="mx-2 text-black font-serif text-sm sm:text-base lg:text-lg xl:text-xl">
          Labour Connect
        </span>
      </Marquee>
    </div>
  );
}

export default Marqueecomponent;
