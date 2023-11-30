import React from "react";

import { IoPersonOutline as About } from "react-icons/io5";
import {
  LuTarget as Target,
  LuPhone as Phone,
  LuMail as Mail,
} from "react-icons/lu";
import { PiHandshake } from "react-icons/pi";
import NavLink from "./NavLink";
import FadeInContent from "../FadeInContent";

const DesktopMenu = () => {
  return (
    <ul className="flex items-center justify-between space-x-6">
      <li>
        <FadeInContent>
          <NavLink href="#about" icon={<About />} text="About" aria-label="About section" />
        </FadeInContent>
      </li>
      <li>
        <FadeInContent delay={0.25}>
          <NavLink href="#services" icon={<PiHandshake />} text="Services" aria-label="Services section" />
        </FadeInContent>
      </li>
      <li>
        <FadeInContent delay={0.5}>
          <NavLink href="#projects" icon={<Target />} text="Projects" aria-label="Projects section" />
        </FadeInContent>
      </li>
      <li>
        <FadeInContent delay={0.75}>
          <NavLink href="#contact" icon={<Phone />} text="Contact" aria-label="Contact section" />
        </FadeInContent>
      </li>
    </ul>
  );
};

export default DesktopMenu;