import React from "react";
import FadeInContent from "../FadeInContent";
import Image from "next/image";

import projectsImg from "../../public/images/icons/projects.svg";

const ProjectsSection = () => {
  return (
    <div className="master-container  pt-[64px] lg:pt-[72px]">
      {/* Header */}
      <FadeInContent margin="0px">
        <header className="flex w-full select-none items-center justify-start gap-x-2">
          <div className="relative h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
            <Image src={projectsImg} alt="projects icon" fill />
          </div>
          <h2 className="w-fit text-5xl font-semibold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            projects
          </h2>
        </header>
      </FadeInContent>
    </div>
  );
};

export default ProjectsSection;
