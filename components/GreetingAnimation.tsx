"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import { useEffect, useState, Fragment } from "react";

type Props = {
  children: React.ReactNode;
};

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

const GreetingAnimation: React.FC<Props> = ({ children }) => {
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

    let delay: number;
    if (greetingIndex === 0) delay = 1000;
    else if (greetingIndex === greetings.length - 1) delay = 800;
    else delay = 150;

    const timeoutId = setTimeout(displayGreeting, delay); // Display next greeting after delay

    return () => clearTimeout(timeoutId); // Clean up on unmount
  }, [greetingIndex]);

  return (
    <AnimatePresence mode="sync">
      {false ? (
        <motion.div
          key={greetingIndex}
          variants={containerVariants}
          exit="exit"
          className="pointer-events-none fixed left-0 top-0 z-50 h-screen w-full cursor-wait overflow-hidden bg-black"
          style={{ overflow: "hidden" }}
        >
          <motion.h2
            variants={containerVariants}
            className="absolute left-1/2 top-1/2 flex w-max -translate-x-1/2 -translate-y-1/2 transform items-center gap-x-1.5 text-5xl font-semibold text-white md:text-6xl"
          >
            <span>•</span> {greetings[greetingIndex]}
          </motion.h2>
        </motion.div>
      ) : (
        <Fragment key="finished">{children}</Fragment>
      )}
    </AnimatePresence>
  );
};

export default GreetingAnimation;
