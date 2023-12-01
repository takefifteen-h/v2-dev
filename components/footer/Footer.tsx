import Image from "next/image";

import { LuArrowDownRight } from "react-icons/lu";
import RenderSocials from "./RenderSocials";
import RenderVersion from "./RenderVersion";
import RenderLocalTime from "./RenderLocalTime";
import FadeInContent from "../FadeInContent";
import SlideInContent from "../SlideInContent";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-y-12 bg-stars pb-4 pt-[64px] md:pb-6">
      {/* Header */}
      <FadeInContent>
        <header className="master-container flex w-full select-none  justify-start text-white/50">
          <h2 className=" text-[calc(clamp(3.25em,7vw,8em)*0.875)] font-semibold leading-none">
            Designed And Developed <br /> By{" "}
            <LuArrowDownRight className="ml-1 inline-block translate-y-2 lg:ml-2" />
          </h2>
        </header>
      </FadeInContent>

      {/* Logo */}
      <SlideInContent delay={0.25}>
        <section className="master-container relative flex aspect-[401/151] w-full">
          <Image
            src="/logos/ismail-white.svg"
            alt="Ismail Logo"
            fill
            className="master-container"
          />
        </section>
      </SlideInContent>

      {/* Bottom of footer  */}
      <section className="master-container mt-10 flex w-full flex-col justify-between gap-y-4 md:flex-row">
        <SlideInContent delay={0.5} className=" md:order-1 order-3">
          <div className="flex items-start md:items-center md:flex-row justify-between gap-x-8 gap-y-4 md:justify-start ">
            <RenderVersion />
            <RenderLocalTime />
          </div>
        </SlideInContent>

        {/* horizontal hidden on md screens */}
        <SlideInContent delay={0.5} className="order-2">
          <div className="my-1 flex h-[1px] w-full bg-white/50 md:hidden " />
        </SlideInContent>

        <SlideInContent delay={0.5}>
          <RenderSocials />
        </SlideInContent>
       
      </section>
    </footer>
  );
};

export default Footer;
