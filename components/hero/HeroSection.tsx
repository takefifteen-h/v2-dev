import React from "react";

import VideoCanvas from "./VideoCanvas";
import DynamicHeroText from "./DynamicHeroText";
import HeroText from "./HeroText";
import FadeInContent from "../FadeInContent";
import HeroIndicators from "./HeroIndicators";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-screen w-full overflow-hidden bg-[rgb(0,0,0)]">
      {/* Hero About */}
      <div className="master-container absolute inset-0  h-full w-full text-white">
          <HeroText />
        <HeroIndicators />
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
