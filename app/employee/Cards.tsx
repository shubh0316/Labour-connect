// "use client"
// import { useState } from 'react';
// import { motion } from 'framer-motion';
// import Container from "./Container";

// import Image from "next/image";

// function CardSection() {
//   const [isOrangeHovered, setIsOrangeHovered] = useState(false);
//   const [isGraySecondHovered, setIsGraySecondHovered] = useState(false);

//   const handleSecondHover = () => {
//     setIsGraySecondHovered(true);
//   };

//   const handleSecondHoverExit = () => {
//     setIsGraySecondHovered(false);
//   };

//   const handleOrangeHover = () => {
//     setIsOrangeHovered(true);
//   };

//   const handleOrangeHoverExit = () => {
//     setIsOrangeHovered(false);
//   };

//   const imageFadeDuration = 0.5;
//   const containerShrinkDuration = 0.5;

//   const imageVariants = {
//     visible: { opacity: 1 },
//     hidden: { opacity: 0 },
//   };

//   const containerVariants = {
//     expanded: { height: isOrangeHovered ? '37rem' : '40rem' },
//     shrunk: { height: isOrangeHovered ? '35rem' : '37rem' },
//   };

//   const SecondcontainerVariants = {
//     expanded: { height: isGraySecondHovered ? '37rem' : '40rem' },
//     shrunk: { height: isGraySecondHovered ? '35rem' : '37rem' },
//   };

//   return (
//     <>
//       <div className="flex flex-col items-center justify-center md:mb-[20rem] md:flex-row">
//         <div className="flex flex-col md:w-2/3 mb-8">
//           <span className="text-lg py-4 md:mt-20 w-full font-semibold text-lc-orange whitespace-nowrap">
//             Why Choose Us
//           </span>
//           <h2 className="text-5xl font-semibold leading-loose tracking-wider text-zinc-900 whitespace-nowrap animate__animated animate__rubberBand">
//             <span className="text-xl md:text-2xl">We will help you 
// </span>
//             <br className="md:hidden" />
//             <span className="text-3xl md:text-2xl"> get the best employee</span>
//           </h2>
//           <p className="text-lg w-4/5 text-zinc-900 md:text-xl md:py-5 font-sans leading-loose tracking-wider animate__animated animate__bounceInLeft">
//           Unlock your workforce's potential with our expert assistance. Our personalized approach connects you with exceptional talent that perfectly aligns with your organization's needs. Discover the best employees who will drive your success forward. Partner with us today!

//           </p>
//         </div>

//         <div className="flex flex-col ml-0 md:ml-[-8rem]">
//           <motion.div
//             className={`bg-lc-orange w-full md:w-[140%] md:rounded-2xl h-[${isOrangeHovered ? '24rem' : '30rem'}] ${
//               isOrangeHovered ? 'translate-y-2' : ''
//             } transition-transform duration-500`}
//             onMouseEnter={handleOrangeHover}
//             onMouseLeave={handleOrangeHoverExit}
//             initial={{ scale: 0.5 }}
//             animate={isOrangeHovered ? 'shrunk' : 'expanded'}
//             transition={{ duration: 0.5 }}
//             variants={containerVariants}
//           >
//             <div className="px-6 py-6 md:px-10 md:py-10">
//               <p className="text-4xl md:text-6xl font-semibold leading-loose tracking-wider w-11/12 md:w-1/2">
//               Large Employee Database

//               </p>
//               <p
//                 className={`text-3xl mt-2 ${isOrangeHovered ? 'line-clamp-none mt-6' : 'line-clamp-3'}`}
//               >
//             Access our extensive employee database to find the right match for your open positions. We empower employers to discover highly qualified applicants who will contribute to their company's success. Streamline your hiring process and find your ideal candidate.

//               </p>
//             </div>
//             <motion.div
//               className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${
//                 isOrangeHovered ? 'translate-y-2' : 'translate-y-0'
//               }`}
//               variants={imageVariants}
//               initial="visible"
//               animate={isOrangeHovered ? 'hidden' : 'visible'}
//               transition={{ duration: imageFadeDuration }}
//             >
//               <Image
//                 src={Database}
//                 alt="hands"
//                 layout="fill"
//                 objectFit="contain"
//                 className={`${isOrangeHovered ? '-mt-10 -ml-14' : 'scale-125'} ${
//                   isOrangeHovered ? 'scale-100' : 'ml-48 -mt-8 sm-[ml-6]'
//                 }`}
//               />
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className={`bg-slate-400 w-full md:w-[140%] md:rounded-3xl h-[${isOrangeHovered ? '24rem' : '30rem'}] transition-height duration-500 relative mt-[-18rem] md:mt-[-15rem]`}
//             initial={{ scale: 0.5 }}
//             animate={isOrangeHovered ? 'shrunk' : 'expanded'}
//             variants={containerVariants}
//             transition={{ duration: containerShrinkDuration }}
//           >
//             <p className="text-4xl md:text-6xl font-semibold leading-loose tracking-wider py-6 px-6 md:py-10 md:px-10">
//            Fast Processing
//             </p>
//             <p className="px-6 text-3xl md:px-10">
//             Experience a streamlined recruiting process that prioritizes effectiveness and efficiency. Deploy top talent rapidly, avoiding disruptions and driving organizational growth. Join us for a seamless journey towards success.

//             </p>
//             {!isOrangeHovered && (
//               <motion.div
//                 variants={imageVariants}
//                 initial="visible"
//                 animate={isOrangeHovered ? 'hidden' : 'visible'}
//                 transition={{ duration: imageFadeDuration }}
//                 className={`absolute w-[14rem] h-[14rem]  top-3/4 left-3/4 transform -translate-x-1/2 -translate-y-1/2 ${
//                   isOrangeHovered ? 'scale-100' : ''
//                 }`}
//               >
//                 <Image src={Sand} alt="" layout="fill" objectFit="contain" />
//               </motion.div>
//             )}
//           </motion.div>
//         </div>

//         <div className="flex flex-col md:pr-10 md:mt-0">
//           <motion.div
//             className={`bg-slate-400 w-full md:w-[140%] md:rounded-2xl h-[${isGraySecondHovered ? '24rem' : '30rem'}] ${
//               isGraySecondHovered ? 'translate-y-2' : ''
//             } transition-height duration-500 relative`}
//             onMouseEnter={handleSecondHover}
//             onMouseLeave={handleSecondHoverExit}
//             initial={{ scale: 0.5 }}
//             animate={isGraySecondHovered ? 'shrunk' : 'expanded'}
//             transition={{ duration: 0.5 }}
//             variants={SecondcontainerVariants}
//           >
//             <div className="px-6 py-6 md:px-10 md:py-10">
//               <p className="text-3xl md:text-6xl font-semibold leading-loose tracking-wider">Transparent Process</p>
//               <p
//                 className={`text-3xl ${isGraySecondHovered ? 'line-clamp-none mt-4' : 'line-clamp-3 mt-2'}`}
//               >
//               Experience transparency throughout our recruiting process. Thorough screening and open communication build confidence and trust. Make sound judgments with confidence. Join us for a hiring journey you can rely on.

//               </p>
//             </div>
//             <motion.div
//               className={`w-[25rem] h-[15rem] transition-opacity duration-500 transform ${
//                 isGraySecondHovered ? 'translate-y-1' : 'translate-y-0'
//               }`}
//               variants={imageVariants}
//               initial="visible"
//               animate={isGraySecondHovered ? 'hidden' : 'visible'}
//               transition={{ duration: imageFadeDuration }}
//             >
//               <Image
//                 src={System}
//                 alt="girl"
//                 layout="fill"
//                 objectFit="contain"
//                 className={`${isGraySecondHovered ? '-mt-20 -ml-15' : ' scale-125 ml-[16rem] mt-16 mb-10'}`}
//               />
//             </motion.div>
//           </motion.div>

//           <motion.div
//             className={`bg-lc-orange w-full md:w-[140%] md:rounded-3xl h-[${isGraySecondHovered ? '24rem' : '30rem'}] transition-height duration-500 relative mt-[-16rem] md:mt-[-14rem]`}
//             initial={{ scale: 0.5 }}
//             animate={isGraySecondHovered ? 'shrunk' : 'expanded'}
//             variants={containerVariants}
//             transition={{ duration: containerShrinkDuration }}
//           >
//             <p className="text-4xl md:text-6xl  py-6 px-6 md:py-10 md:px-10 font-semibold leading-loose tracking-wider">
//             24X7 Support
//             </p>
//             <p className="px-6 text-3xl md:px-10 md:z-10">
//             Enjoy round-the-clock support. Our dedicated team is here for you 24/7, ensuring your needs are met anytime, anywhere. Experience peace of mind with our unwavering commitment to your success.

//             </p>
//             {!isGraySecondHovered && (
//               <motion.div
//                 variants={imageVariants}
//                 initial="visible"
//                 animate={isGraySecondHovered ? 'hidden' : 'visible'}
//                 transition={{ duration: imageFadeDuration }}
//                 className={`absolute w-[17rem] h-[17rem] top-[70%] left-3/4 transform -translate-x-1/2 -translate-y-1/2 ${
//                   isOrangeHovered ? 'scale-100' : ''
//                 }`}
//               >
//                 <Image src={Music} alt="" layout="fill" objectFit="contain" className='h-40 w-40' />
//               </motion.div>
//             )}
//           </motion.div>
//         </div>
//       </div>
//     </>
//   );
// }

// function CardsProper() {
//   return (
//     <Container>
//       <CardSection />
//     </Container>
//   );
// }

// export default CardsProper;

"use client"
import { useState } from 'react';
import { motion } from 'framer-motion';
import Container from "./Container";
 import System from "../Resources/34164103_qualitycontrolone10 1.png";
 import Database from "../Resources/35571886_fp1222_database 1.png";
 import Music from "../Resources/wepik-export-20230707072015iDJ1 1.png";
 import Sand from "../Resources/wepik-export-20230707071614tutv 1.png";
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
      <div className="flex flex-col items-center justify-center  md:flex-row">
        <div className="flex flex-col md:w-2/3 md:mt-[-40rem]">
          <span className="text-lg py-4 md:mt-40 w-full font-semibold text-lc-orange whitespace-nowrap">
            Why Choose Us
          </span>
          <h2 className="text-5xl font-semibold leading-loose tracking-wider text-zinc-900 whitespace-nowrap animate__animated animate__rubberBand">
            <span className="text-xl md:text-2xl">We Will Help You Get</span>
            <br className="md:hidden" />
            <span className="text-3xl md:text-2xl">The Best Employee</span>
          </h2>
          <p className="text-lg w-4/5 text-zinc-900 md:text-xl md:py-5 font-sans leading-loose tracking-wider animate__animated animate__bounceInLeft">
          Unlock your workforce&apos;s potential with our expert assistance. Our personalized 
          approach connects you with exceptional talent that perfectly aligns with your 
          organization&apos;s needs. Discover the best employees who will drive your success forward. 
          Partner with us today!
          </p>
        </div>

        <div className="flex flex-col  ml-[-5rem] md:mt-[-8rem] md:ml-[-8rem]">
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
              <p className="text-4xl md:text-6xl font-semibold leading-loose tracking-wider w-11/12 md:w-1/2">
                Large Employee Database
              </p>
              <p
                className={`text-3xl mt-2 ${isOrangeHovered ? 'line-clamp-none mt-6' : 'line-clamp-3'}`}
              >
     Access our extensive employee database to find the right match for your open 
     positions. We empower employers to discover highly qualified applicants who will 
     contribute to their company&apos;s success. Streamline your hiring process and find your 
     ideal candidate.
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
                src={Database}
                alt="hands"
                layout="fill"
                objectFit="contain"
                className={`${isOrangeHovered ? '-mt-10 -ml-14' : 'scale-125'} ${
                  isOrangeHovered ? 'scale-100' : 'ml-50 -mt-8 sm-[ml-6]'
                }`}
              />
            </motion.div>
          </motion.div>

          <motion.div
            className={`bg-slate-400 w-full md:w-[140%] md:rounded-3xl h-[${isOrangeHovered ? '24rem' : '30rem'}] transition-height duration-500 relative mt-[-10rem] md:mt-[-15rem]`}
            initial={{ scale: 0.5 }}
            animate={isOrangeHovered ? 'shrunk' : 'expanded'}
            variants={containerVariants}
            transition={{ duration: containerShrinkDuration }}
          >
            <p className="text-4xl md:text-6xl font-semibold leading-loose tracking-wider py-6 px-6 md:py-10 md:px-10">
              Fast Processing
            </p>
            <p className="px-6 text-3xl md:px-10">
            Experience a streamlined recruiting process that prioritizes effectiveness and efficiency. Deploy top talent rapidly, avoiding disruptions and driving organizational growth. Join us for a seamless journey towards success.
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

        <div className="flex flex-col md:pr-10 md:mt-0 ml-[-5rem] md:ml-[-6rem]">
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
              <p className="text-3xl md:text-6xl font-semibold leading-loose tracking-wider">Transparent Process</p>
              <p
                className={`text-3xl ${isGraySecondHovered ? 'line-clamp-none mt-4' : 'line-clamp-3 mt-2'}`}
              >
                Experience transparency throughout our recruiting process. Thorough screening and open communication build confidence and trust. Make sound judgments with confidence. Join us for a hiring journey you can rely on.
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
                src={System}
                alt="girl"
                layout="fill"
                objectFit="contain"
                className={`${isGraySecondHovered ? '-mt-20 -ml-15' : ' scale-125 ml-[8rem] mt-16 mb-10'}`}
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
            <p className="text-4xl md:text-6xl  py-6 px-6 md:py-10 md:px-10 font-semibold leading-loose tracking-wider">
              24 x 7 Support
            </p>
            <p className="px-6 text-3xl md:px-10 md:z-10">
            Enjoy round-the-clock support. Our dedicated team is here for you 24/7, ensuring your needs are met anytime, anywhere. Experience peace of mind with our unwavering commitment to your success
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
                <Image src={Music} alt="" layout="fill" objectFit="contain" className='h-40 w-40' />
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
