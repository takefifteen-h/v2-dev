"use client";

import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";
import { Variants, motion } from "framer-motion";

import { LuArrowDownLeft } from "react-icons/lu";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
  animateOnce?: boolean;
};

const linkButtonVariants: Variants = {
  initial: {
    opacity: 0,
    x: 50,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.25,
      duration: 0.35,
    },
  },
};

const CircularContactButton: React.FC<ButtonProps> = ({
  label,
  href,
  animateOnce = true,
  ...rest
}) => {
  return (
    <motion.div
      variants={linkButtonVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: animateOnce,
        margin: "0px",
      }}
      className="group absolute right-0"
    >
      <Link
        href={href}
        {...rest}
        className={` flex h-[100px] w-[100px]  min-w-max  -translate-x-1/4 -translate-y-1/2 items-center justify-center rounded-[50%] bg-[#455ce9] font-medium text-white transition duration-300 ease-in-out hover:bg-[#334bd3] focus:bg-[hsl(232,79%,65%)] focus:outline-none focus:ring-1 active:bg-[#334bd3] md:h-[150px] md:w-[150px] lg:-translate-x-1/2 lg:text-lg xl:-translate-x-[200%]`}
      >
        {label}
        <LuArrowDownLeft className="absolute -right-3 -top-3 text-xl text-black transition-all duration-500 group-hover:animate-wiggle group-focus:animate-wiggle md:text-2xl lg:text-3xl xl:-top-4 xl:text-4xl " />
      </Link>
    </motion.div>
  );
};

export default CircularContactButton;
