"use client";

import { Fragment, useRef } from "react";
import { Variants, motion, useScroll, useTransform } from "framer-motion";

const heroText = "Hobbyist Developer & Designer";
const heroTextArray = heroText.split(" ");

const itemVariants: Variants = {
  initial: {
    opacity: 0,
    y: "50px",
  },
  animate: {
    opacity: 1,
    y: "0px",
    transition: (index: number) => ({
      delay: index * 1,
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
    <motion.div
      ref={containerRef}
      className="relative pb-[10vh] text-center"
      // style={{ opacity }}
    >
      <h1 className="text-5xl font-extrabold md:max-w-[80%] md:text-7xl lg:text-8xl">
        <motion.span className={`gradient g1 animate-gradient w-max`}>
          Hobbyist
        </motion.span>{" "}
        <br />
        <span className="">Developer &amp; Designer</span>
      </h1>
    </motion.div>
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
