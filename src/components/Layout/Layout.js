import React from "react";
import { SLayout, SMain } from "./styles";
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";

const Layout = ({ children }) => {
  return (
    <SLayout>
      <Sidebar />
      <SMain>
        <Navbar />
        {children}
      </SMain>
    </SLayout>
  );
};

export default Layout;
