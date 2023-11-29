import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-stars bg-[#0d0d0d] pt-[64px]">
      <section className="master-container relative flex aspect-[401/151] min-h-[100px]  ">
        <Image
          src={"/logos/ismail-white.svg"}
          alt="Ismail Logo"
          fill
          className=""
        />
      </section>
    </footer>
  );
};

export default Footer;
