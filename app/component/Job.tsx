"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const job = () => {
 const [step ,setStep] = useState(0);
 
 const [isDefault,setDefault] = useState(true);
 const [title,setTitle] = useState("");
  const stepDetails = [
  //  "Default message", "I am a truck driver", "I am a fork lifter"
    {
      title: "Find your Dream Job in just one click",
      content: "FInd job openings here"
    },
    {
      title: "Truck Driver",
      content: "I am a truck driver"
    },
    {
      title: "Fork lifter",
      content: "I lift fork"
    },
    {
      title : "xyz",
      content : "i m xyz"
    },
    {
      title : "warehouse",
      content : "i m xyz"
    }
  ]
  const [content, setContent] = useState(stepDetails[0].content);
  const handleButtonClick = (index: number) => {
     setContent(stepDetails[index].content);
     setDefault(false);
     setTitle(stepDetails[index].title);

  };
return (
    <div className='container max-w-full  mx-auto relative bg-zinc-950 border-cyan-400 h-full' >
      <div className='grid grid-cols-2 w-5/6 relative justify-between items-start border-orange-300 h-full'>
        <div className='flex flex-col gap-16 justify-between w-3/5 h-full border-red-700 my-10 mt-200'>
          <div className='flex gap-14 flex-col text-white'>
            <p className='text-red-500 text-2xl mt-10'>Job Openings</p>

            <p className='text-3xl font-semibold space-y-5 -mt-5'>
              <span className='block'>20,000+ Job Openings</span>
              <span className='block'>Waiting For You.</span>
            </p>
                
                <div className='grid grid-cols-2 gap-4'>
          <div className='flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
          {/* <div className='flex-grow text-gray-500'>  */}
          {/* <button className="shadow-xl"   onClick={() => handleButtonClick(index)}>Truck Driver</button> */}
          <button onClick={() => handleButtonClick(1)} className='flex-grow shadow-xl text-gray-500 '> Truck Driver
          </button>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
          </div>
        <div className='flex items-center border-b-2  border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
          {/* <div className='flex-grow text-gray-500'>Fork Lifters</div> */}
          <button onClick={() => handleButtonClick(2)} className='flex-grow text-gray-500'>Fork Lifter
          </button>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
        <div className='flex items-center border-b-2  border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
          {/* <div className='flex-grow text-gray-500'>Pickup Man</div> */}
          <button onClick={() => handleButtonClick(3)} className='flex-grow text-gray-500'>Pickup Man
          </button>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
        <div className='flex items-center border-b-2   border-gray-500 col-span-2 rounded-md hover:bg-slate-200 hover:animate-bounce-up transition-colors duration-300'>
          {/* <div className='flex-grow text-gray-500'>Warehouse Supervisor</div> */}
          <button onClick={() => handleButtonClick(4)} className='flex-grow text-gray-500'> Warehouse Supervisor </button>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
      </div>
                <div>
                    <button className='flex items-center relative mt-4 justify-center gap-3 text-xl w-80 h-18 rounded-full bg-black-200 border-2 border-white-500 ... text-white p-2 hover:text-white   duration-500 hover:translate-y-[-5px] mx-10'>
                    View All Positions <BsArrowRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
          
              <div className='flex h-80 items-center justify-center'>
             <div className='h-96 w-96 rounded-md py-8 my-40 bg-white  text-black'>
              {<h1 className="text-rose-800">{title}</h1>}
              {content}
             
             </div>
        </div>
            </div>
          </div>
        );
      };

  export default job;
