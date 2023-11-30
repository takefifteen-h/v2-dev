"use client";

import {ReactNode, FC, useRef, useEffect} from "react"
import {motion, Variants, useScroll } from "framer-motion"

type Props = {
    paragraph: string;
}

const AnimatedParagraph:FC<Props> = ({paragraph}) => {
  const paragraphRef = useRef(null)
  const {scrollYProgress} = useScroll({
    target: paragraphRef,
    offset: ["start 0.9", "start 0.25"]
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => console.log(e))
  },[])
  

  return (
    <motion.h2 
    ref={paragraphRef}
    className="text-4xl font-medium md:text-5xl lg:text-6xl"
    style={{
      opacity: scrollYProgress
    }}
    >
      {paragraph}
    </motion.h2>
    
  )
}
export default AnimatedParagraph