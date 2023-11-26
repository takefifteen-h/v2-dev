
import React from "react";
import FadeInContent from "./FadeInContent";


const AboutSection = () => {
  return (
    <section className="master-container my-20 select-none overflow-hidden py-10 md:my-[12%]  ">
      <FadeInContent >
        <h2 
        className="text-4xl font-medium md:text-5xl lg:text-6xl">
          My passion for design, code, and interaction places me uniquely in the
          web design world. I don&apos;t just create websites; I craft impactful,
          immersive journeys.
        </h2>
        </FadeInContent>
    </section>
  );
};

export default AboutSection;
