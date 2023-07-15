// import React from 'react';
// import Image from 'next/image';
// import navLogo from '../Resources/nav-logo.png';

// const Fotter = () => {
//   return (
//     <div className='max-w-full bg-zinc-100 p-20'>
       
//         <Image 
//          src={navLogo} alt={" "} />
//           <div className='flex flex-col w-3/5 text-black text-6xl font-sans mt-15'>Ignite Your Workforce with Exceptional Staffing Solutions for Success.</div>
//           <div className='flex flex-col  w-5/6 mt-5 text-black items-right'>
//           <div className='flex flex-col gap-4'>
//           <p className='text-2xl font-bold  '>Contact Us</p>
//           <p className='text-xl font-normal '>(888) 123 1234</p>
//           <p className='text-xl font-normal '>info@loadlc.com</p>
//           <p className='flex flex-col w-1/2  text-xl font-normal my-2'>dfdsfsd sdsafasf asdfsafs asdsf asd</p>
//           <p className='text-xl font-normal '>Canada</p>
//         </div>        
//       </div>
//     </div>
//   );
// };

// export default Fotter;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo from '../Resources/nav-logo.png';

function Fotter() {
  return (
    <div className="bg-footer">
      
        <div className="py-20 px-20 grid grid-cols-1 gap-16 justify-between rounded-2xl md:grid-cols-3">
          <div>
            <Image src={navLogo} quality={100} height={90} alt="menu" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold">Address Details</div>
            <div className="flex flex-col text-2xl text-gray-900">
              <div>6415 Northwest Dr. Unit 17 & 18 </div>
              <div>Mississauga, ON L4V 1X1</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold">Contact Details</div>
            <div className="flex flex-col text-2xl text-gray-900 justify-between gap-3">
              <div>(888)956-2356</div>
              <div>
                <a href="mailto:info@loadlc.com" className="hover:underline">
                  info@loadlc.com
                </a>
              </div>
              <div>
                <a
                  href="https://www.loadlc.com"
                  target="_blank"
                  rel="noopener"
                  className="hover:underline"
                >
                  https://www.loadlc.com
                </a>
              </div>
            </div>
          </div>
        </div>
      
    </div>
  );
}

export default Fotter;