"use client";

import { motion, Variants, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const variants: Variants = {
  hidden: {
    x: "-110%",
  },
  visible: {
    x: "-10%",
    transition: {
      duration: 15,
      ease: "linear",
      repeat: Infinity,
      repeatType: "loop",
    },
  },
};

const ScrollingName: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.div
      ref={containerRef}
      className="absolute bottom-0 left-0 flex whitespace-nowrap text-[max(9em,15vw)] font-light leading-none text-white"
      style={{ opacity }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex gap-x-1"
      >
        <span aria-hidden="true">-</span>
        <h1>Ismail Shaikhnag</h1>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex gap-x-1"
        aria-hidden="true" // prevent the screen reader from reading the text twice
      >
        <span>-</span>
        <h1>Ismail Shaikhnag</h1>
      </motion.div>
    </motion.div>
  );
};

export default ScrollingName;
