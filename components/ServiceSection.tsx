import React from "react";
import ServiceSvg from "./ui/ServiceSvg";
import FadeInContent from "./FadeInContent";

const ServiceSection = () => {
  return (
    <section
      className="section-header master-container my-[10%]"
      aria-label="services"
    >
      {/* Header */}
      <FadeInContent margin="-50px">
        <header className="flex select-none items-center gap-x-2">
          <div className="relative h-[30px] w-[30px] md:h-[36px] md:w-[36px]">
            <ServiceSvg />
          </div>
          <h2 className="sm:text-heading-2 text-secondary-600 w-fit text-5xl font-medium uppercase">
            services
          </h2>
        </header>
      </FadeInContent>
    </section>
  );
};

export default ServiceSection;
