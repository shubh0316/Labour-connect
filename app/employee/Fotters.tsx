
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