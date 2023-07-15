"use client";

// import React, { useEffect, useState } from "react";
// import Image from 'next/image';
// import { BsArrowRight } from 'react-icons/bs';
// import {BiSolidShoppingBags} from "react-icons/bi";
// import {FaTelegramPlane} from "react-icons/fa";
// import {GiWallet} from "react-icons/gi";
// import 'animate.css';
// const job = () => {
//  const [step ,setStep] = useState(0);
//  const[isClick ,setClick] = useState(false);
//  const [isDefault,setDefault] = useState(true);

//   const stepDetails = [
//   //  "Default message", "I am a truck driver", "I am a fork lifter"
//     {
//       title: "Truck Driver",
//       content: "Accelerate your truck driving career. Join our team of skilled proessionals, delivering goods nationwide with precision and reliability. Experience the open road and the satisfaction of keeping America moving."
//     },
//     {
//       title: "Fork Lifter",
//       content: "Elevate your career as a skilled forklift operator. Apply now for rewarding opportunities that allow you to showcase your expertise, contribute to operations, and be an integral part of a thriving team."
//     },
//     {
//       title : "Pick Up",
//       content : "Embark on a rewarding career as a pickup man. Join our team and experience the excitement of assisting with smooth operations while contributing to diverse industries' success. Apply now!"
//     },
//     {
//       title : "Warehouse Supervisor",
//       content : "Lead a high-performing warehouse team to success. Apply now for the warehouse supervisor role and make a positive impact through your strong leadership, organizational skills, and commitment to excellence. Apply now!"
//     },
    
//   ]
//   const [title,setTitle] = useState(stepDetails[0].title);
//   const [content, setContent] = useState(stepDetails[0].content);
//   const handleButtonClick = (index: number) => {
//      setContent(stepDetails[index].content);
//      setDefault(false);
//      setTitle(stepDetails[index].title);
//     setDefault(false);
//     setClick(false);
//   };
// return (
//     <div className='container max-w-full  mx-auto relative bg-zinc-950 sm:bg-zinc-950 border-cyan-400 h-full' >
//       <div className='grid grid-cols-2 w-5/6 relative justify-between items-start border-orange-300 h-full '>
//         <div className='flex flex-col gap-16 justify-between w-3/5 h-full border-red-700 my-10 mt-200'>
//           <div className='flex gap-14 flex-col text-white'>
//             <p className='text-orange-500 text-2xl mt-10'>Job Openings</p>

//             <p className='text-3xl font-semibold space-y-5 -mt-5'>
//               <span className='block'>20,000+ Job Openings</span>
//               <span className='block'>Waiting For You.</span>
//             </p>
                
//                 <div className='grid grid-cols-2 gap-4 py-4 gay-y-20'>
//           <div className='flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
//           {/* <div className='flex-grow text-gray-500'>  */}
//           {/* <button className="shadow-xl"   onClick={() => handleButtonClick(index)}>Truck Driver</button> */}
//           <button  className='flex-grow shadow-xl text-gray-500 '> Truck Driver
//           </button>
//           <div className='flex justify-end'>
//           <BsArrowRight className="text-gray-500"/>
        
//           </div>
//           </div>
//         <div className='flex items-center border-b-2  border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
//           {/* <div className='flex-grow text-gray-500'>Fork Lifters</div> */}
//           <button onClick={() => handleButtonClick(1)} className='flex-grow text-gray-500'>Fork Lifter
//           </button>
//           <div className='flex justify-end'>
//           <BsArrowRight className='text-gray-500' />
//           </div>
//         </div>
//         <div className='flex items-center border-b-2  border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300'>
//           {/* <div className='flex-grow text-gray-500'>Pickup Man</div> */}
//           <button onClick={() => handleButtonClick(2)} className='flex-grow text-gray-500'>Pickup Man
//           </button>
//           <div className='flex justify-end'>
//           <BsArrowRight className='text-gray-500' />
//           </div>
//         </div>
//         <div className='flex items-center border-b-2   border-gray-500 col-span-2 rounded-md hover:bg-slate-200 hover:animate-bounce-up transition-colors duration-300'>
//           {/* <div className='flex-grow text-gray-500'>Warehouse Supervisor</div> */}
//           <button onClick={() => handleButtonClick(3)} className='flex-grow text-gray-500'> Warehouse Supervisor </button>
//           <div className='flex justify-end'>
//           <BsArrowRight className='text-gray-500' />
//           </div>
//         </div>
//       </div>
//                 <div>
//                     <button className='flex items-center relative mt-4 justify-center gap-3 text-xl w-80 h-18 rounded-full bg-black-200 border-2 border-white-500 ... text-white p-2 hover:text-white   duration-500 hover:translate-y-[-5px] mx-10'>
//                     View All Positions <BsArrowRight size={24} />
//                     </button>
//                   </div>
//                 </div>
//               </div>
          
//               <div className='flex h-80 items-center justify-center mt-24'>
//              <div className='h-[35rem] w-96 rounded-md bg-white  text-black mt-[13vh] '>
//               {/* {isDefault && <h1 className="text-orange-600  text-3xl items-center mx-3 mt-8">{title}</h1>}
//               {isDefault && <p className="mx-3 items-center mt-4">{content}</p>} */}
//               {isDefault && <h1 className="text-orange-600 text-3xl items-center mx-4 mt-6 ">{title}</h1>}
//              {isDefault && <p className="mx-3 mt-3 text-base"> {content}</p>}
//              {isDefault &&
//               <div className="flex flex-col mt-20 ml-5 ">
//               <div className="flex items-center mb-4">
//               <div className="w-1/2"><BiSolidShoppingBags className="h-10 w-7" /></div>
//               <div className="w-1/2 -ml-28">50+ Job Openings</div>
//               </div>
//               <div className="flex items-center mb-4">
//               <div className="w-1/2"><FaTelegramPlane className="h-10 w-7"/></div>
//               <div className="w-1/2 -ml-28">20+ Locations</div>
//                </div>
//               <div className="flex items-center mb-4">
//               <div className="w-1/2"><GiWallet className="h-10 w-7"/></div>
//               <div className="w-1/2 -ml-28">Starting From $500</div>
//              </div>
//             </div>}
//           {isDefault && <button className="bg-orange-500  text-white items-center mt-12 mx-8 h-16 w-80 rounded-full"> Apply now </button>}
//           {!isDefault && <h1 className="text-orange-600 text-3xl items-center mx-4 mt-6 ">{title}</h1>}
//              {!isDefault && <p className="mx-3 mt-3"> {content}</p>}
//              {!isDefault &&
//               <div className="flex flex-col mt-10 ml-5 ">
//               <div className="flex items-center mb-4">
//               <div className="w-1/2"><BiSolidShoppingBags className="h-10 w-7" /></div>
//               <div className="w-1/2 -ml-28">50+ Job Openings</div>
//               </div>
//               <div className="flex items-center mb-4">
//               <div className="w-1/2"><FaTelegramPlane className="h-10 w-7"/></div>
//               <div className="w-1/2 -ml-28">20+ Locations</div>
//                </div>
//               <div className="flex items-center mb-4">
//               <div className="w-1/2"><GiWallet className="h-10 w-7"/></div>
//               <div className="w-1/2 -ml-28">Starting From $500</div>
//              </div>
//             </div>}
//           {!isDefault && <button className="bg-orange-500  text-white items-center my-10 mx-8 h-16 w-80 rounded-full"> Apply now </button>}
//              </div>
//         </div>
//             </div>
//           </div>
//         );
//       };

//   export default job;



import React, { useState } from "react";
import { BsArrowRight } from 'react-icons/bs';
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaTelegramPlane } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";
import 'animate.css';

const Job = () => {
  const [step, setStep] = useState(0);
  const [isClick, setClick] = useState(Array(4).fill(false));
  const [isDefault, setDefault] = useState(true);

  const stepDetails = [
    {
      title: "Truck Driver",
      content: "Accelerate your truck driving career. Join our team of skilled professionals, delivering goods nationwide with precision and reliability. Experience the open road and the satisfaction of keeping America moving."
    },
    {
      title: "Fork Lifter",
      content: "Elevate your career as a skilled forklift operator. Apply now for rewarding opportunities that allow you to showcase your expertise, contribute to operations, and be an integral part of a thriving team."
    },
    {
      title: "Pick Up",
      content: "Embark on a rewarding career as a pickup man. Join our team and experience the excitement of assisting with smooth operations while contributing to diverse industries' success. Apply now!"
    },
    {
      title: "Warehouse Supervisor",
      content: "Lead a high-performing warehouse team to success. Apply now for the warehouse supervisor role and make a positive impact through your strong leadership, organizational skills, and commitment to excellence. Apply now!"
    },
  ];

  const [title, setTitle] = useState(stepDetails[0].title);
  const [content, setContent] = useState(stepDetails[0].content);

  const handleClick = (index:number) => {
    setClick(prevState => {
      const newState = Array(4).fill(false);
      newState[index] = true;
      return newState;
    });
    setContent(stepDetails[index].content);
    setTitle(stepDetails[index].title);
    setDefault(false);
  };

  return (
    <div className='container max-w-full mx-auto relative bg-zinc-950 sm:bg-zinc-950 border-cyan-400 h-full'>
      <div className='grid grid-cols-2 w-5/6 relative justify-between items-start border-orange-300 h-full'>
        <div className='flex flex-col gap-16 justify-between w-3/5 h-full border-red-700 my-10 mt-200'>
          <div className='flex gap-14 flex-col text-white'>
            <p className='text-orange-500 text-2xl mt-10'>Job Openings</p>
            <p className='text-3xl font-semibold space-y-5 -mt-5'>
              <span className='block'>20,000+ Job Openings</span>
              <span className='block'>Waiting For You.</span>
            </p>
            <div className='grid grid-cols-2 gap-4 py-4 gay-y-20'>
              <div className={`flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300 ${isClick[0] && 'animate__animated animate__backInUp'}`} onClick={() => handleClick(0)}>
                <button className={`flex-grow shadow-xl text-gray-500 ${isClick[0] && 'animate__animated animate__backInUp'}`}>Truck Driver</button>
                <div className='flex justify-end'>
                  <BsArrowRight className={`text-gray-500 ${isClick[0] && 'animate__animated animate__backInUp'}`} />
                </div>
              </div>
              <div className={`flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300 ${isClick[1] && 'animate__animated animate__backInUp'}`} onClick={() => handleClick(1)}>
                <button className={`flex-grow text-gray-500 ${isClick[1] && 'animate__animated animate__backInUp'}`}>Fork Lifter</button>
                <div className='flex justify-end'>
                  <BsArrowRight className={`text-gray-500 ${isClick[1] && 'animate__animated animate__backInUp'}`} />
                </div>
              </div>
              <div className={`flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 transition-colors duration-300 ${isClick[2] && 'animate__animated animate__backInUp'}`} onClick={() => handleClick(2)}>
                <button className={`flex-grow text-gray-500 ${isClick[2] && 'animate__animated animate__backInUp'}`}>Pickup Man</button>
                <div className='flex justify-end'>
                  <BsArrowRight className={`text-gray-500 ${isClick[2] && 'animate__animated animate__backInUp'}`} />
                </div>
              </div>
              <div className={`flex items-center border-b-2 border-gray-500 col-span-2 rounded-md hover:bg-slate-200 hover:animate-bounce-up transition-colors duration-300 ${isClick[3] && 'animate__animated animate__backInUp'}`} onClick={() => handleClick(3)}>
                <button className={`flex-grow text-gray-500 ${isClick[3] && 'animate__animated animate__backInUp'}`}>Warehouse Supervisor</button>
                <div className='flex justify-end'>
                  <BsArrowRight className={`text-gray-500 ${isClick[3] && 'animate__animated animate__backInUp'}`} />
                </div>
              </div>
            </div>
            <div>
              <button className='flex items-center relative mt-4 justify-center gap-3 text-xl w-80 h-18 rounded-full bg-black-200 border-2 border-white-500 ... text-white p-2 hover:text-white duration-500 hover:translate-y-[-5px] mx-10'>
                View All Positions <BsArrowRight size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className='flex h-80 items-center justify-center mt-24'>
          <div className='h-[35rem] w-96 rounded-md bg-white text-black mt-[13vh] '>
            <h1 className={`text-orange-600 text-3xl items-center mx-4 mt-6 ${isClick.some(Boolean) && 'animate__animated animate__backInUp'}`}>{title}</h1>
            <p className={`mx-3 mt-3 ${isClick.some(Boolean) && 'animate__animated animate__backInUp'}`}>{content}</p>
            {!isDefault &&
              <div className={`flex flex-col mt-20 ml-5 ${isClick.some(Boolean) && 'animate__animated animate__backInUp'}`}>
                <div className="flex items-center mb-4">
                  <div className="w-1/2"><BiSolidShoppingBags className="h-10 w-7" /></div>
                  <div className="w-1/2 -ml-28">50+ Job Openings</div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-1/2"><FaTelegramPlane className="h-10 w-7" /></div>
                  <div className="w-1/2 -ml-28">20+ Locations</div>
                </div>
                <div className="flex items-center mb-4">
                  <div className="w-1/2"><GiWallet className="h-10 w-7" /></div>
                  <div className="w-1/2 -ml-28">Starting From $500</div>
                </div>
              </div>
            }
            {!isDefault &&
              <button className={`bg-orange-500 text-white items-center ${isClick.some(Boolean) ? 'my-10' : 'mt-12'} mx-8 h-16 w-80 rounded-full animate__animated animate__backInUp`}> Apply now </button>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
