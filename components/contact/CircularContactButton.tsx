import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

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
      className={` absolute right-0 flex h-[calc(clamp(9em,12vw,11em))] w-[calc(clamp(9em,12vw,11em))] min-w-max -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-[50%] bg-[#455ce9] text-white transition duration-300 ease-in-out hover:bg-[#334bd3] focus:bg-[hsl(232,79%,65%)] focus:outline-none focus:ring-1 active:bg-[#334bd3] md:-translate-x-1/4`}
    >
      {label}
    </Link>
  );
};

export default CircularContactButton;
