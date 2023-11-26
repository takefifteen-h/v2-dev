"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

const svgVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
      staggerChildren: 1,
    },
  },
};

const pathVariants: Variants = {
  initial: {
    opacity: 0,
    pathLength: 0,
  },
  animate: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

const ServiceSvg = () => {
  return (
    <motion.svg
      variants={svgVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
    >
      <g clip-path="url(#clip0_55_76)">
        <motion.path
          variants={pathVariants}
          d="M17.2568 15.0376V11.8056C17.2576 11.0223 17.052 10.2525 16.6606 9.57402C16.2691 8.89551 15.7057 8.33216 15.0272 7.94078L12 6.18878M17.2568 20.8488L14.2296 22.6008C13.5521 22.993 12.7832 23.1995 12.0004 23.1995C11.2176 23.1995 10.4487 22.993 9.77119 22.6008L6.74319 20.8488"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={pathVariants}
          d="M17.2568 15.0368L14.2296 16.7888C13.5521 17.181 12.7832 17.3875 12.0004 17.3875C11.2176 17.3875 10.4487 17.181 9.77119 16.7888L6.74319 15.0368"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <motion.path
          variants={pathVariants}
          d="M12 12L17.2568 15.0368M12 12V6.18881M12 12L6.744 15.0376V11.7952C6.74212 11.0132 6.94735 10.2446 7.33883 9.56756C7.73031 8.89056 8.29407 8.32928 8.9728 7.94081L12 6.18881M12 6.18881L6.744 3.15201L9.7712 1.40001C10.4487 1.00784 11.2176 0.801331 12.0004 0.801331C12.7832 0.801331 13.5521 1.00784 14.2296 1.40001L17.2568 3.15201L12.0008 6.18881H12ZM1.4864 12L6.7432 15.0376V20.8488L3.716 19.0968C3.037 18.7084 2.473 18.147 2.08137 17.4698C1.68974 16.7927 1.48446 16.0239 1.4864 15.2416V12ZM1.4864 12V8.76801C1.48569 7.98481 1.69141 7.21526 2.08284 6.5369C2.47427 5.85854 3.03757 5.29532 3.716 4.90401L6.7432 3.15121M22.5144 12L17.256 15.0376H17.2576V20.8488L20.2848 19.0968C20.9638 18.7084 21.5278 18.147 21.9194 17.4698C22.3111 16.7927 22.5163 16.0239 22.5144 15.2416V12ZM22.5144 12L22.5136 8.76801C22.5143 7.98481 22.3086 7.21526 21.9172 6.5369C21.5257 5.85854 20.9624 5.29532 20.284 4.90401L17.2568 3.15121"
          stroke="black"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_55_76">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </motion.svg>
  );
};

export default ServiceSvg;
