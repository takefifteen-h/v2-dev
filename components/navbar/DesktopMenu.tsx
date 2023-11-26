import React from "react";

import { PiHouse as Home } from "react-icons/pi";
import { IoPersonOutline as About } from "react-icons/io5";
import {
  LuTarget as Target,
  LuPhone as Phone,
  LuMail as Mail,
} from "react-icons/lu";
import NavLink from "./NavLink";

const DesktopMenu = () => {
  return (
    <ul className="flex items-center justify-between space-x-6">
      <li>
        <NavLink href="/" icon={<Home />} text="Home" />
      </li>
      <li>
        <NavLink href="#about" icon={<About />} text="About" />
      </li>
      <li>
        <NavLink href="#projects" icon={<Target />} text="Projects" />
      </li>
      <li>
        <NavLink href="#contact" icon={<Phone />} text="Contact" />
      </li>
    </ul>
  );
};

export default DesktopMenu;
