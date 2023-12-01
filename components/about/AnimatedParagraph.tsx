"use client";

import { FC, useRef } from "react";
import { motion, useScroll, MotionValue, useTransform } from "framer-motion";

import { useBreakpoint } from "@/hooks/useBreakpoint";

type AnimatedParagraphProps = {
  paragraph: string;
};

const AnimatedParagraph: React.FC<AnimatedParagraphProps> = ({ paragraph }) => {
  const paragraphRef = useRef<HTMLSpanElement>(null);

  const words = paragraph.split(" ");
  const breakpoint = useBreakpoint();

  const getOffsetValues = () => {
    switch (breakpoint) {
      case "sm":
        return ["start 0.85", "start 0.4"];
      case "md":
        return ["start 0.85", "start 0.4"];
      case "lg":
        return ["start 0.75", "start 0.2"];
      case "xl":
        return ["start 0.65", "start 0.1"];
      default:
        return ["start 0.85", "start 0.4"];
    }
  };

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    // @ts-ignore
    offset: getOffsetValues(),
  });

  return (
    <span ref={paragraphRef} className="relative flex flex-wrap leading-none ">
      {/* duplicate the words with a light opacity for a better experience */}
      <DuplicateWords words={words} />

      {words.map((word, index) => (
        <Word
          key={index}
          scrollYProgress={scrollYProgress}
          index={index}
          totalWords={words.length}
        >
          {word}
        </Word>
      ))}
    </span>
  );
};

type DuplicateWordsProps = {
  words: string[];
};

const DuplicateWords: FC<DuplicateWordsProps> = ({ words }) => (
  <span 
  className="absolute flex flex-wrap leading-none opacity-[0.05]"
  // hide from screen readers
  aria-hidden="true"
  >
    {words.map((word, index) => (
      <span key={index} className="mr-2 mt-2 md:mr-3 md:mt-3">
        {word}
      </span>
    ))}
  </span>
);

type WordProps = {
  scrollYProgress: MotionValue<number>;
  index: number;
  totalWords: number;
  children: string;
};

const Word: FC<WordProps> = ({
  children,
  scrollYProgress,
  index,
  totalWords,
}) => {
  const start = index / totalWords;
  const end = (index + 1) / totalWords;
  const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.span className="mr-2 mt-2 md:mr-3 md:mt-3" style={{ opacity }}>
      {children}
    </motion.span>
  );
};

export default AnimatedParagraph;
