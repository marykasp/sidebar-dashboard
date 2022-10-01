import React, { useContext, useRef, useState } from "react";
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
  SSidebarButton,
} from "./styles";
import { logoSVG } from "../../assets";

import {
  AiOutlineSearch,
  AiOutlineHome,
  AiOutlineSetting,
  AiOutlineLeft,
} from "react-icons/ai";
import { MdLogout, MdOutlineAnalytics } from "react-icons/md";
import {
  BsFillBriefcaseFill,
  BsDiagram2,
  BsMoonStars,
  BsSun,
  // BsFillArrowDownLeftSquareFill,
} from "react-icons/bs";
import { ThemeContext } from "./../../App";
import { useLocation } from "react-router-dom";

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
  const searchRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { pathname } = useLocation();

  const handleSearchClick = () => {
    if (!sidebarOpen) {
      setSidebarOpen(true);
      // focus on input
      searchRef.current.focus();
    } else {
      // search functionality
    }
  };
  return (
    <SSidebar isOpen={sidebarOpen}>
      <>
        <SSidebarButton
          isOpen={sidebarOpen}
          onClick={() => setSidebarOpen((prevState) => !prevState)}
        >
          <AiOutlineLeft />
        </SSidebarButton>
      </>
      <SLogo>
        <img src={logoSVG} alt="logo" />
      </SLogo>
      <SSearch
        onClick={handleSearchClick}
        style={!sidebarOpen ? { width: "fit-content" } : {}}
      >
        <SSearchIcon>
          <AiOutlineSearch />
        </SSearchIcon>
        <input
          ref={searchRef}
          type="text"
          placeholder="Search"
          style={!sidebarOpen ? { width: 0, padding: 0 } : {}}
        />
      </SSearch>
      <SDivider />

      {linksArray.map((link) => (
        <SLinkContainer key={link.label} isActive={pathname === link.to}>
          <SLink
            to={link.to}
            style={!sidebarOpen ? { width: "fit-content" } : {}}
          >
            <SLinkIcon>{link.icon}</SLinkIcon>
            {sidebarOpen && (
              <>
                <SLinkLabel>{link.label}</SLinkLabel>
                {!!link.notifications && (
                  <SLinkNotification>{link.notifications}</SLinkNotification>
                )}
              </>
            )}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      {secondaryLinksArray.map((link) => (
        <SLinkContainer key={link.label}>
          <SLink to="/" style={!sidebarOpen ? { width: "fit-content" } : {}}>
            <SLinkIcon>{link.icon}</SLinkIcon>
            {sidebarOpen && <SLinkLabel>{link.label}</SLinkLabel>}
          </SLink>
        </SLinkContainer>
      ))}
      <SDivider />
      <STheme>
        {sidebarOpen && (
          <SThemeLabel>
            {theme === "light" ? (
              <BsMoonStars isActive={theme === "dark"} />
            ) : (
              <BsSun isActive={theme === "dark"} />
            )}
          </SThemeLabel>
        )}

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
