"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

type AnimatePageContentProps = {
  children: React.ReactNode;
};

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: "100vh",
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 3, // Wait for greeting animation to finish
      duration: 0.5,
    },
  },
};

const AnimatePageContent: React.FC<AnimatePageContentProps> = ({
  children,
}) => {
  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      {children}
    </motion.div>
  );
};

export default AnimatePageContent;
