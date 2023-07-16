"use client";
import React from "react";
import Image from "next/image";
import Macbook from "../Resources/Macbook.png";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";
import Container from "./Container";
import { motion } from "framer-motion";

function ApplicationPage() {
  return (
    <Container>
      <div className=" bg-black  rounded-2xl px-10 items-center flex flex-col-reverse   md:flex-row justify-evenly py-12">
        <div className="flex flex-col gap-4  mt-4">
          <div className="text-fms-orange text-left text-xs mt-2 text-medium lg:text-sm">
          
          </div>
          <div className="tracking-wider gap-1 mt-4 leading-tight">
            <div className="font-medium text-white    md:text-4xl lg:text-4xl text-3xl">
              Unlock Your Fleet
            </div>
            <div className="font-medium text-white  md:text-4xl lg:text-4xl text-3xl">
              Safety With us
            </div>
          </div>
          <div className="text-white leading-tight text-justify  sm:text-sm text-md  md:text-lg">
          Supercharge your fleet operations with LC&apos;s Fleet Management System (FMS). Streamline driver and vehicle management, optimize routes, and maximize productivity. Start now to unlock the power of efficient fleet management.
          </div>
          <div>
            <button>
              <Link
                href="https://fms.loadlc.com"
                className="text-lg font-medium  text-black bg-white rounded-full flex space-x-3 items-center px-8 py-2 transition-all ease-in-out duration-300 hover:-translate-y-0.5"
              >
                <motion.span whileFocus={{ width: "10%" }} viewport={{ once: true }}>Start Now</motion.span> <BsArrowRight />
              </Link>
            </button>
          </div>
        </div>
        <div className="max-w-xs md:max-w-sm">
          <Image
            src={Macbook}
            quality={100}
            className="hover:scale-110 duration-300"
            height={500}
            alt="menu"
          />
        </div>
      </div>
    </Container>
  );
}

export default ApplicationPage;