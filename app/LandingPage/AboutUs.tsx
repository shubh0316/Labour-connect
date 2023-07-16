import React from 'react';
import Image from 'next/image';
import About from '../Resources/About.png';
import Container from './Container';

const AboutUs = () => {
  return (
    <div className="flex flex-col sm:flex-row">
      <div className="w-full sm:w-1/2 order-2 sm:order-1">
        <div className="text-black text-left text-lg sm:text-2xl font-sans mt-20 mb-10 sm:mt-0">
          <div className="text-lc-orange text-3xl font-sans mb-4 sm:mb-6">About us</div>
          <div className="text-black-500 font-semibold leading-tight text-3xl sm:text-4xl mb-4 sm:mb-10 sm:leading-loose">
            We’re Helping Companies & Job Seekers in a Better Way
          </div>
          <p className="leading-tight tracking-wide font-sans text-lg">
            Unlock extraordinary professional achievement through our personalized strategy that 
            fosters employer-employee cooperation. With dedicated support and tailored solutions,
            we redefine the employment market for long-term relationships and enhanced results.
          </p>
          <p className="leading-tight font-sans tracking-wide text-lg mt-4">
            Join us today. Our goal is to ensure you reach your highest potential, enabling you to
            maximize your success and optimize your career.
          </p>
        </div>
      </div>
      <div className="w-full sm:w-1/2 order-1 sm:order-2">
        <div className="flex items-center justify-center mb-20 hover:translate-x-5">
          <Image src={About} alt="" width={500} height={400} />
        </div>
      </div>
    </div>
  );
};

function AboutPage() {
  return (
    <Container>
      <AboutUs />
    </Container>
  );
}

export default AboutPage;
