import React from "react";

import VideoCanvas from "./VideoCanvas";
import DynamicHeroH1 from "./DynamicHeroH1";

const HeroSection = () => {
  return (
    <section className="relative h-[80dvh] w-full overflow-hidden md:h-screen">
      <VideoCanvas />

      <div className="absolute left-0 top-1/2 z-10 mr-auto w-full -translate-y-1/2 text-white">
        <div className="master-container">
          <DynamicHeroH1 />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
