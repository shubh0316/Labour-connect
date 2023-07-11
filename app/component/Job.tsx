"use client";

import React, { useEffect, useState } from "react";
import Image from 'next/image';
import { BsArrowRight } from 'react-icons/bs';

const job = () => {
 const [step] = useState(0);

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
     description5:" hello"
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
      description5:" hello2"
    }
  ]
  const currentStep = stepDetails[step];
   
  
     
  

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
          <div className='flex-grow text-gray-500'> 
          <button className="shadow-xl" onClick={job}>Truck Driver</button></div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
          </div>
        <div className='flex items-center border-b-2  border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
          <div className='flex-grow text-gray-500'>Fork Lifters</div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
        <div className='flex items-center border-b-2  border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
          <div className='flex-grow text-gray-500'>Pickup Man</div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
        <div className='flex items-center border-b-2   border-gray-500 col-span-2 rounded-md hover:bg-slate-200 hover:animate-bounce-up transition-colors duration-300'>
          <div className='flex-grow text-gray-500'>Warehouse Supervisor</div>
          <div className='flex justify-end'>
          <BsArrowRight className='text-gray-500' />
          </div>
        </div>
      </div>
                <div>
                    <button className='flex items-center relative mt-4 justify-center gap-3 text-xl w-80 h-18 rounded-full bg-black-200 border-2 border-white-500 ... text-white p-2 hover:text-white   duration-500 hover:translate-y-[-5px]'>
                    View All Positions <BsArrowRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
              <div className='flex items-center justify-center'>
             <div className='h-96 w-96 rounded-md py-8 my-20 bg-white  text-black'>
             {currentStep.title}
             </div>
        </div>
            </div>
          </div>
        );
      };

  export default job;
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import { BsArrowRight } from "react-icons/bs";


// const job = () => {
//   const [step, setStep] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStep((s) => (s + 1) % stepDetails.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, []);

//   const stepDetails = [
//     {
//       title: "Job Openings",
//       title1: "20,000+ Job Openings",
//       title3: "Waiting For You.",
//       description1: "Truck Driver",
//       description2: "Fork Lifters",
//       description3: "Pickup Man",
//       description4: "Warehouse Supervisor",
//       icon: <BsArrowRight className="text-gray-500" />,
//       description5: " hello",
//     },
//     {
//       title: "Job Openings",
//       title1: "20,000+ Job Openings",
//       title3: "Waiting For You.",
//       description1: "Truck Driver",
//       description2: "Fork Lifters",
//       description3: "Pickup Man",
//       description4: "Warehouse Supervisor",
//       icon: <BsArrowRight className="text-gray-500" />,
//       description5: " hello2",
//     },
//   ];

//   const currentStep = stepDetails[step]; // Get the current step object from the stepDetails array

//   return (
//     <div className="container max-w-full mx-auto relative bg-zinc-950 border-cyan-400 h-full">
//       <div className="grid grid-cols-2 w-5/6 relative justify-between items-start border-orange-300 h-full">
//         <div className="flex flex-col gap-16 justify-between w-3/5 h-full border-red-700 my-10 mt-200">
//           <div className="flex gap-14 flex-col text-white">
//             <p className="text-red-500 text-2xl mt-10">{currentStep.title}</p>

//             <p className="text-3xl font-semibold space-y-5 -mt-5">
//               <span className="block">{currentStep.title1}</span>
//               <span className="block">{currentStep.title3}</span>
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               <div className="flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300 hover:translate-y-[-5px]">
//                 <div className="flex-grow text-gray-500">{currentStep.description1}</div>
//                 <div className="flex justify-end">
//                   {currentStep.icon}
//                 </div>
//               </div>
//               <div className="flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300 hover:translate-y-[-5px]">
//                 <div className="flex-grow text-gray-500">{currentStep.description2}</div>
//                 <div className="flex justify-end">
//                   {currentStep.icon}
//                 </div>
//               </div>
//               <div className="flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300 hover:translate-y-[-5px]">
//                 <div className="flex-grow text-gray-500">{currentStep.description3}</div>
//                 <div className="flex justify-end">
//                   {currentStep.icon}
//                 </div>
//               </div>
//               <div className="flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 hover:animate-bounce-up transition-colors duration-300 hover:translate-y-[-5px]">
//                 <div className="flex-grow text-gray-500">{currentStep.description4}</div>
//                 <div className="flex justify-end">
//                   {currentStep.icon}
//                 </div>
//               </div>
//             </div>

//             <div>
//               <button className="flex items-center relative mt-4 justify-center gap-3 text-xl w-80 h-18 rounded-full bg-black-200 border-2 border-white-500 ... text-white p-2 hover:text-white   duration-500 hover:translate-y-[-5px]">
//                 View All Positions <BsArrowRight size={24} />
//               </button>
//             </div>
//           </div>
//         </div>
//         <div className="flex items-center justify-center">
//           <div className="h-96 w-96 rounded-md py-8 my-20 bg-white text-black">
//             <h3>{currentStep.description5}</h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default job;

