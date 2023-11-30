import Link from "next/link";

type NavLinkProps = {
  href: string;
  icon: React.ReactNode;
  text: string;
};

const NavLink: React.FC<NavLinkProps> = ({ href, icon, text }) => {
  return (
    <div className="group flex flex-col">
      <Link
        href={href}
        className="transition-color relative flex items-center gap-x-1.5 text-base text-[rgb(251,251,254)]"
        aria-label={text}
      >
        <span aria-hidden="true" className="">
          {icon}
        </span>
        <span>{text}</span>
      </Link>
      <span
        className="h-[1px] w-0 bg-[rgb(251,251,254)]  
      transition-all duration-300 ease-in-out group-hover:w-full"
      />
    </div>
  );
};

export default NavLink;
