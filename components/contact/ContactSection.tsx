import React from "react";
import CircularContactButton from "./CircularContactButton";

const ContactSection = () => {
  return (
    <section className="master-container py-[64px]">
      <h2 className="pb-[calc(clamp(5rem,21vh,12rem)*.475)] text-[calc(clamp(3.25em,7vw,8em)*0.875)] leading-none">
        Let&apos;s work <br /> together
      </h2>

      <div className="relative">
        <hr className="h-0.5 w-full bg-[#5d3b14] opacity-50" />
        <CircularContactButton
          label="Contact Me"
          href="#"
          aria-label="contact me"
        />
      </div>
    </section>
  );
};

export default ContactSection;
