import React from "react";
import Image from "next/image";
import Link from "next/link";
import navLogo1 from "../Resources/LOBOUR CONNECT-01 (1) 1.png";
import Container from "./Container";

function Footer() {
  return (
    <div className="bg-footer">
      <Container>
        <div className="py-20  grid grid-cols-1 gap-4 justify-between rounded-2xl md:grid-cols-3">
          <div>
            <Image src={navLogo1} quality={100} height={70} alt="menu" />
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-zinc-900">Address Details</div>
            <div className="flex flex-col text-gray-900">
              <div>6415 Northwest Dr. Unit 17 & 18 </div>
              <div>Mississauga, ON L4V 1X1</div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-zinc-900">Contact Details</div>
            <div className="flex flex-col text-gray-900 justify-between gap-3">
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
      </Container>
    </div>
  );
}

export default Footer;