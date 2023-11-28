import React from "react";
import SlideInContent from "../SlideInContent";
import FadeInContent from "../FadeInContent";
import ServiceSectionItem from "./ServiceSectionItem";
import Image from "next/image";

// import serviceImg from "../../public/images/icons/services.svg";
import serviceImg from "../../public/images/icons/icon-2.svg";

const ServiceSection = () => {
  return (
    <div className="master-container py-[64px] lg:py-[72px] flex flex-col gap-y-8 md:gap-y-16 lg:gap-y-24">
        <FadeInContent >
      {/* Header */}
      <header className="flex max-w-full select-none items-center justify-start gap-x-2">
            {/* icon */}
            <div className="relative h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
              <Image src={serviceImg} alt="services icon" fill />
            </div>
            {/* heading */}
            <h2 className="w-fit text-5xl font-extrabold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
              services
            </h2>
      </header>
        </FadeInContent>

      {/* Content */}
      <section className="flex flex-col gap-y-8 md:gap-y-16 lg:gap-y-24"> 
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
      </section>
    </div>
  );
};

export default ServiceSection;
