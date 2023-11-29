import React from "react";
import Image from "next/image";

import selfImg from "../../public/logos/ismail-white.svg";
// import starsBg from "../../public/images/stars.svg";

const Footer = () => {
  return (
    <footer className="bg-stars bg-[rgb(0,0,0)] pt-[64px]">
      <section className=" relative flex aspect-[401/151] min-h-[100px]  ">
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
