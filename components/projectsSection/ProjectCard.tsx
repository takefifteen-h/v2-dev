"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { Project } from "@/constants";

import ProjectCardButton from "./ProjectCardButton";
import CollapsibleText from "./CollapsibleText"
import ProjectTitleLink from "./ProjectTitleLink";

type ProjectCardProps = Project & {
  spanFullContainer: boolean,
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  description,
  mp4,
  webm,
  source_code_link,
  tags,
  live_site_link,
  github_repo_link,
  spanFullContainer
}) => {
  const defaultContainerClasses = "border border-gray-200 p-5 w-full flex-1 gap-6 flex flex-col" 
  const fullSpanClasses = "sm:grid sm:grid-cols-12"
  const halfSpanClasses = ""

  return (
    <motion.div className={`${defaultContainerClasses} 
    ${spanFullContainer ? fullSpanClasses : halfSpanClasses}
    `}>

      {/* Video of project */}
      <div className="relative overflow-hidden sm:col-span-5 aspect-video">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="rounded-none object-cover w-full h-full"
        >
          <source src={webm} type="video/webm" />
          <source src={mp4} type="video/mp4" />
        </video>

        <div className="absolute inset-0 m-3 flex justify-end">
          <Link
            href={source_code_link}
            target="_blank"
            className="relative flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-black"
          >
            <Image
              src="/images/github.webp"
              alt="source code"
              className="h-1/2 w-1/2 object-contain"
              fill
            />
          </Link>
        </div>
      </div>

      {/* description and btns*/}
      <div className=" sm:col-span-7">
        {/* description */}
        <div className="mt-5 flex flex-col gap-y-2">
          {/* <h3 className="text-[24px] font-bold text-white">{projectTitle}</h3> */}
          <ProjectTitleLink href={github_repo_link} projectTitle={projectTitle}/>
          <CollapsibleText text={description} size="small" intialOverviewLength={80} />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} label={tag.name} />
          ))}
        </div>

        {/* btns to view live site and github code */}
        <div className="mt-4 flex gap-3 sm:hidden">
          <ProjectCardButton
            label="Source code"
            type="code"
            link={source_code_link}
          />
          {live_site_link && (
            <ProjectCardButton
              label="Live site"
              type="live"
              link={live_site_link}
            />
          )}
        </div>
      </div>
    </motion.div>
  );
};

// badge component that is used in the project card
type BadgeProps = {
  label: string;
};
const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
      {label}
    </div>
  );
};

export default ProjectCard;
