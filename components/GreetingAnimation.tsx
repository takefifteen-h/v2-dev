"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "سلام", // ar
  "Hallo", // nl
  "Bonjour", // fr
  "स्वागत हे", // hi
  "Ciao", // it
  "Olá", // pt
  "Guten tag", // de
  "Hello", // en
];

const containerVariants: Variants = {
  exit: {
    height: 0,
    transition: {
      ease: "easeInOut",
      duration: 0.5,
    },
  },
};

const GreetingAnimation: React.FC = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const displayGreeting = () => {
      if (greetingIndex >= greetings.length - 1) {
        setIsFinished(true);
      } else {
        setGreetingIndex(greetingIndex + 1);
      }
    };

    const delay =
      greetingIndex === 0 || greetingIndex === greetings.length - 1 ? 800 : 150;

    const timeoutId = setTimeout(displayGreeting, delay); // Display next greeting after delay

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, [greetingIndex]);

  return (
    <AnimatePresence>
      {!isFinished ? (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed top-0 left-0 w-full h-screen overflow-hidden z-20 bg-black"
          style={{ overflow: "hidden" }}
        >
          <motion.h2
            variants={containerVariants}
            className="text-white text-5xl md:text-6xl font-semibold absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center gap-x-1.5 w-max"
          >
            <span>•</span> {greetings[greetingIndex]}
          </motion.h2>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default GreetingAnimation;
