import React from "react";

import VideoCanvas from "./VideoCanvas";
import DynamicHeroH1 from "./DynamicHeroH1";
import FadeInContent from "../FadeInContent";

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] w-full overflow-hidden">
      <VideoCanvas />

      <div className="absolute left-0 top-1/2 z-10 mr-auto w-full -translate-y-1/2 text-white">
        <div className="master-container">
          <FadeInContent delay={3}>
            <DynamicHeroH1 />
          </FadeInContent>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
