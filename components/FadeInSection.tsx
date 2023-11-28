"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type id = "about" | "services" | "projects" | "contact";

type FadeInSectionProps = {
  initialColor: string;
  finalColor: string;
  textColor: string;
  children: React.ReactNode;
  delay?: number;
  className?: string;
  id?: id;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  initialColor,
  finalColor,
  textColor,
  delay = 0,
  className,
  id,
  ...props
}) => {
  const sectionVariants: Variants = {
    initial: {
      backgroundColor: initialColor,
    },
    animate: {
      backgroundColor: [initialColor, finalColor],
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
      className={`${textColor} ${className}`}
      {...props}
    >
      {children}
    </motion.section>
  );
};

export default FadeInSection;