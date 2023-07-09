"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';
import image from '../Resources/Frame 1410086281.png';
import image1 from '../Resources/truck.png'
const job = () => {
 const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((s) => (s + 1) % stepDetails.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);
 
  const stepDetails = [
    {
      title: "Job Openings",
      title1: "20,000+ Job Openings",
      title3: "Waiting For You.",
      description1:"Truck Driver",
      description2:"Fork Lifters",
      description3:"Pickup Man",
      description4:"Warehouse Supervisor",
      icon:  <BsArrowRight className='text-gray-500' />,
      img: image,
    },
    {
      title: "Job Openings",
      title1: "20,000+ Job Openings",
      title3: "Waiting For You.",
      description1:"Truck Driver",
      description2:"Fork Lifters",
      description3:"Pickup Man",
      description4:"Warehouse Supervisor",
      icon:  <BsArrowRight className='text-gray-500' />,
      img: image1,
    }
  ]
  return (
    <div className='container max-w-full  mx-auto relative bg-zinc-950 border-cyan-400 h-full' >
      <div className='grid grid-cols-2 w-5/6 relative justify-between items-start border-orange-300 h-auto'>
        <div className='flex flex-col gap-16 justify-between w-3/5 h-full border-red-700 my-10 mt-200'>
          <div className='flex gap-14 flex-col text-white'>
            <p className='text-red-500 text-2xl mt-10'>Job Openings</p>

            <p className='text-3xl font-semibold space-y-5 -mt-5'>
              <span className='block'>20,000+ Job Openings</span>
              <span className='block'>Waiting For You.</span>
            </p>
                
                <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center border-b-2 border-gray-500 col-span-2'>
          <div className='flex-grow text-gray-500'>Truck Driver</div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
          </div>
        <div className='flex items-center border-b-2  border-gray-500 col-span-2'>
          <div className='flex-grow text-gray-500'>Fork Lifters</div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
        <div className='flex items-center border-b-2  border-gray-500 col-span-2'>
          <div className='flex-grow text-gray-500'>Pickup Man</div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
        <div className='flex items-center border-b-2   border-gray-500 col-span-2'>
          <div className='flex-grow text-gray-500'>Warehouse Supervisor</div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
      </div>
                <div>
                    <button className='flex items-center relative mt-4 justify-center gap-3 text-xl w-80 h-18 rounded-full bg-black-200 border-2 border-white-500 ... text-white p-2'>
                    View All Positions <BsArrowRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
             <div className='h-96 w-96 rounded-md py-8 my-20 bg-white '>
              Content goes here
             </div>
        </div>
            </div>
          </div>
        );
      };

  export default job;


