"use client";
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { BsFill1CircleFill, BsFill2CircleFill, BsFill3CircleFill } from "react-icons/bs";

// const ScrollSection = () => {
//   const sectionRef = useRef(null);
//   const triggerRef = useRef(null);

//   gsap.registerPlugin(ScrollTrigger);
//   useEffect(() => {
//     const pin = gsap.fromTo(
//       sectionRef.current,
//       {
//         translateX: 0
//       },
//       {
//         translateX: "-300vw",
//         ease: "none",
//         duration: 1,
//         scrollTrigger: {
//           trigger: triggerRef.current,
//           start: "top top",
//           end: "2000 top",
//           scrub: 0.6,
//           pin: true
//         }
//       }
//     );

//     return () => {
//       pin.kill();
//     };
//   }, []);

//   return (
//     <div className="wrapper overflow-x-auto">
//       <section className="scroll-section-outer overflow-hidden">
//       <div className="max-w-full container  text-black my-40 "> 
//       <div className="container gap-10 flex-col mx-32 xl:w-2/3 ">
//         <p className="text-orange-500 text-2xl font-bold">How it Works</p>
//        <p className="text-6xl font-semibold">Get Hired In 3 Simple Steps</p>
// </div>
//       </div>
//         <div ref={triggerRef}>
//           <div ref={sectionRef} className="scroll-section-inner h-[100vh] w-[300vw] flex flex-row relative">
//           <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center ">
//               <div className="grid grid-cols-1 md:grid-cols-2 h-full">
//                 <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40 ">
//                   <div className="mr-4">
//                     <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
//                   </div>

//                   <div>
//                     <h1 className="text-3xl font-bold mb-2 text-orange-500 ">
//                       Create your profile
//                     </h1>
//                     <p className="text-gray-700 ">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Ut ut interdum lectus, eu semper lorem. Sed eget leo id
//                       justo venenatis venenatis. Nam placerat placerat libero.",
//                     </p>
//                   </div>
//                 </div>

//                 <div className="box-border h-[50vh] w-[40vw] aspect-video mx-20 bg-black p-4 border-4">
//                   Content goes here
//                 </div>
//               </div>
//             </div>
           
//             <div className="scroll-section h-full w-[100vw] flex justify-center items-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 h-full">
//                 <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40 ">
//                   <div className="mr-4">
//                     <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
//                   </div>

//                   <div>
//                     <h1 className="text-3xl font-bold mb-2 text-orange-500">
//                       Create your profile
//                     </h1>
//                     <p className="text-gray-700 ">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Ut ut interdum lectus, eu semper lorem. Sed eget leo id
//                       justo venenatis venenatis. Nam placerat placerat libero.",
//                     </p>
//                   </div>
//                 </div>

//                 <div className="box-border h-[50vh] w-[40vw] aspect-video mx-20 bg-black p-4 border-4">
//                   Content goes here
//                 </div>
//               </div>
//             </div>
//             <div className="scroll-section h-full w-[100vw] flex justify-center items-center">
//             <div className="grid grid-cols-1 md:grid-cols-2 h-full">
//                 <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40 ">
//                   <div className="mr-4">
//                     <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
//                   </div>

//                   <div>
//                     <h1 className="text-3xl font-bold mb-2 text-orange-500">
//                       Create your profile
//                     </h1>
//                     <p className="text-gray-700 ">
//                       Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//                       Ut ut interdum lectus, eu semper lorem. Sed eget leo id
//                       justo venenatis venenatis. Nam placerat placerat libero.",
//                     </p>
//                   </div>
//                 </div>

//                 <div className="box-border h-[50vh] w-[40vw] aspect-video mx-20 bg-black p-4 border-4">
//                   Content goes here
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ScrollSection;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { BsFill1CircleFill , BsFill2CircleFill, BsFill3CircleFill} from "react-icons/bs";

const ScrollSection = () => {
  const sectionRef = useRef(null);
  const triggerRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    const pin = gsap.fromTo(
      sectionRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-300vw",
        ease: "none",
        duration: 1,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "center center",
          end: "3000 center",
          scrub: 0.6,
          pin: true,
        },
      }
    );

    return () => {
      pin.kill();
    };
  }, []);

  return (
    <div className="wrapper overflow-x-auto ">
      <section className="scroll-section-outer overflow-hidden ">
        <div className="max-w-full container text-black my-40">
          <div className="container gap-10 flex-col mx-32 xl:w-2/3">
            <p className="text-orange-500 text-2xl font-bold">How it Works</p>
            <p className="text-6xl font-semibold">Get Hired In 3 Simple Steps</p>
          </div>
        </div>
        <div ref={triggerRef}>
          <div
            ref={sectionRef}
            className="scroll-section-inner h-[100vh] w-[300vw] flex flex-row relative overflow-auto"
          >
            <div className="scroll-section h-[100vh] w-[100vw] flex justify-center items-center  ">
              <div className="grid grid-cols-1 md:grid-cols-2 h-full sticky">
                <div className="flex h-full items-start mr-10 mt-20 align-items-center mx-40">
                  <div className="mr-4">
                    <BsFill1CircleFill className="text-orange-500 text-4xl p-1" />
                  </div>

                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-orange-500">
                      Create your profile
                    </h1>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem.
                      Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.
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
                <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40">
                  <div className="mr-4">
                    <BsFill2CircleFill className="text-orange-500 text-4xl p-1" />
                  </div>

                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-orange-500">
                      Create your profile
                    </h1>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem.
                      Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.
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
                <div className="flex h-full items-start mr-10 mt-10 align-items-center mx-40">
                  <div className="mr-4">
                    <BsFill3CircleFill className="text-orange-500 text-4xl p-1" />
                  </div>

                  <div>
                    <h1 className="text-3xl font-bold mb-2 text-orange-500">
                      Create your profile
                    </h1>
                    <p className="text-gray-700">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut interdum lectus, eu semper lorem.
                      Sed eget leo id justo venenatis venenatis. Nam placerat placerat libero.
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
