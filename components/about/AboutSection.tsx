import React from "react";
import AnimatedParagraph from "./AnimatedParagraph";

const paragraph =
  "My passion for design, code, and interaction places me uniquely in the web design world. I don't just create websites; I craft impactful, immersive journeys.";

const AboutSection = () => {
  return (
    <section
      id="about"
      aria-label="about"
      className="flex h-screen select-none items-center justify-center overflow-hidden"
    >
      <h2 className="master-container text-3xl font-medium md:text-5xl lg:text-6xl">
        <AnimatedParagraph paragraph={paragraph} />
      </h2>
    </section>
  );
};

export default AboutSection;
