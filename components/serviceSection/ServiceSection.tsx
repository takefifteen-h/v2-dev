import React from "react";
import FadeInContent from "../FadeInContent";
import ServiceSectionItem from "./ServiceSectionItem";
import Image from "next/image";

import serviceImg from "../../public/images/icons/services.svg";

const ServiceSection = () => {
  return (
    <div className="master-container  py-[64px] lg:py-[72px]">
      {/* Header */}
      <FadeInContent margin="0px">
        <header className="flex w-full select-none items-center justify-start gap-x-2">
          <div className="relative h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
            <Image src={serviceImg} alt="services icon" fill />
          </div>
          <h2 className="w-fit text-5xl font-semibold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            services
          </h2>
        </header>
      </FadeInContent>

      {/* Content */}
      <ServiceSectionItem
        header="my expertises."
        paragraph="I focus on all things design and web related. With each of my services, my goal is to deliver an impactful and elevating digital experience for everyone."
        items={["Web Development", "Web Design", "Wireframing", "UI/UX Design"]}
      />

      <ServiceSectionItem
        header=" my digital tool box."
        paragraph=" These are my go to tech stack to make any projects happen. I am
          always eager of learning more about my current stack, and new
          technologies that could expand my horizons."
        items={[
          "JavaScript",
          "TypeScript",
          "HTML",
          "TailwindCSS",
          "NodeJS",
          "ReactJS",
          "NextJS",
          "MongoDB",
        ]}
      />
    </div>
  );
};

export default ServiceSection;
