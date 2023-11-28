import React from "react";

import VideoCanvas from "./VideoCanvas";
import DynamicHeroText from "./DynamicHeroText";
import SlideInContent from "../SlideInContent";

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <VideoCanvas />

      <div className="absolute left-0 top-1/2 z-10 mr-auto w-full -translate-y-1/2 text-white">
        <div className="master-container">
          <SlideInContent delay={3}>
            <DynamicHeroText />
          </SlideInContent>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
