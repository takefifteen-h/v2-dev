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
  const scrollX = useTransform(scrollYProgress, [0, 1], ["-1%", "-50%"]);

  useMotionValueEvent(scrollYProgress, "change", (latestScrollY) => {
    const netScrollY = latestScrollY - scrollYProgress.getPrevious();

    console.log("netScrollY => ", netScrollY);

    if (netScrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const marqueeVariants: Variants = {
    initial: {
      x: "0%",
    },
    animate: {
      x: isScrolled ? "-100%" : "-0%",
      transition: {
        ease: "linear",
        repeat: Infinity,
        repeatType: "loop",
      },
    },
  };

  return (
    <motion.div
      ref={containerRef}
      className="relative h-[250px] w-screen max-w-full select-none overflow-x-hidden pb-[10vh] text-[max(7rem,12vw)] font-medium leading-none text-white md:order-2"
      style={{ opacity }}
    >
      <motion.div
        className="absolute flex whitespace-nowrap"
        style={{ x: scrollX }}
      >
        <span aria-hidden="true"> &mdash; </span>
        <h1>Ismail Shaikhnag</h1>

        {Array.from({ length: 10 }).map((_, i) => (
          <span aria-hidden="true" key={i} className="flex">
            <span> &mdash; </span>
            <h1>Ismail Shaikhnag</h1>
          </span>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default ScrollingName;
