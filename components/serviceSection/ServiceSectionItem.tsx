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
    <div className=" mt-8 grid grid-cols-1 gap-y-5 md:mt-16 md:grid-cols-2 md:gap-24 lg:mt-24">
      <div className="flex flex-col gap-y-4">
        {/* Header */}
        <SlideInContent delay={0}>
          <h3 className="text-heading-3 font-medium capitalize leading-tight 2xl:text-7xl">
            {header}
          </h3>
        </SlideInContent>

        <SlideInContent delay={0.5}>
          <p className="text-body-1 max-w-md  xl:max-w-2xl 2xl:text-3xl">
            {paragraph}
          </p>
        </SlideInContent>

        {/* line on sm screens */}
        <SlideInContent delay={0.5} className="flex md:hidden">
          <hr className="bg-accent-100 mt-4 h-1 w-full opacity-50" />
        </SlideInContent>
      </div>

      {/* Content */}
      <div className=" text-secondary-500  select-none leading-[2.3rem] md:leading-[2.5rem] lg:leading-[3.4rem]">
        {items.map((item, index) => (
          <SlideInContent key={index} delay={index * 0.25 + 0.5}>
            <p className="font-general text-special font-extrabold 2xl:text-7xl ">
              {item}
            </p>
          </SlideInContent>
        ))}
      </div>
    </div>
  );
};

export default ServiceSectionItem;
