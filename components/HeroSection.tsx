"use client";

import React from "react";

import { useWindowWidth } from "@/hooks/useWindowWidth";

const HeroSection = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth ? windowWidth < 768 : false;

  const videoSource = isMobile
    ? "/videos/bg-mobile.mp4"
    : "/videos/bg-desktop.mp4";
  const videoPoster = isMobile
    ? "/images/bg-mobile-poster.webp"
    : "/images/bg-desktop-poster.webp";

  return (
    <div className="relative h-full w-full overflow-hidden">
      <video
        poster={videoPoster}
        preload="auto"
        playsInline
        autoPlay
        muted
        loop
        className="absolute h-full w-full object-cover"
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      HeroSection
    </div>
  );
};

export default HeroSection;
