"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type id = "about" | "services" | "projects" | "contact" | "footer";

type FadeInSectionProps = {
  initialColor: string;
  finalColor: string;
  textColor: string;
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  id?: id;
};

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  initialColor,
  finalColor,
  textColor,
  delay = 0,
  duration = 0.25,
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
        duration: duration,
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