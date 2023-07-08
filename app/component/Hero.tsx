import React from 'react';
import Image from 'next/image';
import Ellipse from '../Resources/Ellipse.png';
import { BsArrowRight } from 'react-icons/bs';
import HeroSectionAnimation from './HeroSectionAnimation';
import 'animate.css';

const Home = () => {
  return (
    <div className="relative h-screen">
      <Image className="absolute h-full w-full" src={Ellipse} alt="" />
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-4xl mb-10 text-zinc-800 animate__animated animate__fadeInLeft">
          Labour Connect
        </div>
        <div className="text-8xl items-center text-zinc-800 justify-content animate__animated animate__fadeInRight animate__slower">
          We have the best solution for you.
        </div>
        <p className="text-xl text-zinc-800 mt-10 w-3/5 animate__animated animate__bounce">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Suscipit adipiscing bibendum est ultricies integer quis.
        </p>
        <button className="flex items-center justify-between bg-orange-500 hover:bg-orange-700 text-white font-semibold mt-10 text-2xl py-[1%] px-[6%] rounded-full animate__animated animate__fadeInUp">
          <span className="flex-grow text-zinc-800">Explore Jobs</span>
          <BsArrowRight className="text-zinc-800" />
        </button>
        <HeroSectionAnimation />
      </div>
    </div>
  );
};

export default Home;
