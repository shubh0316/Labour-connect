"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from "./Container";
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

  const imageFadeDuration = 0.5;
  const containerShrinkDuration = 0.5;

  const imageVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const containerVariants = {
    expanded: { height: isOrangeHovered ? '37rem' : '40rem' },
    shrunk: { height: isOrangeHovered ? '35rem' : '37rem' },
  };

  const SecondcontainerVariants = {
    expanded: { height: isGraySecondHovered ? '37rem' : '40rem' },
    shrunk: { height: isGraySecondHovered ? '35rem' : '37rem' },
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center md:mb-[20rem] md:flex-row">
        <div className="flex flex-col md:w-2/3 mb-8">
          <span className="text-lg py-4 md:mt-20 w-full text-lc-orange whitespace-nowrap">
            Why Choose Our Dynamic Service
          </span>
          <h2 className="text-5xl font-bold text-zinc-900 whitespace-nowrap animate__animated animate__rubberBand">
            <span className="text-xl md:text-2xl">Unlock Your Staffing</span>
            <br className="md:hidden" />
            <span className="text-3xl md:text-2xl"> Success With Us</span>
          </h2>
          <p className="text-lg w-4/5 text-zinc-900 md:text-xl md:py-5 font-sans leading-loose tracking-wider animate__animated animate__bounceInLeft">
            Boost your staffing success with our dynamic services. With us, you&apos;ll harness personalized solutions
            and expert support. Maximize your potential and achieve extraordinary results. Join us today and revolutionize
            your staffing approach.
          </p>
        </div>

        <div className="flex flex-col ml-0 md:ml-[-8rem]">
          <motion.div
            className={`bg-lc-orange w-full md:w-[140%] md:rounded-2xl h-[${isOrangeHovered ? '24rem' : '30rem'}] ${
              isOrangeHovered ? 'translate-y-2' : ''
            } transition-transform duration-500`}
            onMouseEnter={handleOrangeHover}
            onMouseLeave={handleOrangeHoverExit}
            initial={{ scale: 0.5 }}
            animate={isOrangeHovered ? 'shrunk' : 'expanded'}
            transition={{ duration: 0.5 }}
            variants={containerVariants}
          >
            <div className="px-6 py-6 md:px-10 md:py-10">
              <p className="text-4xl md:text-6xl font-bold w-11/12 md:w-1/2">
                Expertise In The Industry
              </p>
              <p
                className={`text-3xl mt-2 ${isOrangeHovered ? 'line-clamp-none mt-6' : 'line-clamp-3'}`}
              >
                Discover a hub of expertise in the industry, where employers find exceptional talent and employees
                uncover their dream opportunities. Join us and unlock the most ideal match for extraordinary success.
              </p>
            </div>
            <motion.div
              className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${
                isOrangeHovered ? 'translate-y-2' : 'translate-y-0'
              }`}
              variants={imageVariants}
              initial="visible"
              animate={isOrangeHovered ? 'hidden' : 'visible'}
              transition={{ duration: imageFadeDuration }}
            >
              <Image
                src={Hands}
                alt="hands"
                layout="fill"
                objectFit="contain"
                className={`${isOrangeHovered ? '-mt-10 -ml-14' : 'scale-125'} ${
                  isOrangeHovered ? 'scale-100' : 'ml-48 -mt-8'
                }`}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className={`bg-slate-400 w-full md:w-[140%] md:rounded-3xl h-[${isOrangeHovered ? '24rem' : '30rem'}] transition-height duration-500 relative mt-[-18rem] md:mt-[-15rem]`}
            initial={{ scale: 0.5 }}
            animate={isOrangeHovered ? 'shrunk' : 'expanded'}
            variants={containerVariants}
            transition={{ duration: containerShrinkDuration }}
          >
            <p className="text-4xl md:text-6xl font-bold py-6 px-6 md:py-10 md:px-10">
              Extensive Talent Network
            </p>
            <p className="px-6 text-3xl md:px-10">
            Unleash the potential of our robust candidate network. We provide your organization with highly qualified professionals who make a significant impact on your organization through our comprehensive screening process.

            </p>
            {!isOrangeHovered && (
              <motion.div
                variants={imageVariants}
                initial="visible"
                animate={isOrangeHovered ? 'hidden' : 'visible'}
                transition={{ duration: imageFadeDuration }}
                className={`absolute w-[14rem] h-[14rem]  top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 ${
                  isOrangeHovered ? 'scale-100' : ''
                }`}
              >
                <Image src={Sand} alt="" layout="fill" objectFit="contain" />
              </motion.div>
            )}
          </motion.div>
        </div>

        <div className="flex flex-col md:pr-10 md:mt-0">
          <motion.div
            className={`bg-slate-400 w-full md:w-[140%] md:rounded-2xl h-[${isGraySecondHovered ? '24rem' : '30rem'}] ${
              isGraySecondHovered ? 'translate-y-2' : ''
            } transition-height duration-500 relative`}
            onMouseEnter={handleSecondHover}
            onMouseLeave={handleSecondHoverExit}
            initial={{ scale: 0.5 }}
            animate={isGraySecondHovered ? 'shrunk' : 'expanded'}
            transition={{ duration: 0.5 }}
            variants={SecondcontainerVariants}
          >
            <div className="px-6 py-6 md:px-10 md:py-10">
              <p className="text-3xl md:text-6xl font-bold">Simple To Use</p>
              <p
                className={`text-3xl ${isGraySecondHovered ? 'line-clamp-none mt-4' : 'line-clamp-3 mt-2'}`}
              >
                Experience the power of personalization. Unlike traditional staffing agencies, we tailor our approach to your unique needs, organizational culture, and long-term goals. Discover a partnership that truly understands and delivers results.

              </p>
            </div>
            <motion.div
              className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${
                isGraySecondHovered ? 'translate-y-1' : 'translate-y-0'
              }`}
              variants={imageVariants}
              initial="visible"
              animate={isGraySecondHovered ? 'hidden' : 'visible'}
              transition={{ duration: imageFadeDuration }}
            >
              <Image
                src={Girl}
                alt="girl"
                layout="fill"
                objectFit="contain"
                className={`${isGraySecondHovered ? '-mt-20 -ml-15' : ' scale-125 ml-[16rem] mt-16 mb-10'}`}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className={`bg-lc-orange w-full md:w-[140%] md:rounded-3xl h-[${isGraySecondHovered ? '24rem' : '30rem'}] transition-height duration-500 relative mt-[-16rem] md:mt-[-14rem]`}
            initial={{ scale: 0.5 }}
            animate={isGraySecondHovered ? 'shrunk' : 'expanded'}
            variants={containerVariants}
            transition={{ duration: containerShrinkDuration }}
          >
            <p className="text-4xl md:text-6xl font-bold py-6 px-6 md:py-10 md:px-10">
              Large Variety Of Jobs
            </p>
            <p className="px-6 text-3xl md:px-10 md:z-10">
            Discover a wide range of job opportunities. Our platform offers diverse roles, empowering you to discover the appropriate fit and unlock your career potential. 

            </p>
            {!isGraySecondHovered && (
              <motion.div
                variants={imageVariants}
                initial="visible"
                animate={isGraySecondHovered ? 'hidden' : 'visible'}
                transition={{ duration: imageFadeDuration }}
                className={`absolute w-[17rem] h-[17rem] top-[70%] left-3/4 transform -translate-x-1/2 -translate-y-1/2 ${
                  isOrangeHovered ? 'scale-100' : ''
                }`}
              >
                <Image src={Bag} alt="" layout="fill" objectFit="contain" className='h-40 w-40' />
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </>
  );
}

function CardsProper() {
  return (
    <Container>
      <CardSection />
    </Container>
  );
}

export default CardsProper;
