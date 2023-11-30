"use client";
import { useEffect, useState, FC } from "react";
import Image from "next/image";
import Link from "next/link";

import { socials } from "@/constants";

import contactIcon from "../../public/images/icons/contact.svg";
import { LuArrowDownRight } from "react-icons/lu";

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
    <div className="flex flex-col items-start gap-y-2 lg:gap-y-4">
      <h5 className="text-xs font-semibold uppercase text-white/50 lg:text-sm">
        Version
      </h5>
      <p className="text-sm text-white">2022 &copy; Edition</p>
    </div>
  );

  const renderLocalTime = () => (
    <div className="flex flex-col items-start gap-y-2 lg:gap-y-4">
      <h5 className="text-xs font-semibold uppercase text-white/50 lg:text-sm">
        Local Time
      </h5>
      <p className="text-sm text-white">{time}</p>
    </div>
  );

  const renderSocials = () => (
    <div className="flex flex-col items-start gap-y-2 lg:gap-y-4">
      <h5 className="text-xs font-semibold uppercase text-white/50 lg:text-sm">
        Socials
      </h5>
      <div className="flex items-center gap-x-4">
        {socials.map((social) => (
          <div key={social.name} className="group flex flex-col">
            <Link
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Follow me on ${social.name}`}
              role="link"
              className="text-sm text-white"
            >
              <span className=" mr-1 inline-block translate-y-0.5">
                {social.icon()}
              </span>
              {social.name}
            </Link>

            <span
              className="h-[1px] w-0 bg-white  
                transition-all duration-300 ease-in-out group-hover:w-full"
            />
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <footer className="flex w-full flex-col gap-y-12 bg-[#0d0d0d] bg-stars pb-4 pt-[64px] md:pb-6">
      {/* Header */}
      <header className="master-container flex w-full select-none  justify-start text-white/50">
        <h2 className=" text-[calc(clamp(3.25em,7vw,8em)*0.875)] font-semibold leading-none">
          Designed And Developed <br /> By{" "}
          <LuArrowDownRight className="ml-1 inline-block translate-y-2 lg:ml-2" />
        </h2>
      </header>

      {/* Logo */}
      <section className="master-container relative flex aspect-[401/151] w-full">
        <Image
          src="/logos/ismail-white.svg"
          alt="Ismail Logo"
          fill
          className="master-container"
        />
      </section>

      {/* Footer of Footer */}
      <section className="master-container mt-10 flex w-full flex-col justify-between gap-y-4 md:flex-row">
        <div className="flex items-center justify-between gap-x-8 md:justify-start ">
          {renderVersion()}
          {renderLocalTime()}
        </div>

        {/* horizontal hidden on md screens */}
        <div className="my-4 flex h-[1px] w-full bg-white/50 md:hidden" />

        {renderSocials()}
      </section>
    </footer>
  );
};

export default Footer;
