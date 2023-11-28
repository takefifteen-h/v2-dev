import React from "react";
import FadeInContent from "../FadeInContent";

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
        <FadeInContent delay={0}>
          <h3 className="text-heading-3 font-medium capitalize leading-tight 2xl:text-7xl">
            {header}
          </h3>
        </FadeInContent>

        <FadeInContent delay={0.5} margin="0px">
          <p className="text-body-1 max-w-md  xl:max-w-2xl 2xl:text-3xl">
            {paragraph}
          </p>
        </FadeInContent>

        {/* line on sm screens */}
        <FadeInContent delay={0.5} margin="0px" className="flex md:hidden">
          <hr className="bg-accent-100 mt-4 h-1 w-full opacity-50" />
        </FadeInContent>
      </div>

      {/* Content */}
      <div className=" text-secondary-500  select-none leading-[2.3rem] md:leading-[2.5rem] lg:leading-[3.4rem]">
        {items.map((item, index) => (
          <FadeInContent key={index} delay={index * 0.25 + 0.5} margin="0px">
            <p className="font-general text-special font-extrabold 2xl:text-7xl ">
              {item}
            </p>
          </FadeInContent>
        ))}
      </div>
    </div>
  );
};

export default ServiceSectionItem;
