"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

const DesktopMenu = dynamic(() => import("./DesktopMenu"), { ssr: false });
const NavbarButton = dynamic(() => import("./NavbarButton"), { ssr: false });
import FadeInContent from "../FadeInContent";

const navLineVariants = {
  initial: {
    opacity: 0,
    scaleX: 0,
  },
  animate: {
    opacity: 1,
    scaleX: 1,
    transition: {
      delay: 0.5,
      duration: 0.5,
      ease: "linear",
    },
  },
};

const MOBILE_WIDTH = 768;

const Navbar = () => {
  return (
    <nav className="absolute top-[20px] z-40 h-navbar-mobile  w-full text-white md:top-[60px]  md:h-navbar-desktop">
      <section className="master-container flex h-full items-center justify-between">
        {/* Logo */}
        <FadeInContent delay={0.35}>
          <Link href="/">
            <div className="relative h-[40px] w-[130px] -translate-y-2 md:h-[60px] md:w-[180px]">
              <Image
                src="../logos/ismail-white.svg"
                alt="Logo Of Ismail Shaikhnag"
                fill
                priority
              />
            </div>
          </Link>
        </FadeInContent>

        {/* Line will only be displayed on md: */}
        <motion.div
          variants={navLineVariants}
          initial="initial"
          animate="animate"
          className="mx-16 hidden h-[1px] w-full bg-[#484848] lg:inline-block"
          style={{ originX: 0 }}
        />

        {/* will only display on md: screens and above*/}
        <DesktopMenu />

        {/* will only display on sm screens */}
        <NavbarButton label="Get In Touch" href="#contact" />
      </section>
    </nav>
  );
};

export default Navbar;
