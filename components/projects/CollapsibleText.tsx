"use client";

import { useState } from "react";

interface CollapsibleTextProps {
  text: string;
  intialOverviewLength?: number;
  size?: "body" | "small";
}

const CollapsibleText: React.FC<CollapsibleTextProps> = ({
  text,
  intialOverviewLength = 100, // max text length to display initially
  size = "body",
}) => {
  const [showFullText, setShowFullText] = useState(false);

  const toggleText = () => {
    setShowFullText(!showFullText);
  };

  return (
    <div className="group  sm:max-w-[30rem]  lg:max-w-[36rem] lg:tracking-wider">
      <p
        className={`${
          size === "body"
            ? "font-body-text text-white"
            : "font-small-text text-gray-400"
        } tracking-wide `}
      >
        {showFullText
          ? text
          : `${text.slice(0, intialOverviewLength)}${
              text.length > intialOverviewLength ? "..." : ""
            }`}

        {/* dont show read more if the initialOverviewlength
              is greater than or equal to the length of the text
            */}
        {text.length > intialOverviewLength && (
          <button
            className={`${
              size === "body"
                ? "font-small-text text-gray-400"
                : "font-extra-small-text text-white"
            } ml-1 cursor-pointer hover:underline hover:underline-offset-1 `}
            onClick={toggleText}
            aria-expanded={showFullText ? "true" : "false"}
            aria-controls="expandable-text"
          >
            {showFullText ? "Read less" : "Read more"}
          </button>
        )}
      </p>
    </div>
  );
};

export default CollapsibleText;
