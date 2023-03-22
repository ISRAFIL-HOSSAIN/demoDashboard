import React, { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";

import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

const MainLayout = ({ children }) => {
  const { toggleMenu } = useContext(MenuContext);
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      <Sidebar />
      <Navbar toggleMenu={toggleMenu} />
      <main className="max-w-5xl flex-1 mx-auto py-4">{children}</main>
    </div>
  );
};

export default MainLayout;
