import Image from "next/image";

import { LuArrowDownRight } from "react-icons/lu";
import RenderSocials from "./RenderSocials";
import RenderVersion from "./RenderVersion";
import RenderLocalTime from "./RenderLocalTime";

const Footer = () => {
  return (
    <footer className="flex w-full flex-col gap-y-12 bg-stars pb-4 pt-[64px] md:pb-6">
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
          <RenderVersion />

          <RenderLocalTime />
        </div>

        {/* horizontal hidden on md screens */}
        <div className="my-4 flex h-[1px] w-full bg-white/50 md:hidden" />

        <RenderSocials />
      </section>
    </footer>
  );
};

export default Footer;
