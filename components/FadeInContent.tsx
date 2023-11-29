// Updated imports
"use client";

import React from "react";
import { Variants, motion } from "framer-motion";

// Updated type with a new 'direction' prop
type Props = {
  children: React.ReactNode;
  delay?: number;
  margin?: string;
  className?: string;
  animateOnce?: boolean;
};

// Updated variants based on the chosen direction
const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

// Updated component name and props
const FadeInContent: React.FC<Props> = ({
  children,
  delay = 0,
  margin = "0px",
  className,
  animateOnce = true,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      transition={{
        duration: 1,
        delay: delay,
        ease: "easeInOut"
      }}
      viewport={{
        once: animateOnce,
        margin: margin,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default FadeInContent;
