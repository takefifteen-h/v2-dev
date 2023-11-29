import React from "react";
import Image from "next/image";

import projectsImg from "../../public/images/icons/icon-3.svg";
import CircularContactButton from "./CircularContactButton";
import ContactEmailLink from "./ContactEmailLink";

const ContactSection = () => {
  return (
    <section className="master-container py-[64px]">

<header className="flex w-full select-none items-start justify-start gap-x-2 pb-[calc(clamp(5rem,21vh,12rem)*.475)]">
          {/* icon */}
          <div className="relative translate-y-2 h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
            <Image src={projectsImg} alt="projects icon" fill />
          </div>
      <h2 className=" font-bold text-[calc(clamp(3.25em,7vw,8em)*0.875)] leading-none">
        Let&apos;s <br/> work together
      </h2>
      </header>

      <div className="relative">
        <hr className="h-0.5 w-full bg-[#000000] opacity-50" />
        <CircularContactButton
          label="Contact Me"
          href="#"
          aria-label="contact me"
        />
      </div>

      <ContactEmailLink
        label="shaikhnagismail@gmail.com"
        href="mailto:shaikhnagismail@gmail.com"
        aria-label="email"
      />
    </section>
  );
};

export default ContactSection;
