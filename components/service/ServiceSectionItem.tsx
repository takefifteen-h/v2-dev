"use client";

import React from "react";
import { motion, Variants } from "framer-motion";

interface ServiceSectionItemProps {
  header: string;
  paragraph: string;
  items: string[];
  animationDelay?: number;
}

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const childVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      type: "spring",
      stiffness: 50,
    },
  },
};

const lineVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    opacity: 1,
    width: "100%",
    transition: {
      duration: 0.3,
      ease: "easeInOut",
      type: "spring",
      stiffness: 50,
    },
  },
};

const ServiceSectionItem: React.FC<ServiceSectionItemProps> = ({
  header,
  paragraph,
  items,
  animationDelay = 0,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,
        amount: 0.5,
      }}
      transition={{
        duration: 0.5,
        delay: animationDelay,
        when: "beforeChildren",
        staggerChildren: 0.2,
      }}
      className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-24 "
    >
      <div className="flex flex-col gap-y-2 md:gap-y-4">
        {/* Header */}
        <motion.h3
          variants={childVariants}
          className="text-heading-3 font-bold capitalize leading-tight 2xl:text-7xl"
        >
          {header}
        </motion.h3>
        <motion.p
          variants={childVariants}
          className="text-body-1 max-w-md  xl:max-w-2xl 2xl:text-3xl"
        >
          {paragraph}
        </motion.p>
      </div>

      {/* line on sm screens */}
      <motion.hr
        variants={lineVariants}
        className="block h-1 w-full bg-[#5d3b14] opacity-50 md:hidden"
      />

      {/* Content */}
      <div className=" select-none leading-[2.3rem] text-[#5d3b14] md:leading-[2.5rem] lg:leading-[3.4rem]">
        {items.map((item, index) => (
          <motion.p
            variants={childVariants}
            key={index}
            className="font-general text-special font-semibold 2xl:text-7xl "
          >
            {item}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default ServiceSectionItem;
