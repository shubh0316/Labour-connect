"use client";

// import React, { useEffect, useRef } from "react";
// import Image from "next/image";
// import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from "react-icons/bs";
// import image from "../Resources/Frame 1410086302.png";
// import {gsap} from "gsap"
// import ScrollTrigger from "gsap/ScrollTrigger"

// const ScrollSection = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);
//   useEffect(() => {
//        const pin = gsap.fromTo(sectionRef.current,{
//         translateX:0
//        },{
//         translateX:"-300vw",
//         ease:"none",
//         duration:1,
//         scrollTrigger:{
//           trigger : triggerRef.current,
//           start:"top top",
//           end:"2000 top",
//           scrub:0.6,
//           pin:true
//         }
//        })


//        return () =>{
//     pin.kill()
//        }
//    }, []);

  // const [step, setStep] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setStep((s) => (s + 1) % 3);
  //   }, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  // const stepDetails = [
  //   {
  //     title: "Create your profile",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",
  //     img: image,
  //     icon: <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
  //   },
  //   {
  //     title: "Apply For Jobs",
  //     description:
  //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",
  //     img: image,
  //     icon: <BsFill2CircleFill className="text-orange-500 text-4xl p-1" />
      
  //   },
  //   {
  //     title: "Complete the interview process and get hired",
  //     description:
  //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",
  //     img: image,
  //     icon: <BsFill3CircleFill className="text-orange-500 text-4xl p-1" />
  //   },
  // ];

  // return (
//     <div className="wrapper hidden:overflow-x">
//     <div className="max-w-full container text-black my-40 "> 
     
//    <div className="container gap-10 flex-col mx-32 xl:w-2/3 ">
//         <p className="text-orange-500 text-2xl font-bold">How it Works</p>
//         <p className="text-6xl font-semibold">Get Hired In 3 Simple Steps</p>

//         <svg viewBox="0 0 900 10" fill="none" xmlns="http://www.w3.org/2000/svg">
//   <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
//   <mask id="mask0_0_1" className="mask-type:alpha " maskUnits="userSpaceOnUse" x="0" y="0" width="900" height="10">
//     <path d="M9.89998 6C9.43671 8.28224 7.41896 10 5 10C2.23858 10 0 7.76142 0 5C0 2.23858 2.23858 0 5 0C7.41896 0 9.43671 1.71776 9.89998 4H445.1C445.563 1.71776 447.581 0 450 0C452.419 0 454.437 1.71776 454.9 4H890.1C890.563 1.71776 892.581 0 895 0C897.761 0 900 2.23858 900 5C900 7.76142 897.761 10 895 10C892.581 10 890.563 8.28224 890.1 6H454.9C454.437 8.28224 452.419 10 450 10C447.581 10 445.563 8.28224 445.1 6H9.89998Z" fill="#D9D9D9"/>
//   </mask>
//   <g mask="url(#mask0_0_1)">
//     <rect className="mask" y="-60"  height="99" fill="black"/>
//   </g>
// </svg>

//         <div className="container mx-auto px-4 py-8">
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8 hidden:overlow-x ">
//             <div className="flex items-start mr-10 mt-20 align-items-start">
//               <div className="mr-4">
//               <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold mb-2 text-orange-500">Create your profile</h1>
//                 <p className="text-gray-700 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//             <div className='flex items-center justify-center'>
         
//              <div className="box-border h-96 w-96 mx-19 bg-black p-4 border-4">
//               Content goes here
//              </div>
//              </div>
//             </div>
//             <div className="flex items-start mr-10 mt-20 align-items-start">
//               <div className="mr-4">
//               <BsFill2CircleFill className="text-orange-500 text-4xl p-1" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold mb-2 text-orange-500">Create your profile</h1>
//                 <p className="text-gray-700 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//             <div className='flex items-center justify-center'>
         
//              <div className="box-border h-96 w-96 mx-19 bg-black p-4 border-4">
//               Content goes here
//              </div>
//              </div>
//             </div>
//             <div className="flex items-start mr-10 mt-20 align-items-start">
//               <div className="mr-4">
//               <BsFill3CircleFill className="text-orange-500 text-4xl p-1" />
//               </div>
//               <div>
//                 <h1 className="text-3xl font-bold mb-2 text-orange-500">Create your profile</h1>
//                 <p className="text-gray-700 ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem. Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.",</p>
//               </div>
//             </div>
//             <div className="flex items-center">
//             <div className='flex items-center justify-center'>
         
//              <div className="box-border h-96 w-96 mx-19 bg-black p-4 border-4">
//               Content goes here
      //        </div>
      //        </div>
      //       </div>
      //     </div>
      //   </div>
      //   </div>
      // </div>
      // </div>
//       <section  className="scroll-section-outer overflow-hidden">
//         <div ref ={triggerRef}>
//         <div ref={sectionRef} className="scroll-section-inner h-[100vh] width-[400vw] flex flex-row relative">
//           <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center">
//            <h3 className="">section 1</h3> 
//           </div>
//           <div className="scroll-section">
//            <h3 className="">section 2</h3>
//           </div>
//           <div className="scroll-section">
//            <h3 clas>section 3</h3>
//           </div>
//         </div>
//         </div>
//       </section>
      
//   )
// }

// export default ScrollSection; 


import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from "react-icons/bs";

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true
        }
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="wrapper overflow-x-auto">
      <section className="scroll-section-outer overflow-hidden">
      <div className="max-w-full container  text-black my-40 "> 
      <div className="container gap-10 flex-col mx-32 xl:w-2/3 ">
        <p className="text-orange-500 text-2xl font-bold">How it Works</p>
       <p className="text-6xl font-semibold">Get Hired In 3 Simple Steps</p>
</div>
      </div>
        <div ref={triggerRef}>
          <div ref={sectionRef} className="scroll-section-inner h-[100vh] w-[300vw] flex flex-row relative">
          <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center ">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40 ">
                  <div className="mr-4">
                    <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
                  </div>

                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-orange-500 ">
                      Create your profile
                    </h1>
                    <p className="text-gray-700 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut ut interdum lectus, eu semper lorem. Sed eget leo id
                      justo venenatis venenatis. Nam placerat placerat libero.",
                    </p>
                  </div>
                </div>

                <div className="box-border h-[50vh] w-[40vw] aspect-video mx-20 bg-black p-4 border-4">
                  Content goes here
                </div>
              </div>
            </div>
           
            <div className="scroll-section h-full w-[100vw] flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40 ">
                  <div className="mr-4">
                    <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
                  </div>

                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-orange-500">
                      Create your profile
                    </h1>
                    <p className="text-gray-700 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut ut interdum lectus, eu semper lorem. Sed eget leo id
                      justo venenatis venenatis. Nam placerat placerat libero.",
                    </p>
                  </div>
                </div>

                <div className="box-border h-[50vh] w-[40vw] aspect-video mx-20 bg-black p-4 border-4">
                  Content goes here
                </div>
              </div>
            </div>
            <div className="scroll-section h-full w-[100vw] flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40 ">
                  <div className="mr-4">
                    <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
                  </div>

                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-orange-500">
                      Create your profile
                    </h1>
                    <p className="text-gray-700 ">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Ut ut interdum lectus, eu semper lorem. Sed eget leo id
                      justo venenatis venenatis. Nam placerat placerat libero.",
                    </p>
                  </div>
                </div>

                <div className="box-border h-[50vh] w-[40vw] aspect-video mx-20 bg-black p-4 border-4">
                  Content goes here
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScrollSection;

