"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const adjectives = [
  "A Visionary",
  "An Elegant",
  "A Vibrant",
  "An Interactive",
  "A Pioneering",
  "A Captivating",
  "An Adaptive",
  "An Innovative",
  "A Dynamic",
];

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

const DynamicHeroText = () => {
  const [adjectiveIndex, setAdjectiveIndex] = useState(0);
  const [gradientIndex, setGradientIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAdjectiveIndex((prev) => (prev + 1) % adjectives.length);
      setGradientIndex((prev) => (prev + 1) % gradients.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="text-5xl font-extrabold md:max-w-[80%] md:text-7xl lg:text-8xl">
      Cultivating {""} <br />
      <motion.span
        variants={adjectiveVariants}
        initial="visible"
        animate="visible"
        key={adjectives[adjectiveIndex]}
        className={`gradient ${gradients[gradientIndex]} animate-gradient w-max`}
      >
        {adjectives[adjectiveIndex]}
      </motion.span>{" "}
      <br />
      journey for the web.
    </h1>
  );
};

export default DynamicHeroText;
