"use client";

import { motion, Variants } from "framer-motion";
import React from "react";

const parentVariants: Variants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.25,
    },
  },
};

const itemVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};

const HeroIndicators: React.FC = () => {
  return (
    <motion.div
      // Add your motion properties here
      variants={parentVariants}
      initial="initial"
      animate="animate"
      className="w-full mt-16 "
    >
      {/* 5 lines stacked from big to small */}
      {[...Array(5)].map((_, index) => (
        <motion.div
          variants={itemVariants}
          key={index}
          className="h-1 bg-white mt-8 mx-auto"
          style={{
            width: `${100 - index * 20}%`,
          }}
        />
      ))}
    </motion.div>
  );
};

export default HeroIndicators;
