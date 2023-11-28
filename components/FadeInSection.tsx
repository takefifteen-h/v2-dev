"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type id = "about" | "services" | "projects" | "contact";

type DarkToLightProps = {
  startColor: "rgb(14, 14, 14)";
  endColor: "#fff9f2";
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: id;
};

type LightToDarkProps = {
  startColor: "#fff9f2";
  endColor: "rgb(14, 14, 14)";
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: id;
};

type Props = DarkToLightProps | LightToDarkProps;

const FadeInSection: React.FC<Props> = ({
  children,
  startColor,
  endColor,
  delay = 0,
  className,
  id,
  ...props
}) => {
  const sectionVariants: Variants = {
    initial: {
      backgroundColor: startColor,
      // color: endColor,
    },
    animate: {
      backgroundColor: [startColor, endColor],
      // color: [endColor, startColor],
      transition: {
        delay: delay,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      id={id}
      variants={sectionVariants}
      initial="initial"
      whileInView="animate"
      viewport={{
        once: true,
        margin: "-100px",
      }}
      className={`${
        startColor === "rgb(14, 14, 14)" ? "text-[#5d3b14]" : "text-white"
      }  ${className}}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;
