
"use client"
import React, { useState } from 'react';
import Hands from "../Resources/Hands.png";
import Sand from "../Resources/Sand.png";
import Location from "../Resources/hand_with_location 1.png";
import Money from "../Resources/wepik-export-20230707060829M7kw 1.png";
import Image from "next/image";
import "animate.css";

function CardSection() {
  const [isOrangeHovered, setIsOrangeHovered] = useState(false);
  const [isGraySecondHovered, setIsGraySecondHovered] = useState(false);

  const handleSecondHover = () => {
    setIsGraySecondHovered(true);
  };

  const handleSecondHoverExit = () => {
    setIsGraySecondHovered(false);
  };

  const getSecondGrayCardTranslation = () => {
    return isGraySecondHovered ? 'translate-y-2' : '';
  };

  const getOrangeCardHeight = () => {
    return isGraySecondHovered ? '27rem' : '30rem';
  };

  const handleOrangeHover = () => {
    setIsOrangeHovered(true);
  };

  const handleOrangeHoverExit = () => {
    setIsOrangeHovered(false);
  };

  const getOrangeCardTranslation = () => {
    return isOrangeHovered ? 'translate-y-2' : '';
  };

  const getGreyCardHeight = () => {
    return isOrangeHovered ? '27rem' : '30rem';
  };
  return (
    <>
      <div className="flex flex-col space-y-8 md:flex-row">
        <div className="flex flex-col space-y-3 md:w-2/3">
          <span className="text-3xl mt-10 py-4 px-6 md:mt-20 md:py-20 md:px-20 w-full text-orange-600 whitespace-nowrap animate-bounce">
            Why Choose Us
          </span>
          <h2 className="text-5xl font-bold text-zinc-900 px-6 md:px-20 whitespace-nowrap animate__animated animate__rubberBand">
            <span className="text-3xl md:text-4xl">We Will Help You</span>
            <br className="md:hidden" /> 
            <span className="text-3xl md:text-4xl"> Get Your Dream Job</span>
          </h2>
          <p className="text-2xl text-zinc-900  px-6 py-4 md:px-20 md:py-10 leading-loose animate__animated animate__bounceInLeft">
            Empower your dreams with us. Our expert guidance and personalized
            approach will guide you toward your dream job. Let's make your
            career aspirations a reality.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center space-y-10 md:py-20 md:pr-20 animate__animated animate__backInDown">
          <div
            className={`bg-orange-600 w-full md:w-[92%] h-[40rem] ${getOrangeCardTranslation()} transition-transform duration-500`}
            onMouseEnter={handleOrangeHover}
            onMouseLeave={handleOrangeHoverExit}
          >
            <div className="px-6 py-6 md:px-10 md:py-10">
              <p className="text-3xl md:text-4xl font-bold w-11/12 md:w-1/2">
                250+ Job Opportunities
              </p>
              <p
                className={`text-xl mt-2 ${
                  isOrangeHovered ? 'line-clamp-none mt-6' : 'line-clamp-3'
                }`}
              >
                Explore 250+ job locations. From bustling cities to serene
                landscapes, we offer diverse opportunities that align with your
                ambitions. Expand your horizons and find the appropriate job
                location with us.
              </p>
            </div>
            <div
              className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${
                isOrangeHovered ? 'translate-y-2' : 'translate-y-0'
              }`}
            >
              <Image
                src={Location}
                alt="hands"
                layout="fill"
                objectFit="contain"
                className={`${
                  isOrangeHovered ? '-mt-16' : ''
                }`}
              />
            </div>
          </div>
          <div
            className={`bg-slate-300 w-full md:w-[90%] h-[${getGreyCardHeight()}] transition-height duration-500 relative`}
          >
            <p className="text-3xl md:text-4xl font-bold py-6 px-6 md:py-10 md:px-10">
              High Wages
            </p>
            <p className="px-6 text-xl md:px-10 -mt-8">
              Discover well-paying positions that align with your skills and
              interests, paving the way for a fulfilling career. Our
              personalized strategy ensures financial success by matching your
              unique qualifications to outstanding opportunities.
            </p>
            {!isOrangeHovered && (
              <div className="absolute w-[11rem] h-[11rem] mt-5 top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={Money} alt="" layout="fill" objectFit="contain"  />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-10 md:py-20 animate__animated animate__backInUp">
          <div
            className={`bg-slate-300 w-full md:w-[92%] h-[40rem] ${getSecondGrayCardTranslation()} transition-transform duration-500`}
            onMouseEnter={handleSecondHover}
            onMouseLeave={handleSecondHoverExit}
          >
            <div className="px-6 py-6 md:px-10 md:py-10">
              <p className="text-3xl md:text-4xl font-bold">Easy Recruitment Process</p>
              <p
                className={`text-xl ${
                  isGraySecondHovered ? 'line-clamp-none mt-4' : 'line-clamp-3'
                }`}
              >
                Streamline and enhance recruitment with our simplified
                approach. Leverage our expertise and cutting-edge technologies
                to identify highly qualified candidates, expediting the process
                for employers and job seekers alike.
              </p>
            </div>
            <div
              className={`w-[25rem] h-[12rem] transition-opacity duration-500 transform ${
                isGraySecondHovered ? 'translate-y-2' : 'translate-y-0'
              }`}
            >
              <Image
                src={Sand}
                alt="hands"
                layout="fill"
                objectFit="contain"
                className={`${
                  isGraySecondHovered ? '-mt-16' : 'mt-14'
                }`}
              />
            </div>
          </div>
          <div
            className={`bg-orange-600 w-full md:w-[90%] h-[${getOrangeCardHeight()}] transition-height duration-500 relative`}
          >
            <p className="text-3xl md:text-4xl font-bold py-6 px-6 md:py-10 md:px-10">
              Low Labor
            </p>
            <p className="px-6 text-xl md:px-10">
              Discover job opportunities effortlessly. Experience a personalized
              process that connects you seamlessly with the right job
              opportunities.
            </p>
            {!isGraySecondHovered && (
              <div className="absolute w-[10rem] h-[10rem] top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={Hands} alt="" layout="fill" objectFit="contain" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;