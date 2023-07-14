// import React from 'react';
// import Image from 'next/image';
// import Capa_1 from '../Resources/Capa_1.png';
// import Capa_2 from '../Resources/Capa_2.png';
// import Capa_3 from '../Resources/Capa_3.png';

// const CardSection = () => {
//   return (
//     <div className='max-w-full container text-black my-40'>
//     <div className='container gap-10 flex-col w-2/3'>
//       <p className='text-orange-500 text-2xl font-bold'>Why choose us</p>
//       <p className='text-6xl font-semibold'>
//         We will help you get your dream Job
//       </p>
//       <div className='flex md:flex-row flex-col justify-between my-10 gap-10'>
//         <div className='flex flex-col gap-6 m:w-1/3 drop-shadow-lg bg-gray-200 rounded-xl p-8 z-20 hover:bg-orange-500 transform hover:scale-125'>
//           <p className='text-xl font-semibold'>Excellent Services</p>
//           <p>
//             Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
//             quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
//             nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
//             officia assumenda sed magnam illo. Qui rerum nisi et pariatur
//             omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
//             et dolores suscipit et nulla veritatis. Id saepe pariaturs.
//           </p>
//           <Image
//                         className='absolute -bottom-4 -right-0 overflow-hidden'
//                         src={Capa_1} alt={''}            />
//         </div>
//         <div className='flex flex-col gap-6 m:w-1/3 drop-shadow-xl rounded-xl p-8 z-20 hover:bg-orange-500 transform hover:scale-125'>
//           <p className='text-xl font-semibold'>Excellent Services</p>
//           <p className='mb-20'>
//             Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
//             quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
//             nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
//             officia assumenda sed magnam illo. Qui rerum nisi et pariatur
//             omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
//             et dolores suscipit et nulla veritatis. Id saepe pariaturs.
//           </p>
//           <Image
//                         className='absolute -bottom-1 -right-0 overflow-hidden'
//                         src={Capa_2} alt={''}            />
//         </div>
//         <div className='flex flex-col gap-6 m:w-1/3 drop-shadow-lg bg-gray-200 rounded-xl p-8 z-10 hover:bg-orange-500 transform hover:scale-125'>
//           <p className='text-xl font-semibold'>Excellent Services</p>
//           <p>
//             Lorem ipsum dolor sit amet. 33 pariatur asperiores cum aliquam
//             quia rem recusandae esse. Sit adipisci quaerat sed exercitationem
//             nisi rem voluptatem quas qui fugiat maiores ut itaque possimus sit
//             officia assumenda sed magnam illo. Qui rerum nisi et pariatur
//             omnis qui quia sequi ea voluptatem debitis qui delectus laboriosam
//             et dolores suscipit et nulla veritatis. Id saepe pariaturs.
//           </p>
//           <Image
//                         className='absolute -bottom-0 -right-0 overflow-hidden'
//                         src={Capa_3} alt={''}            />
//         </div>
//       </div>
//     </div>
//   </div>
//   );
// };

// export default CardSection;

"use client"
import React, { useState } from 'react';
import Hands from "../Resources/wepik-export-20230707094010tWv1 1 (1).png";
import Girl from "../Resources/33417740_7946688 1.png"
import Bag from "../Resources/8640018 1.png";
import  Sand from "../Resources/13677899_5143070 1.png"
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
            Why Choose Our Dynamic Services
          </span>
          <h2 className="text-5xl font-bold text-zinc-900 px-6 md:px-20 whitespace-nowrap animate__animated animate__rubberBand">
            <span className="text-3xl md:text-4xl">Unlock Your Staffing</span>
            <br className="md:hidden" /> 
            <span className="text-3xl md:text-4xl"> Success With Us</span>
          </h2>
          <p className="text-2xl text-zinc-900  px-6 py-4 md:px-20 md:py-10 leading-loose animate__animated animate__bounceInLeft">
            Boost your staffing success with our dynamic services. With us, you'll harness 
            personalized solutions and expert support. Maximize your potential and achieve
            extraordinary results. Join us today and revolutionize your staffing approach.
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
               Expertise In The Industry
              </p>
              <p
                className={`text-xl mt-2 ${
                  isOrangeHovered ? 'line-clamp-none mt-6' : 'line-clamp-3'
                }`}
              >
                Discover a hub of expertise in the industry, where employers find exceptional talent and 
                employees uncover their dream opportunities. Join us and unlock the most ideal match
                for extraordinary success.
              </p>
            </div>
            <div
              className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${
                isOrangeHovered ? 'translate-y-2' : 'translate-y-0'
              }`}
            >
             <Image
         src={Hands}
            alt="hands"
            layout="fill"
            objectFit="contain"
            className={`${
              isOrangeHovered ? '-mt-12 -ml-11' : 'mb-0 '
            } ${isOrangeHovered ? 'scale-100' : 'scale-150 -ml-4'}`}
          />

            </div>
          </div>
          <div
            className={`bg-slate-300 w-full md:w-[90%] h-[${getGreyCardHeight()}] transition-height duration-500 relative`}
          >
            <p className="text-3xl md:text-4xl font-bold py-6 px-6 md:py-10 md:px-10">
             Extensive Talent Network
            </p>
            <p className="px-6 text-xl md:px-10">
              Unleash the potential of our robust candidate network. We provide your organization
              with highly qualified professionals who make
            </p>
            {!isOrangeHovered && (
              <div className="absolute w-[13rem] h-[13rem] top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={Sand} alt="" layout="fill" objectFit="contain"
                
               />
   
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
              <p className="text-3xl md:text-4xl font-bold">Simple To Use</p>
              <p
                className={`text-xl ${
                  isGraySecondHovered ? 'line-clamp-none mt-4' : 'line-clamp-3 mt-2'
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
                src={Girl}
                alt="hands"
                layout="fill"
                objectFit="contain"
                className={`${
                  isOrangeHovered ? '-mt-12 -ml-11' : 'mb-3 '
                } ${isOrangeHovered ? 'scale-100' : 'scale-150 -ml-4'}`}
              />
    
            </div>
          </div>
          <div
            className={`bg-orange-600 w-full md:w-[90%] h-[${getOrangeCardHeight()}] transition-height duration-500 relative`}
          >
            <p className="text-3xl md:text-4xl font-bold py-6 px-6 md:py-10 md:px-10">
              Large Variety Of Jobs
            </p>
            <p className="px-6 text-xl md:px-10">
              Discover job opportunities effortlessly. Experience a personalized
              process that connects you seamlessly with the right job
              opportunities.
            </p>
            {!isGraySecondHovered && (
              <div className="absolute w-[13rem] h-[13rem] top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
                <Image src={Bag} alt="" layout="fill" objectFit="contain" />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;