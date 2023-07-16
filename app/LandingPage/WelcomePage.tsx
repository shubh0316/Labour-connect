"use client"
import React, { useEffect, useState } from 'react';
import Welcome from '../Resources/Welcome.png';
import Ellipse from '../Resources/Ellipse.png';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Marquee from './Marquee';
import Container from './Container';
import { BsArrowRight } from 'react-icons/bs';
import Link from 'next/link';
import 'animate.css';

const getWindowSize = () => {
  if (typeof window !== 'undefined') {
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }
  return {
    width: 0,
    height: 0,
  };
};

const WelcomePage = () => {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleResize = () => {
      setWindowSize(getWindowSize());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isLargeScreen = windowSize.width > 768;

  return (
    <div className="relative mt-20 w-full min-h-screen">
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0"
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          width: '100%',
          height: '100%',
        }}
      ></div>
      <div className="w-4/5 mx-auto text-black font-semibold text-3xl sm:text-5xl sm:leading-loose text-center mt-10 sm:mt-20">
        <div>
          Ignite Your Workforce with Exceptional Staffing Solutions for Success
        </div>
        <div className="text-lg sm:text-xl font-light mt-4 sm:tracking-wide sm:mt-10 sm:leading-loose">
          Unleash talent potential with our strategic staffing solutions, ensuring access to the right candidates for optimal success.
        </div>
        <div className="flex flex-col sm:flex-row justify-center mt-10 sm:mt-10 gap-4">
          <div className="flex-shrink-0">
            <motion.div animate={{ x: [450, 0] }}>
              <Link href="/component">
                <span className="flex items-center justify-between bg-lc-orange border-2 border-white hover:bg-orange-400 text-white font-extralight text-lg sm:text-xl mt-5 py-2 sm:py-3 px-3 sm:px-8 rounded-full max-w-lg transition ease-in-out duration-75 hover:scale-x-110 hover:animate-pulse">
                  <span className="flex text-base sm:text-lg">For Recruiters</span>
                  <BsArrowRight className="w-10 " />
                </span>
              </Link>
            </motion.div>
          </div>
          <div className="flex-shrink-0">
            <motion.div animate={{ x: [450, 0] }}>
              <Link href="/employee">
                <span className="flex items-center justify-between bg-white-500 border-2 border-lc-orange  text-white font-extralight text-lg sm:text-xl mt-5 py-2 sm:py-3 px-3 sm:px-8 rounded-full max-w-lg">
                  <span className="flex text-lc-orange text-base sm:text-lg">For Job Seekers</span>
                  <BsArrowRight className="w-10 text-lc-orange" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between z-10 py-20">
          <motion.div animate={{ x: -100, scale: 1 }}>
            <Image
              src={Welcome}
              alt=""
              className="ml-[4rem] hover:scale-110 w-[120%] max-w-[600px] sm:ml-[14rem] sm:h-auto rounded-lg shadow-2xl overflow-hidden"
              width={600}
              height={400}
            />
          </motion.div>
          {isLargeScreen && <Marquee />}
        </div>
      </div>
    </div>
  );
};

function WrapWelcomePage() {
  return (
    <Container>
      <WelcomePage />
    </Container>
  );
}

export default WrapWelcomePage;
