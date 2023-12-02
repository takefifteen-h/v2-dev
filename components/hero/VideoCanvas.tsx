"use client";

import { useWindowWidth } from "@/hooks/useWindowWidth";
import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";

import mobilePoster from "../../public/images/video-posters/hero-mobile-poster.webp";
import desktopPoster from "../../public/images/video-posters/hero-desktop-poster.webp";

const VideoCanvas = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const windowWidth = useWindowWidth();
  const isMobile = windowWidth ? windowWidth < 768 : false;

  const videoSource = isMobile
    ? "/videos/bg-mobile.mp4"
    : "/videos/bg-desktop.mp4";
  const videoPoster = isMobile ? mobilePoster : desktopPoster;

  const videoPosterPath = isMobile
    ? "/images/video-posters/hero-mobile-poster.webp"
    : "/images/video-posters/hero-desktop-poster.webp";

  useEffect(() => {
    // Create a variable to hold the ref value
    const currentVideoRef = videoRef.current;

    if (currentVideoRef) {
      // Listen for the 'loadeddata' event to know when the video has loaded
      currentVideoRef.addEventListener("loadeddata", () => {
        setVideoLoaded(true);
      });
    }

    // Clean up event listener on component unmount
    return () => {
      if (currentVideoRef) {
        currentVideoRef.removeEventListener("loadeddata", () => {});
      }
    };
  }, []);

  return (
    <>
      {/* Placeholder image until video is loaded */}
      {!videoLoaded && (
        <Image
          src={videoPoster}
          alt="Video Poster"
          priority
          className="absolute h-full w-full object-cover"
        />
      )}

      {/* Video element */}
      <video
        ref={videoRef}
        poster={videoPosterPath}
        preload="auto"
        playsInline
        autoPlay
        muted
        loop
        className={`absolute h-full w-full object-cover ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={videoSource} type="video/mp4" />
      </video>

      {/* Overlay for the video */}
      <div className="absolute h-full w-full bg-black bg-opacity-70 md:bg-opacity-65"></div>
    </>
  );
};

export default VideoCanvas;
