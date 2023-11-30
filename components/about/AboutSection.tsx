import React from "react";
import SlideInContent from "../SlideInContent";
import AnimatedParagraph from "./AnimatedParagraph"

const paragraph = "My passion for design, code, and interaction places me uniquely in the web design world. I don't just create websites; I craft impactful, immersive journeys."

const AboutSection = () => {
  return (
    <section className="master-container flex h-screen select-none items-center justify-center overflow-hidden">
      <SlideInContent direction="slideLeft">
        <AnimatedParagraph paragraph={paragraph} />
      </SlideInContent>
    </section>
  );
};

export default AboutSection;
