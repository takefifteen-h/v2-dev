"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";

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
        <source src={mp4} type="video/mp4" />
        {webm && <source src={webm} type="video/webm" />}
        <p className="text-white">
            Your browser does not support the video tag.
        </p>
      </video>
    </>
);
};

export default VideoLoader;
