import React from "react";

import VideoCanvas from "./VideoCanvas";
import DynamicHeroText from "./DynamicHeroText";
import SlideInContent from "../SlideInContent";
import ScrollingName from "./ScrollingName";
import HeroText from "./HeroText";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-[rgb(14,14,14)]">
      <VideoCanvas />

      {/* Hero About */}
      <div className="absolute inset-0 flex h-full w-full flex-col justify-center gap-y-8">
          <div className="master-container text-white">
              <HeroText />
        </div>
      </div>

      {/* old hero text */}
      {/* <div className="absolute left-0 top-1/2 z-10 mr-auto w-full -translate-y-1/2 text-white">
        <div className="master-container">
          <SlideInContent direction="slideRight" delay={0.25}>
            <DynamicHeroText />
          </SlideInContent>
        </div>
      </div> */}
    </section>
  );
};

export default HeroSection;
