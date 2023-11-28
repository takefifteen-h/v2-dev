import React from "react";

import { IoPersonOutline as About } from "react-icons/io5";
import {
  LuTarget as Target,
  LuPhone as Phone,
  LuMail as Mail,
} from "react-icons/lu";
import { PiHandshake } from "react-icons/pi";
import NavLink from "./NavLink";
import SlideInContent from "../SlideInContent";

const DesktopMenu = () => {
  return (
    <ul className="flex items-center justify-between space-x-6">
      <li>
        <SlideInContent>
          <NavLink href="#about" icon={<About />} text="About" />
        </SlideInContent>
      </li>
      <li>
        <SlideInContent delay={0.25}>
          <NavLink href="#services" icon={<PiHandshake />} text="Services" />
        </SlideInContent>
      </li>
      <li>
        <SlideInContent delay={0.5}>
          <NavLink href="#projects" icon={<Target />} text="Projects" />
        </SlideInContent>
      </li>
      <li>
        <SlideInContent delay={0.75}>
          <NavLink href="#contact" icon={<Phone />} text="Contact" />
        </SlideInContent>
      </li>
    </ul>
  );
};

export default DesktopMenu;
