"use client";

import React from 'react'
import {Variants, motion} from "framer-motion"

type Props = {
    children: React.ReactNode;
    delay? : number;
    margin?: string;
}

const containerVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 50
      },
      visible: {
        opacity: 1,
        y: 0,
      },
}

const FadeInContent: React.FC<Props> = ({children, delay = 0, margin = "-100px"}) => {
  return (
   <motion.div
   variants={containerVariants}
   initial="hidden"
   whileInView="visible"
   transition={{
    duration: 0.5,
    delay: delay
  }}
   viewport={{
     once: true,
     margin: margin,
    }}
   >
{children}
   </motion.div>
  )
}

export default FadeInContent