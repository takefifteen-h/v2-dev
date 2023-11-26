"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState } from "react";

const greetings = [
  "Hello", // en
  "Bonjour", // fr
  "स्वागत हे", // hi
  "Ciao", // it
  "Olá", // pt
  "Hallå", // sv
  "Guten tag", // de
  "Hallo", // nl
];

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    height: 0,
    borderBottomLeftRadius: "100%",
    borderBottomRightRadius: "100%",
    transition: {
      ease: "easeInOut",
      duration: 1,
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
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed top-0 left-0 w-full h-[150vh] overflow-hidden z-20 bg-black"
          style={{ overflow: "hidden" }}
        >
          <motion.h2
            variants={containerVariants}
            className="text-white text-6xl font-bold absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            • {greetings[greetingIndex]}
          </motion.h2>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

export default GreetingAnimation;
