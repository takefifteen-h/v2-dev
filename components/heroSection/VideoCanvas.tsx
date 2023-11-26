"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import React from "react";

const VideoCanvas = () => {
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth ? windowWidth < 768 : false;

  const videoSource = isMobile
    ? "/videos/bg-mobile.mp4"
    : "/videos/bg-desktop.mp4";
  const videoPoster = isMobile
    ? "/images/bg-mobile-poster.webp"
    : "/images/bg-desktop-poster.webp";
  return (
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
  );
};

export default VideoCanvas;
