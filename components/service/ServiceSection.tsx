import React from "react";
import SlideInContent from "../SlideInContent";
import FadeInContent from "../FadeInContent";
import ServiceSectionItem from "./ServiceSectionItem";
import Image from "next/image";

// import serviceImg from "../../public/images/icons/services.svg";
import serviceImg from "../../public/images/icons/icon-2.svg";

const ServiceSection = () => {
  return (
    <section
      id="services"
      aria-label="services"
      className=" flex flex-col gap-y-8 bg-[#fff9f2] py-[64px] text-[#5d3b14] md:gap-y-16 lg:gap-y-24 lg:py-[72px]"
    >
      <FadeInContent className="master-container">
        {/* Header */}
        <header className="flex max-w-full select-none items-center justify-start gap-x-2">
          {/* icon */}
          <div className="relative h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
            <Image src={serviceImg} alt="services icon" fill />
          </div>
          {/* heading */}
          <h2 className="w-fit text-[calc(clamp(3.25em,7vw,8em)*0.875)] font-extrabold capitalize">
            services
          </h2>
        </header>
      </FadeInContent>

      {/* Content */}
      <section className="master-container flex flex-col gap-y-8 md:gap-y-16 lg:gap-y-24">
        <ServiceSectionItem
          header="my expertises."
          paragraph="I focus on all things design and web related. With each of my services, my goal is to deliver an impactful and elevating digital experience for everyone."
          items={[
            "Web Development",
            "Web Design",
            "Wireframing",
            "UI/UX Design",
          ]}
        />

        <ServiceSectionItem
          animationDelay={0.5}
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
    </section>
  );
};

export default ServiceSection;
