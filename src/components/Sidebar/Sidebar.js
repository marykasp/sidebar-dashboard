import React, { useContext } from "react";
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
  STheme,
  SThemeLabel,
  SThemeToggler,
  SToggleThumb,
} from "./styles";
import { logoSVG } from "../../assets";

import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import { BsFillBriefcaseFill, BsDiagram2 } from "react-icons/bs";
import { ThemeContext } from "./../../App";
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
    notifications: 1,
  },
  {
    label: "Data",
    icon: <MdOutlineAnalytics />,
    to: "/data",
    notifications: 3,
  },
  {
    label: "Diagrams",
    icon: <BsDiagram2 />,
    to: "/diagrams",
    notifications: 0,
  },
];

const secondaryLinksArray = [
  {
    label: "Settings",
    icon: <AiOutlineSetting />,
  },
  {
    label: "Logout",
    icon: <MdLogout />,
  },
];
const Sidebar = () => {
  const { theme, setTheme } = useContext(ThemeContext);
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
            {!!link.notifications && (
              <SLinkNotification>{link.notifications}</SLinkNotification>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map((link) => (
        <SLinkContainer key={link.label}>
          <SLink to="/">
            <SLinkIcon>{link.icon}</SLinkIcon>
            <SLinkLabel>{link.label}</SLinkLabel>
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        <SThemeLabel>Dark Mode</SThemeLabel>
        <SThemeToggler
          isActive={theme === "dark"}
          onClick={() =>
            setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"))
          }
        >
          <SToggleThumb style={theme === "dark" ? { right: "1px" } : {}} />
        </SThemeToggler>
      </STheme>
    </SSidebar>
  );
};

export default Sidebar;
