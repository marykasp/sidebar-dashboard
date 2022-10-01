import React from "react";
import { SSidebar, SLogo, SSearch, SSearchIcon } from "./styles";
import { logoSVG } from "../../assets";

import { AiOutlineSearch } from "react-icons/ai";

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
    </SSidebar>
  );
};

export default Sidebar;
