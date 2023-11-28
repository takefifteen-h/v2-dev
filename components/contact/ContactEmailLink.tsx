import Link from "next/link";
import React, { AnchorHTMLAttributes } from "react";

import { LuSend } from "react-icons/lu";

type ButtonProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  label: string;
  href: string;
};

const ContactEmailLink: React.FC<ButtonProps> = ({ label, href, ...rest }) => {
  return (
    <Link
      href={href}
      {...rest}
      className={`group mt-[calc(clamp(5rem,21vh,12rem)*.475)] flex h-[4.5rem] w-max items-center justify-center rounded-[2.125rem] border border-black bg-black px-4 font-medium text-white outline-none transition duration-300 ease-in-out focus:ring focus:ring-[rgb(251,251,254)] focus:ring-opacity-70 md:px-8`}
    >
      <LuSend className="mr-2 text-[rgb(155,150,176)] transition-all duration-500 group-hover:rotate-[-12deg] group-hover:text-[rgb(251,251,254)] group-focus:rotate-[-12deg] group-focus:text-[rgb(251,251,254)]" />
      {label}
    </Link>
  );
};

export default ContactEmailLink;

/* 
hover:bg-black hover:text-white focus:bg-black focus:text-white focus:outline-none focus:ring-1 active:bg-black active:text-white
*/
