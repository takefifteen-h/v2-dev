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
      className="relative flex items-center gap-x-1.5 text-base opacity-80 transition-opacity hover:opacity-100"
      aria-label={text}
    >
      <span aria-hidden="true">{icon}</span>
      <span>{text}</span>
    </Link>
  );
};

export default NavLink;
