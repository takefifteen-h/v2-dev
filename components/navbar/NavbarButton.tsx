// Button.tsx

import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

import { LuMail } from "react-icons/lu";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
  rounded?: boolean;
};

const NavbarButton: React.FC<ButtonProps> = ({
  label,
  href,
  rounded = true,
  ...rest
}) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`${
        rounded ? "rounded-full" : "rounded-md"
      } bg-[#455ce9] px-3 py-2 text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-[#334bd3] focus:border-blue-300 focus:outline-none focus:ring active:bg-[#334bd3]`}
    >
      <LuMail className="mr-2 inline-block -translate-y-[1px]" />
      {label}
    </Link>
  );
};

export default NavbarButton;
