import React from "react";
import FadeInContent from "../FadeInContent";
import ServiceSectionItem from "./ServiceSectionItem";
import Image from "next/image";

const ServiceSection = () => {
  return (
    <section
      className="section-header master-container my-[10%]"
      aria-label="services"
    >
      {/* Header */}
      <FadeInContent margin="0px">
        <header className="flex select-none items-center gap-x-2">
          <div className="relative h-[30px] w-[30px] md:h-[36px] md:w-[36px]">
            <Image src="images/icons/icon-1.svg" alt="services icon" fill />
          </div>
          <h2 className="sm:text-heading-2 w-fit text-5xl font-medium uppercase">
            services
          </h2>
        </header>
      </FadeInContent>

      {/* Content */}
      <div className="space-y-14">
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
    </section>
  );
};

export default ServiceSection;
