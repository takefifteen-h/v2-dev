"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

import { Project } from "@/constants";

import ProjectCardButton from "./ProjectCardButton";
import CollapsibleText from "./CollapsibleText"

type ProjectCardProps = Project;

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  mp4,
  webm,
  source_code_link,
  tags,
  live_site_link,
}) => {
  return (
    <motion.div className="sm:grid w-full flex-1 sm:grid-cols-12 gap-6  rounded-2xl bg-teal-400/10 p-5 flex flex-col">

      {/* Video of project */}
      <div className="relative w-full sm:col-span-4">
        <video
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
          className="aspect-square rounded-none object-cover lg:aspect-video"
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
      <div className=" sm:col-span-8">
        {/* description */}
        <div className="mt-5">
          <h3 className="text-[24px] font-bold text-white">{name}</h3>
          {/* <p className="text-white/70 mt-2 text-[14px] ">{description}</p> */}
          <CollapsibleText text={description} size="small" />
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} label={tag.name} />
          ))}
        </div>

        {/* btns to view live site and github code */}
        <div className="mt-4 flex gap-3">
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
