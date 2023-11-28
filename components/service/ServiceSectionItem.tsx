import React from "react";
import SlideInContent from "../SlideInContent";

interface ServiceSectionItemProps {
  header: string;
  paragraph: string;
  items: string[];
}

const ServiceSectionItem: React.FC<ServiceSectionItemProps> = ({
  header,
  paragraph,
  items,
}) => {
  return (
    <div className=" grid grid-cols-1 gap-y-4 md:grid-cols-2 md:gap-24 ">
      <SlideInContent delay={0.25}>
        <div className="flex flex-col gap-y-2 md:gap-y-4">
          {/* Header */}
            <h3 className="text-heading-3 font-bold capitalize leading-tight 2xl:text-7xl">
              {header}
            </h3>
            <p className="text-body-1 max-w-md  xl:max-w-2xl 2xl:text-3xl">
              {paragraph}
            </p>
        </div>
      </SlideInContent>

        {/* line on sm screens */}
        <SlideInContent delay={0.5} className="flex md:hidden">
          <hr className="bg-[#5d3b14] h-1 w-full opacity-50" />
        </SlideInContent>

      {/* Content */}
      <div className=" text-[#5d3b14] select-none leading-[2.3rem] md:leading-[2.5rem] lg:leading-[3.4rem]">
        {items.map((item, index) => (
          <SlideInContent key={index} delay={index * 0.25 + 0.5} direction="slideLeft">
            <p className="font-general text-special font-semibold 2xl:text-7xl ">
              {item}
            </p>
          </SlideInContent>
        ))}
      </div>
    </div>
  );
};

export default ServiceSectionItem;
