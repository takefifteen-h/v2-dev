"use client";

import { useState, useEffect } from "react";

interface TimeOptions {
  hour: "numeric" | "2-digit";
  minute: "numeric" | "2-digit";
  second: "numeric" | "2-digit";
  hour12: boolean;
}

const RenderLocalTime = () => {
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const date = new Date();
      const options: TimeOptions = {
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: true,
      };
      const timeString = `${date.toLocaleString("en-US", options)} ${
        Intl.DateTimeFormat().resolvedOptions().timeZone
      }`;
      setTime(timeString);
    };

    updateTime();
    const intervalId = setInterval(updateTime, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className="flex flex-col items-start gap-y-2 lg:gap-y-4">
      <p className="text-xs font-semibold uppercase text-white/50 lg:text-sm">
        Local Time
      </p>
      <p className="text-sm text-white">{time}</p>
    </div>
  );
};

export default RenderLocalTime;
