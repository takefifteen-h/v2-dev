import { FC } from "react";
import Link from "next/link";

import { socials } from "@/constants";

type Props = {};

const RenderSocials: FC<Props> = (props: Props) => {
  return (
    <div className="flex flex-col order-1 md:order-3 items-start gap-y-2 lg:gap-y-4">

        <p className="text-xs font-semibold uppercase text-white/50 lg:text-sm">
          Socials
        </p>
      <div className="flex items-center gap-x-4">
        {socials.map((social, index) => (

            <div key={social.name} className="group flex flex-col">
              <Link
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Follow me on ${social.name}`}
                role="link"
                className="text-sm text-white"
              >
                <span className=" mr-1 inline-block translate-y-0.5">
                  {social.icon()}
                </span>
                {social.name}
              </Link>

              <span
                className="h-[1px] w-0 bg-white  
                transition-all duration-300 ease-in-out group-hover:w-full"
              />
            </div>
        ))}
      </div>
    </div>
  );
};

export default RenderSocials;
