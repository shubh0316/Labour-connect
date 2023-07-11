import React from 'react';
import Image from 'next/image';
import Ellipse from '../Resources/Ellipse.png';
import { BsArrowRight } from 'react-icons/bs';
import HeroSectionAnimation from './HeroSectionAnimation';
// import 'animate.css';

const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Image className="absolute inset-0 w-full h-full object-cover" src={Ellipse} alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-10">
        <div className="text-3xl sm:text-4xl mb-6 sm:mb-10 text-zinc-800 animate__animated animate__fadeInLeft">
          Labour Connect
        </div>
        <div className="text-5xl sm:text-8xl text-center text-zinc-800 animate__animated animate__fadeInRight animate__slower">
          We have the best solution for you.
        </div>
        <p className="text-base sm:text-xl text-center text-zinc-800 mt-6 sm:mt-10 w-full sm:w-3/5 animate__animated animate__bounce">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies integer quis.
        </p>
        <button className="flex items-center justify-between bg-orange-500 hover:bg-orange-700 text-white font-semibold mt-8 sm:mt-10 text-lg sm:text-2xl py-2 sm:py-3 px-4 sm:px-8 rounded-full animate__animated animate__fadeInUp">
          <span className="flex-grow text-zinc-800">Explore Jobs</span>
          <BsArrowRight className="text-zinc-800" />
        </button>
        <HeroSectionAnimation />
      </div>
    </div>
  );
};

export default Home;
