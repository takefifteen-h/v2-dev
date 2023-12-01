import React from "react";

import VideoCanvas from "./VideoCanvas";
import DynamicHeroText from "./DynamicHeroText";
import SlideInContent from "../SlideInContent";

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen w-full overflow-hidden bg-[rgb(14,14,14)]">
      <VideoCanvas />

      <div className="absolute left-0 top-1/2 z-10 mr-auto w-full -translate-y-1/2 text-white">
        <div className="master-container">
          <SlideInContent direction="slideRight" delay={0.25}>
            <DynamicHeroText />
          </SlideInContent>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
