import React from "react";
import FadeInContent from "../FadeInContent";
import Image from "next/image";

import { projects, Project } from "@/constants";
import projectsImg from "../../public/images/icons/projects.svg";

import ProjectCard from "./ProjectCard";

const ProjectsSection = () => {
  return (
    <div className="master-container py-[64px] lg:py-[72px]">
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

      {/* Content */}
      <FadeInContent margin="0px">
        <div className="mt-10 grid grid-cols-1 gap-4 lg:flex lg:flex-wrap">
          {projects.map((project: Project, index: number) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </FadeInContent>
    </div>
  );
};

export default ProjectsSection;
