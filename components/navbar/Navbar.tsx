"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";

import { useWindowWidth } from "@/hooks/useWindowWidth";

const DesktopMenu = dynamic(() => import("./DesktopMenu"), { ssr: false });
const NavbarButton = dynamic(() => import("./NavbarButton"), { ssr: false });
import FadeInContent from "../FadeInContent";

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
      className="fixed top-0 z-40  h-navbar-mobile w-full bg-[#121212d9] text-white  md:h-navbar-desktop"
      style={{ backdropFilter: "blur(10px) saturate(180%)" }}
    >
      <section className="master-container flex h-full items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="relative h-[40px] w-[130px] md:h-[60px] md:w-[180px]">
            <Image
              src="../logos/ismail-white.svg"
              alt="Logo Of Ismail Shaikhnag"
              fill
              priority
            />
          </div>
        </Link>

        {/* will only display on md: screens and above*/}
          <DesktopMenu />

          {/* will only display on sm screens */}
          <FadeInContent delay={0.25} className="md:hidden">
            <NavbarButton label="Get In Touch" href="#contact" />
          </FadeInContent>
      </section>
    </motion.nav>
  );
};

export default Navbar;
