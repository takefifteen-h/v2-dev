import React from "react";
import SlideInContent from "../SlideInContent";

const AboutSection = () => {
  return (
    <section className="master-container flex h-screen select-none items-center justify-center overflow-hidden">
      <SlideInContent direction="slideLeft">
        <h2 className="text-4xl font-medium md:text-5xl lg:text-6xl">
          My passion for design, code, and interaction places me uniquely in the
          web design world. I don&apos;t just create websites; I craft
          impactful, immersive journeys.
        </h2>
      </SlideInContent>
    </section>
  );
};

export default AboutSection;
