import React from 'react';
import Image from 'next/image';
import About from '../Resources/About.png';

const AboutUs = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="flex items-center justify-center w-full sm:w-1/2">
        <div className="w-96 h-96 mb-10  transform hover:scale-125 sm:mb-20 sm:py-20 sm:ml-40 sm:mr-4 ">
          <Image src={About} alt=""  width={400} height={400} />
        </div>
      </div>
      <div className="w-full sm:w-1/2 text-black text-left text-lg sm:text-2xl font-sans">
        <div className="text-orange-500 text-4xl font-bold px-10 mt-10">About us</div>
        <div className="text-black-500 font-semibold text-3xl mt-2 sm:text-5xl px-10 mb-6 sm:mb-10">
          We’re Helping Companies & Job Seekers in a Better Way
        </div>
        <p className="px-10 mb-4">
          Unlock extraordinary professional achievement through our personalized strategy that 
          fosters employer-employee cooperation. With dedicated support and tailored solutions,
          we redefine the employement market for long-term relationships and enhanced results.
        </p>
        <p className="px-10 mb-4">
          Join us today. Our goal is to ensure you reach your highest potential, enabling you to
          maximize your success and optimize your career
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
