import React from "react";
import {
  SSidebar,
  SLogo,
  SSearch,
  SSearchIcon,
  SDivider,
  SLinkContainer,
  SLink,
  SLinkIcon,
  SLinkLabel,
  SLinkNotification,
} from "./styles";
import { logoSVG } from "../../assets";

import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { BsFillBriefcaseFill } from "react-icons/bs";
const linksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
    notifications: 0,
  },
  {
    label: "Projects",
    icon: <BsFillBriefcaseFill />,
    to: "/projects",
    notifications: 0,
  },
  {
    label: "Data",
    icon: <MdOutlineAnalytics />,
    to: "/data",
    notifications: 0,
  },
];
const Sidebar = () => {
  return (
    <SSidebar>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch>
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input type="text" placeholder="Search" />
      </SSearch>
      <SDivider />

      {linksArray.map((link) => (
        <SLinkContainer key={link.label}>
          <SLink to={link.to}>
            <SLinkIcon>{link.icon}</SLinkIcon>
            <SLinkLabel>{link.label}</SLinkLabel>
            <SLinkNotification>{link.notifications}</SLinkNotification>
          </SLink>
        </SLinkContainer>
      ))}
    </SSidebar>
  );
};

export default Sidebar;
