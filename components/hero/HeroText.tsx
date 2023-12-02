"use client";

import { Fragment } from "react";
import { motion } from "framer-motion";
import { LuArrowDownLeft, LuArrowDown } from "react-icons/lu";

const gradients = ["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"];

const adjectiveVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const HeroText = () => {
  return (
    <div className="relative">
      <LuArrowDown className="absolute left-0 top-0 -translate-y-8 rotate-[-30deg] text-xl text-white  md:text-2xl lg:text-3xl xl:-top-4 xl:text-4xl " />

      <h1 className="text-5xl font-extrabold md:max-w-[80%] md:text-7xl lg:text-8xl">
        <motion.span
          variants={adjectiveVariants}
          initial="visible"
          animate="visible"
          className={`gradient g1 animate-gradient w-max`}
        >
          Hobbiest
        </motion.span>{" "}
        <br />
        Developer &amp; Designer
      </h1>
    </div>
  );
};

export default HeroText;
