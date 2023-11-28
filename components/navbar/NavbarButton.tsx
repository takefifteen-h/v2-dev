// Button.tsx

import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

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
      } bg-blue-500 px-4 py-2 text-white transition duration-300 ease-in-out hover:bg-blue-600 focus:border-blue-300 focus:outline-none focus:ring active:bg-blue-700`}
    >
      {label}
    </Link>
  );
};

export default NavbarButton;
