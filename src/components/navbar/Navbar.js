import React, { useContext } from "react";
import { SNavbar, SNavbarItem, SNavbarList } from "./styles";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { sidebarOpen } = useContext(ThemeContext);
  return (
    <SNavbar isOpen={sidebarOpen}>
      <SNavbarList>
        <SNavbarItem></SNavbarItem>
      </SNavbarList>
    </SNavbar>
  );
};

export default Navbar;
