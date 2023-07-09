"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from "react-icons/bs";
import image from "../Resources/Frame 1410086302.png";

const ScrollSection = () => {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % 3);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const stepDetails = [
    {
      title: "Create your profile",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",
      img: image,
      icon: <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
    },
    {
      title: "Apply For Jobs",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",
      img: image,
      icon: <BsFill2CircleFill className="text-orange-500 text-4xl p-1" />
      
    },
    {
      title: "Complete the interview process and get hired",
      description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",
      img: image,
      icon: <BsFill3CircleFill className="text-orange-500 text-4xl p-1" />
    },
  ];

  return (
    <div className="max-w-full container text-black my-40 overflow-y-scroll">
      <div className="container gap-10 flex-col mx-32 xl:w-2/3">
        <p className="text-orange-500 text-2xl font-bold">How it Works</p>
        <p className="text-6xl font-semibold">Get Hired In 3 Simple Steps</p>

        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start mr-10 mt-20 align-items-start">
              <div className="mr-4">
                {stepDetails[step].icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-2 text-orange-500">{stepDetails[step].title}</h1>
                <p className="text-gray-700 ">{stepDetails[step].description}</p>
              </div>
            </div>
            <div className="flex items-center">
            <div className='flex items-center justify-center'>
             {/* <div className='h-96 w-96  rounded-md mx-52 sm:mx-14 py-8 my-20 bg-black '> */}
             <div className="box-border h-96 w-96 mx-19 bg-black p-4 border-4">
              Content goes here
             </div>
        </div>
            </div>
          </div>
        </div>
 
      </div>
    </div>
  );
};

export default ScrollSection;