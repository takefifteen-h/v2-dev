import React from "react";

import { Project } from "@/constants";

import ProjectCardButton from "./ProjectCardButton";
import CollapsibleText from "./CollapsibleText";
import ProjectTitleLink from "./ProjectTitleLink";
import VideoLoader from "./VideoLoader";

type ProjectCardProps = Project & {
  index: number;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  description,
  mp4,
  webm,
  source_code_link,
  tags,
  live_site_link,
  index,
}) => {
  const defaultContainerClasses =
    "bg-[rgb(14,14,14)] rounded-lg p-5 w-full h-full flex-1 gap-6 flex flex-col";
  const halfSpanClasses = "";

  const firstProjectClasses = "sm:grid sm:grid-cols-12";
  const lastProjectClasses = "sm:grid sm:grid-cols-12 xl:flex xl:flex-col";

  return (
    <article
      className={`${defaultContainerClasses} 
    ${index === 1 && firstProjectClasses}
    ${index === 4 ? lastProjectClasses : halfSpanClasses}
    `}
    >
      {/* Video of project */}
      <div className="relative aspect-video overflow-hidden sm:col-span-5">
       <VideoLoader mp4={mp4} webm={webm}/>
      </div>

      {/* description and btns*/}
      <div className=" sm:col-span-7">
        {/* description */}
        <div className="flex flex-col gap-y-2">
          <ProjectTitleLink
            href={source_code_link}
            projectTitle={projectTitle}
          />
          <div className="mb-2 flex -translate-x-0.5 flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} label={tag.name} />
            ))}
          </div>
          <CollapsibleText
            text={description}
            size="small"
            intialOverviewLength={80}
          />
        </div>

        {/* btns to view live site and github code */}
        <div className="mt-4 flex gap-3">
          <ProjectCardButton type="code" link={source_code_link} />
          {live_site_link && (
            <ProjectCardButton type="live" link={live_site_link} />
          )}
        </div>
      </div>
    </article>
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
