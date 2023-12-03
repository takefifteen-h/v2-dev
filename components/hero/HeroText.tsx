"use client";

import { Fragment, useRef } from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";

const heroText = "Hobbyist Developer & Designer";
const heroTextArray = heroText.split(" ");

const textVariants: Variants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: (delay: number) => ({
      delay: delay,
      duration: 1,
      ease: "linear",
    }),
  },
};

const HeroText = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);

  return (
    <motion.h1
      ref={containerRef}
      className="text-center text-5xl font-extrabold md:text-7xl lg:text-8xl top-1/2 absolute -translate-y-1/2"
      style={{ opacity }}
    >
      <motion.span
        variants={textVariants}
        initial="initial"
        animate="animate"
        custom={0.5}
        role="text"
        className={`gradient g1 animate-gradient w-max`}
      >
        Hobbyist
      </motion.span>{" "}
      <br />
      <motion.span
        variants={textVariants}
        initial="initial"
        animate="animate"
        custom={0.5}
        role="text"
      >
        Developer &amp; Designer&#46;
      </motion.span>
    </motion.h1>
  );
};

export default HeroText;

/* 
 <motion.span
          className={`gradient g1 animate-gradient w-max`}
        >
          Hobbiest
        </motion.span>{" "}

         {heroTextArray.map((word, index) => (
          <motion.span
            key={index}
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            custom={index}
            className={`${
              index === 0
                ? `gradient g${index + 1} animate-gradient`
                : " inline-block"
            } font-bold`}
          >
            {word}&nbsp;
          </motion.span>
        ))}
*/
