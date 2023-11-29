import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

import { LuArrowDownLeft } from "react-icons/lu";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
};

const CircularContactButton: React.FC<ButtonProps> = ({
  label,
  href,
  ...rest
}) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`group absolute right-0 flex h-[100px] w-[100px]  min-w-max -translate-x-1/4  -translate-y-1/2  items-center justify-center rounded-[50%] bg-[#455ce9] font-medium text-white transition duration-300 ease-in-out hover:bg-[#334bd3] focus:bg-[hsl(232,79%,65%)] focus:outline-none focus:ring-1 active:bg-[#334bd3] md:h-[150px] md:w-[150px]`}
    >
      {label}
      <LuArrowDownLeft className="absolute text-xl md:text-2xl -right-3 -top-5 text-black transition-all duration-500 group-hover:animate-wiggle group-focus:animate-wiggle" />
    </Link>
  );
};

export default CircularContactButton;
