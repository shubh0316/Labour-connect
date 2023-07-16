"use client";

import React, { useState } from "react";
import navLogo1 from "../Resources/LOBOUR CONNECT-01 (1) 1.png";
import Image from "next/image";
import menuImg from "../Resources/menu.svg";
import Link from "next/link";
import Container from "./Container";

const navlinks = [
  { title: "Features", destination: "#" },
  { title: "Resources", destination: "#" },
  { title: "Pricing", destination: "#" },
 
];

function MobileNavExtended() {
  return (
    <div className="flex flex-col text-center items-center justify-evenly text-black bg-white gap-8 py-8 drop-shadow-2xl rounded-b-2xl">
      <ul className="flex flex-col gap-8">
        {navlinks.map((link) => (
          <li key={link.title}>
            <Link
              className="tracking-wide leading-tight"
              href={link.destination}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="space-x-10">
      <LoginButton />
      <SignButton />
      </div>
    </div>
  );
}

export function MobileNav() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="flex py-4 items-baseline relative sm:hidden">
        <div className="text-black absolute left-2 xm:left-4 top-5">
          <Image onClick={() => setOpen((o) => !o)} src={menuImg} alt="menu" />
        </div>
        <figure className="mx-auto">
          <Image
            src={navLogo1 }
            className="object-contain"
            alt="logo"
            height={32}
            quality={100}
          />
        </figure>
      </div>
      {open && (
        <div className="absolute w-full left-0 z-50">
          <MobileNavExtended />
        </div>
      )}
    </>
  );
}

export function LoginButton() {
  return (
    <Link
      href="https://fms.loadlc.com"
      className="border border-black  text-black  px-9 py-3 rounded-full text-lg transition-all ease-in-out hover:scale-100"
    >
      Log In
    </Link>
  );
}
export function SignButton() {
  return (
    <Link
      href="https://fms.loadlc.com"
      className="border border-black  text-white bg-black px-9 py-3 rounded-full text-lg transition-all ease-in-out hover:scale-110"
    >
      Sign In
    </Link>
  );
}

export function DesktopNav() {
  return (
    <div className="py-4 items-center justify-between relative hidden sm:flex">
      <figure>
        <Image
          src={navLogo1 }
          className="object-contain"
          alt="logo"
          height={32}
          quality={100}
        />
      </figure>
      <ul className="flex space-x-8">
        {navlinks.map((link) => (
          <li key={link.title}>
            <Link
              className="text-black hover:border-b-2 hover:translate-y-8 px-1 border-fms-orange tracking-wide leading-tight transition-all ease-in-out"
              href={link.destination}
            >
              {link.title}
            </Link>
          </li>
        ))}
      </ul>
      <div className="space-x-10">
      <SignButton />
      <LoginButton />     
      </div>
    </div>
  );
}

function Navbar() {
  return (
    <Container>
      <MobileNav />
      <DesktopNav />
    </Container>
  );
}

export default Navbar;
