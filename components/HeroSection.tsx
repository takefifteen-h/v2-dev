"use client";

import React from "react";

const HeroSection = () => {
  const isMobile = window.innerWidth <= 768;
  const videoSource = isMobile
    ? "/videos/bg-mobile.mp4"
    : "/videos/bg-desktop.mp4";

  const videoPoster = isMobile
    ? "/videos/bg-mobile-poster.jpg"
    : "/videos/bg-desktop-poster.jpg";

  return (
    <div className="relative overflow-hidden w-full h-full">
      <video
        poster={videoPoster}
        preload="auto"
        playsInline
        autoPlay
        muted
        loop
        className="w-full h-full absolute object-cover"
      >
        <source src={videoSource} type="video/mp4" />
      </video>
      HeroSection
    </div>
  );
};

export default HeroSection;
