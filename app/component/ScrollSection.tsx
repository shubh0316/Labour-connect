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

      pin.kill();
    };
  }, []);

  return (
    <section className="scroll-section-outer overflow-hidden h-1/6">
       <div className="max-w-full h-3 container text-black my-12">
         
          <div className="container flex-col mx-32  xl:w-2/3">
      <p className="text-orange-500 text-2xl font-bold">How it Works</p>
      <p className="font-semibold text-base sm:text-5xl md:text-6xl mt-5">
        Get Hired In 3 Simple Steps
      </p>
    </div>

      </div>
      <div ref={triggerRef}>
        <div ref={sectionRef} className="scroll-section-inner h-screen md:h-[100vh] w-[300vw] flex flex-row relative overflow-auto -mr-6">
          <div className="scroll-section h-60 mt-52 w-screen md:w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              <div className="flex mx-8 md:mx-40 mt-20 md:mt-40">
                <BsFill1CircleFill className="text-orange-500 p-1 h-20 w-20 md:text-4xl -my-5" />
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 mx-3">
                  Create Your Profile
                  <div className="w-45 border-black overflow-x-clip">
                    <p className="text-black font-medium text-base mt-2 leading-loose"> 
                      Unlock job opportunities by creating a profile. Showcase your qualifications, experience, 
                      and interests to stand out in the job market. Start applying today and let your profile 
                      speak for itself.
                    </p>
                  </div>
                </h1>
              </div>
              <div className="box-border h-64 md:h-96 w-64 md:w-96 bg-black mx-8 md:mx-60 mt-10 md:mt-20">
              </div>
            </div>
          </div>
          <div className="scroll-section h-60 mt-52 w-screen md:w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex mx-8 md:mx-40 mt-20 md:mt-40">
                <BsFill2CircleFill className="text-orange-500 p-1 h-20 w-20 md:text-4xl -my-5" />
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 mx-3">
                  Apply For Jobs
                  <p className="text-black font-medium text-base mt-2 leading-loose"> 
                    Discover and apply for your ideal job. Our platform connects with opportunities that 
                    perfectly match your qualifications and aspirations. Take the first step towards your 
                    dream career today.
                  </p>
                </h1>
              </div>
              <div className="box-border h-64 md:h-96 w-64 md:w-96 bg-black mx-8 md:mx-60 mt-10 md:mt-20">
              </div>
            </div>
          </div>
          <div className="scroll-section h-60 mt-52 w-screen md:w-full flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex mx-8 md:mx-40 mt-20 md:mt-40">
                <BsFill3CircleFill className="text-orange-500 p-1 h-20 w-20 md:h-24 md:w-24 md:text-4xl -my-7" />
                <h1 className="text-2xl md:text-3xl font-bold mb-2 text-orange-500 mx-3">
                  Complete The Interview Process And Get Hired
                  <p className="text-black font-medium text-base mt-2 leading-loose"> 
                    Seize the opportunity to showcase your skills, abilities, and achievements during 
                    interviews with renowned companies. Start a rewarding career journey by 
                    demonstrating your true value and securing a successful job.
                  </p>
                </h1>
              </div>
              <div className="box-border h-64 md:h-96 w-64 md:w-96 bg-black mx-8 md:mx-60 mt-10 md:mt-20">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ScrollSection;

