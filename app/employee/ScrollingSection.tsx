"use client";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Container from "./Container";
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
                  <BsFill1CircleFill className="text-orange-500 p-1 h-24 w-24 text-4xl -my-7" />
                  <h1 className="text-3xl font-bold mb-2 text-orange-500  mx-3">
                     Create Your Profile
                     <div className="w-45 border-black overflow-x-clip">
                     <p className="text-black font-medium text-base mt-2 leading-loose"> 
                     Build your job-seeking profile and showcase your skills and experience. Unleash your
                     potential and open doors to exciting opportunites. Get noticed by employers and 
                     embark on your success journey. Start today

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
                  <BsFill2CircleFill className="text-orange-500 p-1 h-28 w-28 text-4xl -my-9" />
                  <h1 className="text-3xl font-bold mb-2 text-orange-500  mx-3">
                   Create Your Job Posts
                     <p className="text-black font-medium text-base mt-2 leading-loose"> 
                    Kickstart your hiring process with a compelling company profile. Highlight your mission,
                    values, and strategic goals to attract top talent who align with your vision. Find the most
                    suitable candidate who propels your success forward. Get started now!
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
                    Wait For Us To Select The Best Candidates For You To Hire
                     <p className="text-black font-medium text-base mt-2 leading-loose"> 
                     Discover the top talent through our rigorous candidate review process. We carefully
                     screen profiles to present you with the most qualifies candidates, accelerating your
                     hiring success and propelling your business forward.
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
function WrapScroll(){
  return (
    <Container>
      <ScrollSection />
    </Container>
  )
}

export default WrapScroll;