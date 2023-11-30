import Link from "next/link";
import React from "react";

type ProjectTitleLinkProps = {
  href: string;
  projectTitle: string;
};

const ProjectTitleLink: React.FC<ProjectTitleLinkProps> = ({
  href,
  projectTitle,
}) => {
  return (
    <h3 className="text-[24px] font-bold text-white">
      <Link
        className="group/link inline-flex w-max items-baseline font-semibold leading-tight  text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label={`link to ${projectTitle} repository`}
      >
        <span>
          {projectTitle}
          <span className="relative ml-1 inline-block -translate-y-0.5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="mx-1 inline-block h-6 w-6 shrink-0 translate-y-px text-teal-300 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none sm:text-inherit"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </span>
      </Link>
    </h3>
  );
};

export default ProjectTitleLink;
