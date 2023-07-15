"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Hands from "../Resources/wepik-export-20230707094010tWv1 1 (1).png";
import Girl from "../Resources/33417740_7946688 1.png";
import Bag from "../Resources/8640018 1.png";
import Sand from "../Resources/13677899_5143070 1.png";
import Image from "next/image";

function CardSection() {
  const [isOrangeHovered, setIsOrangeHovered] = useState(false);
  const [isGraySecondHovered, setIsGraySecondHovered] = useState(false);

  const handleSecondHover = () => {
    setIsGraySecondHovered(true);
  };

  const handleSecondHoverExit = () => {
    setIsGraySecondHovered(false);
  };

  const handleOrangeHover = () => {
    setIsOrangeHovered(true);
  };

  const handleOrangeHoverExit = () => {
    setIsOrangeHovered(false);
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="flex flex-col space-y-6 md:flex-row md:px-0">
          <div className="flex flex-col space-y-3 md:w-2/3">
            <span className="text-xl mt-20 py-4 px-6 md:mt-80 md:py-10 md:px-10 w-full text-orange-500 whitespace-nowrap animate-bounce">
              Why Choose Our Dynamic Service
            </span>
            <h2 className="text-5xl font-bold text-zinc-900 px-6 md:px-10 whitespace-nowrap animate__animated animate__rubberBand">
              <span className="text-xl md:text-2xl">Unlock Your Staffing</span>
              <br className="md:hidden" /> 
              <span className="text-3xl md:text-4xl"> Success With Us</span>
            </h2>
            <p className="text-xl text-zinc-900  px-6 py-4 md:px-10 md:py-5 leading-loose animate__animated animate__bounceInLeft">
              Boost your staffing success with our dynamic services. With us, you'll harness 
              personalized solutions and expert support. Maximize your potential and achieve
              extraordinary results. Join us today and revolutionize your staffing approach.
            </p>
          </div>
          <div className="flex flex-col justify-center items-center space-y-10 md:py-40 md:pr-10">
            <motion.div
              className={`bg-orange-600 w-full md:w-[80%] md:rounded-2xl h-[${isOrangeHovered ? '24rem' : '27rem'}] ${isOrangeHovered ? 'translate-y-2' : ''} transition-transform duration-500`}
              onMouseEnter={handleOrangeHover}
              onMouseLeave={handleOrangeHoverExit}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <div className="px-6 py-6 md:px-10 md:py-10">
                <p className="text-3xl md:text-4xl font-bold w-11/12 md:w-1/2">
                  Expertise In The Industry
                </p>
                <p className={`text-xl mt-2 ${isOrangeHovered ? 'line-clamp-none mt-6' : 'line-clamp-3'}`}>
                  Discover a hub of expertise in the industry, where employers find exceptional talent and 
                  employees uncover their dream opportunities. Join us and unlock the most ideal match
                  for extraordinary success.
                </p>
              </div>
              <div className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${isOrangeHovered ? 'translate-y-2' : 'translate-y-0'}`}>
                <Image
                  src={Hands}
                  alt="hands"
                  layout="fill"
                  objectFit="contain"
                  className={`${isOrangeHovered ? '-mt-12 -ml-11' : 'mb-0'} ${isOrangeHovered ? 'scale-100' : ' -ml-4 mb-40'}`}
                />
              </div>
            </motion.div>
            <motion.div
              className={`bg-slate-200 w-full md:w-[80%] md:rounded-3xl h-[${isOrangeHovered ? '24rem' : '30rem'}] transition-height duration-500 relative`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <p className="text-3xl md:text-4xl font-bold py-6 px-6 md:py-10 md:px-10">
                Extensive Talent Network
              </p>
              <p className="px-6 text-xl md:px-10">
                Unleash the potential of our robust candidate network. We provide your organization
                with highly qualified professionals who make a difference.
              </p>
              {!isOrangeHovered && (
                <div className={`absolute w-[13rem] h-[13rem] top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 h- ${isOrangeHovered ? '24rem':'30rem'}`}>
                  <Image src={Sand} alt="" layout="fill" objectFit="contain" />
                </div>
              )}
            </motion.div>
          </div>
          <div className="flex flex-col space-y-6 md:py-40">
            <motion.div
              className={`bg-slate-200 w-full md:w-[70%] rounded-3xl h-[${isGraySecondHovered ? '24rem' : '27rem'}] transition-height duration-500 relative`}
              onMouseEnter={handleSecondHover}
              onMouseLeave={handleSecondHoverExit}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
            >
              <div className="px-6 py-6 md:px-10 md:py-10">
                <p className="text-3xl md:text-4xl font-bold">Simple To Use</p>
                <p className={`text-xl ${isGraySecondHovered ? 'line-clamp-none mt-4' : 'line-clamp-3 mt-2'}`}>
                  Streamline and enhance recruitment with our simplified
                  approach. Leverage our expertise and cutting-edge technologies
                  to identify highly qualified candidates, expediting the process
                  for employers and job seekers alike.
                </p>
              </div>
              <div className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${isGraySecondHovered ? 'translate-y-1' : 'translate-y-0'}`}>
                <Image
                  src={Girl}
                  alt="girl"
                  layout="fill"
                  objectFit="contain"
                  className={`${isGraySecondHovered ? '-mt-20 -ml-15' : 'mb-10'}`}
                />
              </div>
            </motion.div>
            <motion.div
              className={`bg-orange-600 w-full md:w-[70%] rounded-3xl h-[${isGraySecondHovered ? '24rem' : '30rem'}] transition-height duration-500 relative`}
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
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
                <div className={`absolute w-[13rem] h-[13rem] top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 h- ${isOrangeHovered ? '24rem':'30rem'}`}>
                  <Image src={Bag} alt="" layout="fill" objectFit="contain" />
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardSection;
