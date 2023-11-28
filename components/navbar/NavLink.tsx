import Link from "next/link";

type NavLinkProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text }) => {
  return (
    <Link
      href={href}
      className="transition-color relative flex items-center gap-x-1.5 text-base text-[rgb(155,150,176)] hover:text-[rgb(251,251,254)]"
      aria-label={text}
    >
      <span aria-hidden="true" className="">
        {icon}
      </span>
      <span>{text}</span>
    </Link>
  );
};

export default NavLink;
