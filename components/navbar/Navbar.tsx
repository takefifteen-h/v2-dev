"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";

import { useWindowWidth } from "@/hooks/useWindowWidth";

const DesktopMenu = dynamic(() => import("./DesktopMenu"), { ssr: false });

const navbarVariants = {
  hidden: {
    y: "-100%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
    },
  },
};

const MOBILE_WIDTH = 768;

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const windowWidth = useWindowWidth();

  useMotionValueEvent(scrollY, "change", (latestScrollY) => {
    const previousScrollY = scrollY.getPrevious();

    if (latestScrollY > previousScrollY) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  return (
    <motion.nav
      variants={navbarVariants}
      animate={isScrolled ? "hidden" : "visible"}
      className="fixed top-0 z-10 flex h-navbar-mobile w-full items-center justify-center bg-[#121212d9] px-5 text-white md:h-navbar-desktop  md:justify-between"
      style={{ backdropFilter: "blur(10px) saturate(180%)" }}
    >
      <div className="relative h-[40px] w-[130px] md:h-[60px] md:w-[180px]">
        <Image
          src="../logos/ismail-white.svg"
          alt="Logo Of Ismail Shaikhnag"
          fill
          priority
        />
      </div>

      {/* displaty desktop menu if the window width is greater than 768px */}
      {windowWidth && windowWidth > MOBILE_WIDTH ? <DesktopMenu /> : null}
    </motion.nav>
  );
};

export default Navbar;
