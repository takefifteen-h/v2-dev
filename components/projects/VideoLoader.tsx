"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

import { BiError } from "react-icons/bi";
import Skeleton from "../skeleton/Skeleton";

interface Props {
    // Define your component props here
    webm?: string;
    mp4: string;
}

const VideoLoader: React.FC<Props> = ({mp4,webm}) => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleLoadedData = useCallback(() => {
    setVideoLoaded(true);
  }, [])

  const handleError = useCallback( () => {
    setVideoError(true)
  } , [])


  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
        videoElement.addEventListener("loadeddata", handleLoadedData);
        videoElement.addEventListener("error", handleError);
    }

    return () => {
        if (videoElement) {
            videoElement.removeEventListener("loadeddata", handleLoadedData);
            videoElement.removeEventListener("error", handleError);
        }
    };
}, [handleLoadedData, handleError]);

return (
    <>
      {!videoLoaded && !videoError && (
        <Skeleton/>
      )}

      {videoError && (
        <div className="flex flex-col items-center justify-center h-full w-full border-[1px]">
          <BiError className="text-red-500 text-4xl" aria-hidden={true} />
          <p 
          className="text-white text-xl md:text-2xl font-semibold"
          >
          Failed to load media. <br /> Unable to play the file
          </p>
        </div>
      )}

      <video
        ref={videoRef}
        preload="none"
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full rounded-none object-cover"
        onError={handleError}
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={mp4} type="video/mp4" />
        <p className="text-white">
            Your browser does not support the video tag.
        </p>
      </video>
    </>
);
};

export default VideoLoader;
