
import React from "react";
import "animate.css";
import Container from "./Container";

function Service() {
  return (
    <Container>
      <div className="bg-zinc-900 w-full min-h-screen pb-40">
        <div className="flex flex-col justify-center items-center py-10 mb-40 sm:py-10 lg:py-20 space-y-10 sm:space-y-20">
          <h1 className="text-xl sm:text-2xl lg:text-3xl">Our Services</h1>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl text-center">
            We Provide Multiple Types Of Hiring Services
          </h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-4 animate__animated animate__fadeInTopLeft">
          <div className="bg-white  ml-10 rounded-3xl transition ease-in-out delay-150 hover:scale-110 duration-300 py-6">
            <div className="flex justify-center flex-col text-lc-orange items-center">
              <h1 className="text-xl text-opacity-20 font-bold  pb-6">
              Temporary Workforce
              </h1>
              <div className="flex flex-col items-center">
                <h2 className="text-md text-zinc-900  leading-7 px-6">
                From urgent replacements to long-term staffing needs, our flexible solutions are the 
                 cornerstone of our business. Count on us for adaptable and reliable staffing solutions
                 that meet your requirements efficiently.
                </h2>
                <button className="flex items-center justify-between bg-lc-orange hover:ease-in-out text-white font-semibold text-lg py-2 px-6 rounded-full animate__animated animate__fadeInUp mt-4">
                  <span>Recruit Now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl transition ease-in-out delay-150 hover:scale-110 duration-300 py-6">
            <div className="flex justify-center flex-col text-lc-orange items-center">
              <h1 className="text-xl text-opacity-20 font-bold pb-6">
              Temporary To-Hire
              </h1>
              <div className="flex flex-col items-center">
                <h2 className="text-md text-zinc-900 tracking-wide leading-7 px-6">
                  For those needs ranging from same-day emergency replacements to long-term contingent staff, this solution is our most flexible and the cornerstone of our business.
                </h2>
                <button className="flex items-center justify-between bg-lc-orange hover:ease-in-out text-white font-semibold text-lg py-2 px-6 rounded-full animate__animated animate__fadeInUp mt-4">
                  <span>Recruit Now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl mr-10 transition ease-in-out delay-150 hover:scale-110 duration-300 py-6">
            <div className="flex justify-center  flex-col text-lc-orange items-center">
              <h1 className="text-xl text-opacity-20 font-bold pb-6">
              Direct-Hire-Placement
              </h1>
              <div className="flex flex-col items-center">
                <h2 className="text-md text-zinc-900 tracking-wide leading-7 px-6">
                Supercharge your full-time hiring process with LC as your Recruitment Process 
                 Outsourcing(RPO) partner. Experience accelerated results and seamless permanent
                 staff integration. Trust us to feel your success.
                </h2>
                <button className="flex items-center justify-between bg-lc-orange hover:ease-in-out text-white font-semibold text-lg py-2 px-6 rounded-full animate__animated animate__fadeInUp mt-4">
                  <span>Recruit Now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white ml-10 rounded-3xl transition ease-in-out delay-150 hover:scale-110 duration-300 py-6">
            <div className="flex justify-center flex-col text-lc-orange items-center">
              <h1 className="text-xl text-opacity-20 font-bold pb-6">
              Workforce LC
              </h1>
              <div className="flex flex-col items-center">
                <h2 className="text-md text-zinc-900 tracking-wide leading-7 px-6">
                Access our elite team of administrative support professionals, available for on-site or 
                 remote work. They undergo rigorous screening and assessment, ensuring top-notch 
                quality and exceptional support for your business. Elevate your operations with 
                 confidence
                </h2>
                <button className="flex items-center justify-between bg-lc-orange hover:ease-in-out text-white font-semibold text-lg py-2 px-6 rounded-full animate__animated animate__fadeInUp mt-4">
                  <span>Recruit Now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-3xl transition ease-in-out delay-150 hover:scale-110 duration-300 py-6">
            <div className="flex justify-center flex-col text-lc-orange items-center">
              <h1 className="text-xl text-opacity-20 font-bold pb-6">
              Payroll Processing Solution
              </h1>
              <div className="flex flex-col items-center">
                <h2 className="text-md text-zinc-900 tracking-wide leading-7 px-6">
                Simplify payroll processing with our support services. Automate distribution of pay slips 
                and maintain compliant data records effortlessly. Focus on growth while we handle the 
                rest efficiently and accurately.
                </h2>
                <button className="flex items-center justify-between bg-lc-orange hover:ease-in-out text-white font-semibold text-lg py-2 px-6 rounded-full animate__animated animate__fadeInUp mt-4">
                  <span>Recruit Now</span>
                </button>
              </div>
            </div>
          </div>
          <div className="bg-white mr-10 rounded-3xl transition ease-in-out delay-150 hover:scale-110 duration-300 py-6">
            <div className="flex justify-center flex-col text-lc-orange items-center">
              <h1 className="text-xl text-opacity-20 font-bold pb-6">
              Permanent Workforce
              </h1>
              <div className="flex flex-col items-center">
                <h2 className="text-md text-zinc-900 tracking-wide leading-7 px-6">
                Experience the power of our hybrid solution,combining temporary staffing and RPO.
                 We handle candidate search, hiring, and deployment as dedicated LC employees,
                 seamlessely integrating them into your workforce for optimal results.
                </h2>
                <button className="flex items-center justify-between bg-lc-orange hover:ease-in-out text-white font-semibold text-lg py-2 px-6 rounded-full animate__animated animate__fadeInUp mt-4">
                  <span>Recruit Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Service;
