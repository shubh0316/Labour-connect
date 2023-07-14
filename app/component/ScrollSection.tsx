"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"
import { BsFill1CircleFill , BsFill2CircleFill, BsFill3CircleFill} from "react-icons/bs";

function ScrollSection() {
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
          start: "top top",
          end: "2000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      {/* A return function for killing the animation on component unmount */ }
      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden h-3/6">
       <div className="max-w-full container text-black my-40">
          <div className="container gap-10 flex-col mx-32  mt-52  xl:w-2/3">
            <p className="text-orange-500 text-2xl font-bold">How it Works</p>
           <p className="text-6xl font-semibold">Get Hired In 3 Simple Steps</p>
          </div>
      </div>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner h-[100vh] w-[300vw] flex flex-row relative overflow-auto ">
          <div className="scroll-section h-full w-[100vw] flex justify-center items-center ">
           
            <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=" flex mx-40 mt-40 ">
                  <BsFill1CircleFill className="text-orange-500 p-1 h-20 w-20 text-4xl -my-5" />
                  <h1 className="text-3xl font-bold mb-2 text-orange-500  mx-3">
                     Create your profile
                     <div className="w-45 border-black overflow-x-clip">
                     <p className="text-black font-medium text-base mt-2 leading-loose"> 
                     Unlock job opportunites by creating profile.Showcase your qualifications,experience,
                     and interests to stand out in the job market. Start applying today and let your profile 
                     speak for itself
                    </p></div>
              </h1>
            </div>
            <div className="box-border h-96 w-96 bg-black mx-60 mt-20">
             
            </div>

             
            </div>
          </div>
          <div className="scroll-section h-full w-[100vw] flex justify-center items-center ">

          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=" flex mx-40 mt-40">
                  <BsFill2CircleFill className="text-orange-500 p-1 h-20 w-20 text-4xl -my-5" />
                  <h1 className="text-3xl font-bold mb-2 text-orange-500  mx-3 ">
                    Apply for Jobs
                     <p className="text-black font-medium text-base mt-2 leading-loose"> 
                     Discover and apply for your ideal job. Our platform connects with opportunites that 
                     perfectly mtch your qualification and aspirants. Take the first step towards your 
                     deam career today.
                    </p>
              </h1>
            </div>
            <div className="box-border h-96 w-96 bg-black mx-60 mt-20">
             
            </div>

             
            </div>
          </div>
          <div className="scroll-section h-full w-[100vw] flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            <div className=" flex mx-40 mt-40">
                  <BsFill3CircleFill className="text-orange-500 p-1 h-24 w-24 text-4xl -my-7" />
                  <h1 className="text-3xl font-bold mb-2 text-orange-500  mx-3">
                    Complete the interview process and get hired
                     <p className="text-black font-medium text-base mt-2 leading-loose"> 
                     Seize the opportunity to showcase your skills,abilities, and achievements during 
                      interviews with renowned companies. Start a rewarding career joruney by 
                      demonstrating your true value and securing a successful job.
                    </p>
              </h1>
            </div>
            <div className="box-border h-96 w-96 bg-black mx-60 mt-20">
             
            </div>
            </div>
          </div>
          
        </div>
      </div>
   
    </section>
  );
}

export default ScrollSection;