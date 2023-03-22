import { useEffect, useState, useContext } from "react";
import { useRef } from "react";

import { motion } from "framer-motion";

// * React icons
import { IoIosArrowBack } from "react-icons/io";
import { SlSettings } from "react-icons/sl";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { HiOutlineDatabase } from "react-icons/hi";
import { TbReportAnalytics } from "react-icons/tb";
import { RiBuilding3Line } from "react-icons/ri";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation, useRoutes } from "react-router-dom";
import Submenu from "./Submenu";
import { MenuContext } from "../../../context/MenuContext";

const subsubMenuList = [
  {
    name: "Storage",
    icon: RiBuilding3Line,
    menus: ["storage1", "storage2", "storage3", "storage4"],
  },
];

const subMenusList = [
  {
    name: "build",
    icon: RiBuilding3Line,
    menus: ["auth", "app settings", "Storage", "hosting"],
  },
  {
    name: "analytics",
    icon: TbReportAnalytics,
    menus: ["dashboard", "realtime", "events"],
  },
];

// subMenusList[0].menus[2] = subsubMenuList[0];

// export { subMenusList, subsubMenuList };

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width: 768px)" });
  const { isOpen, toggleMenu } = useContext(MenuContext);
  const [open, setOpen] = useState(isTabletMid ? false : true);
  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 40,
            delay: 0.15,
          },
        },
      }
    : {
        open: {
          width: "16rem",
          transition: {
            damping: 40,
          },
        },
        closed: {
          width: "4rem",
          transition: {
            damping: 40,
          },
        },
      };
  
  // const subMenusList = [
  //   {
  //     name: "build",
  //     icon: RiBuilding3Line,
  //     menus: [
  //       "auth",
  //       "app settings",
  //       {
  //         Storage: [
  //           {
  //             name: "Storage",
  //             icon: RiBuilding3Line,
  //             menues: ["storage1", "storage2", "storage3", "storage4"],
  //           },
  //         ],
  //       },
  //       "hosting",
  //     ],
  //   },
  //   {
  //     name: "analytics",
  //     icon: TbReportAnalytics,
  //     menus: ["dashboard", "realtime", "events"],
  //   },
  // ];
  return (
    <div>
      <div
        onClick={toggleMenu}
        // onClick={handleClick}
        className={`md:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        } `}
      ></div>
      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={isOpen ? "open" : "closed"}
        className=" bg-gray-900 text-gray shadow-xl z-[999] max-w-[16rem]  w-[16rem] 
          overflow-hidden md:relative fixed
       h-screen "
      >
        <div className="flex items-center gap-2.5 font-medium border-b py-3 border-slate-300  mx-3">
          <img
            src="https://img.icons8.com/color/512/firebase.png"
            width={45}
            alt=""
          />
          <span className="text-xl text-gray-200 whitespace-pre">FireAgun</span>
        </div>

        <div className="flex flex-col  h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1  font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100   md:h-[68%] h-[70%]">
            <li>
              <NavLink to={"/"} className="link text-gray-200">
                <AiOutlineAppstore
                  size={23}
                  className="min-w-max text-gray-200"
                />
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink to={"/authentication"} className="link text-gray-200">
                <BsPerson size={23} className="min-w-max text-gray-200" />
                User
              </NavLink>
            </li>
            <li>
              <NavLink to={"/stroage"} className="link text-gray-200 ">
                <HiOutlineDatabase
                  size={23}
                  className="min-w-max text-gray-200"
                />
                Stroage
              </NavLink>
            </li>

            {(isOpen || isTabletMid) && (
              <div className="border-y py-5 border-slate-300 ">
                <small className="pl-3 text-slate-400 inline-block mb-2">
                  Product categories
                </small>
                {subMenusList?.map((menu) => (
                  <div
                    key={menu.name}
                    className="flex flex-col gap-1 text-gray-400"
                  >
                    <Submenu data={menu} />
                    {/* {menu.menus?.find((item) => typeof item === "object")
                      ?.Storage && (
                      <div className="flex flex-col gap-1 text-orange-400">
                        <Submenu
                          data={
                            menu.menus.find((item) => typeof item === "object")
                              .Storage[0]
                          }
                        />
                      </div>
                    )} */}
                  </div>
                ))}
              </div>
            )}
            <li>
              <NavLink to={"/settings"} className="link ">
                <SlSettings size={23} className="min-w-max text-gray-200" />
                <p className="text-gray-200">Settings</p>
              </NavLink>
            </li>
          </ul>
          {isOpen && (
            <div className="flex-1 text-sm z-50  max-h-48 my-auto  whitespace-pre   w-full  font-medium  ">
              <div className="flex border-y text-gray-200 border-slate-300 p-4 items-center justify-between">
                <div>
                  <p>Spark</p>
                  <small>No-cost $0/month</small>
                </div>
                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl">
                  Upgrade
                </p>
              </div>
            </div>
          )}
        </div>
        <motion.div
          onClick={() => {
            // setOpen(!open);
            toggleMenu(!isOpen);
          }}
          animate={
            open
              ? {
                  x: 0,
                  y: 0,
                  rotate: 0,
                }
              : {
                  x: -10,
                  y: -200,
                  rotate: 180,
                }
          }
          transition={{ duration: 0 }}
          className="absolute text-gray-300 w-fit h-fit md:block z-50 hidden right-2 bottom-3 cursor-pointer"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>
      {/* <div className="m-3 md:hidden  " onClick={() => setOpen(true)}>
      <MdMenu size={25} />
    </div> */}
    </div>
  );
};

export default Sidebar;
