"use client";

import { FC, useRef } from "react";
import { motion, useScroll, MotionValue, useTransform } from "framer-motion";

type Props = {
  paragraph: string;
};

const AnimatedParagraph: FC<Props> = ({ paragraph }) => {
  const paragraphRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ["start 0.85", "start 0.4"],
  });

  const words = paragraph.split(" ");

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
  <span className="absolute flex flex-wrap leading-none opacity-[0.05]">
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
