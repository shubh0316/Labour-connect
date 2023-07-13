import React from 'react';
import Image from 'next/image';
import Macbook from '../Resources/Macbook.png';
import { BsArrowRight } from 'react-icons/bs';

const Application = () => {
  return (
    <div className="relative bg-zinc-950 border-cyan-400 mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-screen-lg mx-auto px-2">
        <div className="lg:w-2/3 text-left mr-[4%]">
          <div className="text-orange-500 mt-10 mb-6  text-2xl sm:text-3xl ml-6 sm:ml-0">
            Our Staffing Services Process
          </div>
          <div className="text-white text-6xl font-bold ml-4 sm:ml-0">
            Unlock Your Staffing Success With Us
          </div>
          <div className="text-white mt-6 text-xl sm:text-2xl font-sans ml-4 sm:ml-0">
            Careful planning makes us confident, developed with best practices so that the project can be maintained. We always test projects before they are shipped.
          </div>
          <button className="flex items-center justify-center gap-4 text-xl sm:text-2xl w-56 h-12 mt-8 ml-4 sm:ml-0 rounded-full bg-orange-500 text-white hover:bg-orange-600 transform hover:scale-105">
            Explore Jobs <BsArrowRight size={32} />
          </button>
        </div>
        <div className="lg:w-1/2 flex flex-end">
          <div className="hidden lg:block">
            <Image
              className="mt-40 ml-80 w-auto h-auto"
              src={Macbook}
              alt=""
              width={900}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Application;
