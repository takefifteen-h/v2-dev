import React from "react";
import Image from "next/image";

import { projects, Project } from "@/constants";

import SlideInContent from "../SlideInContent";
import projectsImg from "../../public/images/icons/projects.svg";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <div className="master-container py-[64px] lg:py-[72px]">
      {/* Header */}
      <SlideInContent>
        <header className="flex w-full select-none items-center justify-start gap-x-2">
          <div className="relative h-[30px] w-[30px] md:h-[48px] md:w-[48px] lg:h-[56px] lg:w-[56px]">
            <Image src={projectsImg} alt="projects icon" fill />
          </div>
          <h2 className="w-fit text-5xl font-semibold uppercase md:text-6xl lg:text-7xl xl:text-8xl">
            projects
          </h2>
        </header>
      </SlideInContent>

      {/* Content */}
      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
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
