import React from "react";
import Image from "next/image";

import { projects, Project } from "@/constants";

import SlideInContent from "../SlideInContent";
import FadeInContent from "../FadeInContent";
import projectsImg from "../../public/images/icons/projects.svg";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="master-container py-[64px] lg:py-[72px] flex flex-col gap-y-8 md:gap-y-16 lg:gap-y-24">
      {/* Header */}
      <FadeInContent >
        <header className="flex w-full select-none items-center justify-start gap-x-2">
          {/* icon */}
          <div className="relative h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
            <Image src={projectsImg} alt="projects icon" fill />
          </div>

          {/* heading */}
          <h2 className="w-fit font-bold text-[calc(clamp(3.25em,7vw,8em)*0.875)] capitalize">
            projects
          </h2>
        </header>
      </FadeInContent>

      {/* Content */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project: Project, index: number) => (
          <SlideInContent
            key={index}
            delay={index * 0.2}
            className={`box g${index + 1} rounded-lg p-0.5 ${
              index === 0 ? "sm:col-span-full" : "sm:col-span-1"
            }
          ${index === 3 && "sm:col-span-full xl:order-2 xl:col-span-1"}
          `}
          >
            <ProjectCard {...project} index={index + 1} />
          </SlideInContent>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
