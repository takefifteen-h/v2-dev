"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 h-[90px] flex w-full items-center justify-between bg-secondary-100 px-5 py-3">
      <div className="relative h-[50px] w-[150px]">
        <Image src="../logos/ismail-black.svg" alt="Ismail Shaikhnag" fill />
      </div>

      <ul className="flex items-center justify-between space-x-5">
        <li className="text-sm">
          <Link href="/">Home</Link>
        </li>
        <li className="text-sm">
          <Link href="#about">About</Link>
        </li>
        <li className="text-sm">
          <Link href="#projects">Projects</Link>
        </li>
        <li className="text-sm">
          <Link href="#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
