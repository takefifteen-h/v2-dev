"use client";
import React, { useEffect, useState, FC } from "react";
import Image from "next/image";

interface TimeOptions {
  hour: "numeric" | "2-digit";
  minute: "numeric" | "2-digit";
  second: "numeric" | "2-digit";
  hour12: boolean;
}

const Footer: FC = () => {
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

  const renderVersion = () => (
    <div className="flex flex-col items-start gap-y-4">
      <h5 className="text-sm font-semibold uppercase text-white/50">Version</h5>
      <p className="text-sm text-white">2022 &copy; Edition</p>
    </div>
  );

  const renderLocalTime = () => (
    <div className="flex flex-col items-start gap-y-4">
      <h5 className="text-sm font-semibold uppercase text-white/50">
        Local Time
      </h5>
      <p className="text-sm text-white">{time}</p>
    </div>
  );

  return (
    <footer className="bg-[#0d0d0d] bg-stars pt-[64px]">
      <section className="master-container relative flex aspect-[401/151] min-h-[100px]">
        <Image
          src="/logos/ismail-white.svg"
          alt="Ismail Logo"
          fill
          className=""
        />
      </section>

      <section className="master-container mt-10 flex flex-col justify-between gap-y-4 md:flex-row">
        <div className="flex items-center gap-x-8">
          {renderVersion()}
          {renderLocalTime()}
        </div>
      </section>
    </footer>
  );
};

export default Footer;
