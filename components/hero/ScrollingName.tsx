"use client";

import {
  motion,
  Variants,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import React, { useRef, useState } from "react";

const ScrollingName: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  useMotionValueEvent(scrollYProgress, "change", (latestScrollY) => {
    console.log("latestScrollY => ", latestScrollY);

    if (latestScrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const variants: Variants = {
    hidden: {
      x: isScrolled ? "0%" : "-100%",
    },
    visible: {
      x: isScrolled ? "-100%" : "-0%",
      transition: {
        duration: isScrolled ? 5 : 5,
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="flex select-none whitespace-nowrap pb-[10vh] text-[max(7rem,12vw)] font-medium leading-none text-white md:order-2"
      style={{ opacity }}
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex"
      >
        <span aria-hidden="true">&nbsp; &mdash; &nbsp;</span>
        <h1>Ismail Shaikhnag</h1>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex"
        aria-hidden="true" // prevent the screen reader from reading the text twice
      >
        <span aria-hidden="true">&nbsp; &mdash; &nbsp;</span>
        <h1>Ismail Shaikhnag</h1>
      </motion.div>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        className="flex"
        aria-hidden="true" // prevent the screen reader from reading the text twice
      >
        <span aria-hidden="true">&nbsp; &mdash; &nbsp;</span>
        <h1>Ismail Shaikhnag</h1>
      </motion.div>
    </motion.div>
  );
};

export default ScrollingName;
