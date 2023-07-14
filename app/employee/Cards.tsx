
"use client"
import React, { useState } from 'react';
import Hands from "../Resources/Hands.png";
import Sand from "../Resources/Sand.png";
import Image from "next/image";
import Database from "../Resources/35571886_fp1222_database 1.png";
import Process from "../Resources/34164103_qualitycontrolone10 1.png";
import Fast from "../Resources/wepik-export-20230707071614tutv 1.png";
import Support from "../Resources/wepik-export-20230707072015iDJ1 1.png";
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
            why choose us
          </span>
          <h2 className="text-5xl font-bold text-zinc-900 px-6 md:px-20 whitespace-nowrap animate__animated animate__rubberBand">
            <span className="text-3xl md:text-4xl">We Will Help You</span>
            <br className="md:hidden" /> 
            <span className="text-3xl md:text-4xl"> Get The Best Employee</span>
          </h2>
          <p className="text-2xl text-zinc-900  px-6 py-4 md:px-20 md:py-10 leading-loose animate__animated animate__bounceInLeft">
            Unlock your workforce's potential with our expert assistance. Our personalized 
            approach connects you with exceptional talent that perfectly aligns your
            organization's needs. Discover the best employees who will drive your success forward.
            Partner with us today!
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
               Large Employee Database
              </p>
              <p
                className={`text-xl mt-2 ${
                  isOrangeHovered ? 'line-clamp-none -mb-20' : 'line-clamp-3'
                }`}
              >
                Access our extensive employee database to find the right match for your 
                open positions. We empower employers to discover highly qualified applicants who will 
                contribute to their company's success. Streamline your hiring process and find your 
                ideal candidate.
              </p>
            </div>
            <div
              className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${
                isOrangeHovered ? 'translate-y-2' : 'translate-y-0'
              }`}
            >
              <Image
                src={Database}
                alt="hands"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div
            className={`bg-gray-600 w-full md:w-[90%] h-[${getGreyCardHeight()}] transition-height duration-500 relative`}
          >
            <p className="text-3xl md:text-4xl font-bold py-6 px-6 md:py-10 md:px-10">
            Fast Processing
            </p>
            <p className="px-6 text-xl md:px-10">
              Discover well-paying positions that align with your skills and
              interests, paving the way for a fulfilling career. Our
              personalized strategy ensures financial success by matching your
              unique qualifications to outstanding opportunities.
            </p>
            {!isOrangeHovered && (
              <div className="absolute w-[20rem] h-[25rem] top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={Fast} alt="" layout="fill" objectFit="contain" />
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-10 md:py-20 animate__animated animate__backInUp">
          <div
            className={`bg-gray-600 w-full md:w-[92%] h-[40rem] ${getSecondGrayCardTranslation()} transition-transform duration-500`}
            onMouseEnter={handleSecondHover}
            onMouseLeave={handleSecondHoverExit}
          >
            <div className="px-6 py-6 md:px-10 md:py-10">
              <p className="text-3xl md:text-4xl font-bold">Transparent Process</p>
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
                src={Process}
                alt="hands"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </div>
          <div
            className={`bg-orange-600 w-full md:w-[90%] h-[${getOrangeCardHeight()}] transition-height duration-500 relative`}
          >
            <p className="text-3xl md:text-4xl font-bold py-6 px-6 md:py-10 md:px-10">
            24X7 Support
            </p>
            <p className="px-6 text-xl md:px-10">
              Discover job opportunities effortlessly. Experience a personalized
              process that connects you seamlessly with the right job
              opportunities.
            </p>
            {!isGraySecondHovered && (
              <div className="absolute w-[20rem] h-[25rem] top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={Support} alt="" layout="fill" objectFit="contain" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;