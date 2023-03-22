import React, { useContext } from "react";
import {
  FiSearch,
  FiMoon,
  FiSun,
  FiMail,
  FiBell,
  FiUser,
} from "react-icons/fi";
import { MdMenu } from "react-icons/md";
import { MenuContext } from "../../../context/MenuContext";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = React.useState(false);

  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
    // Add logic to toggle dark mode here
  };
  const { toggleMenu } = useContext(MenuContext);

  return (
    <nav className="bg-gray-900 text-white h-16 w-full flex items-center justify-between px-2 md:px-2">
      {/* Left Sidebar */}
      <div className="flex items-center">
        <div
          className="w-8 h-8 bg-gray-600 flex p-2 rounded-full mr-3 focus:bg-gray-400 hover:bg-gray-500"
          onClick={toggleMenu}
        >
          {" "}
          <MdMenu />
        </div>

        <div className="text-lg font-bold pl-2"> Dashboard</div>
      </div>

      {/* Search Bar */}
      {/* <div className="flex-grow lg:mx-24 mx:4 lg:w-[70px]">
        <div className="relative text-gray-500 focus-within:text-gray-400">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <FiSearch />
          </span>
          <input
            type="text"
            className="block w-full py-2 pl-10 pr-3 rounded-md placeholder-gray-400 bg-gray-800 focus:outline-none focus:bg-gray-700 focus:ring-0 focus:border-gray-700"
            placeholder="Search..."
          />
        </div>
      </div> */}

      {/* Right Side */}
      <div className="flex items-center">
        {/* Darkmode/Lightmode toggle */}
        <button
          className="flex items-center justify-center h-10 w-10 rounded-full text-gray-400 hover:text-white transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
          onClick={handleToggleDarkMode}
        >
          {isDarkMode ? <FiSun /> : <FiMoon />}
        </button>

        {/* Message Button */}
        <button className="flex items-center ml-4 h-10 w-10 rounded-full text-gray-400 hover:text-white transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <FiMail />
        </button>

        {/* Notification Button */}
        <button className="flex items-center ml-4 h-10 w-10 rounded-full text-gray-400 hover:text-white transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <FiBell />
        </button>

        {/* Profile Button */}
        <button className="flex items-center ml-4 h-10 w-10 rounded-full text-gray-400 hover:text-white transition duration-150 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
          <FiUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
