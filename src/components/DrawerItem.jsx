import React, { useState } from "react";
import { Button, Drawer, Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiChartPie,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiBadgeCheck,
  HiChevronDown,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const DrawerItem = ({ isOpen, handleClose }) => {
  const [isOpenDropdown, setIsOpenDropdown] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsOpenDropdown(!isOpenDropdown);
  };
  return (
    <>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="Dashboard Admin" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <div className="flex items-center text-lg font-semibold mb-5">
                      <h1>Apridev Store</h1>
                      <HiBadgeCheck className="ml-1" color="blue" />
                    </div>

                    <div className="text-sm text-gray-500">
                      <h2>GENERAL</h2>
                    </div>

                    <li>
                      <a
                        onClick={() => navigate("/dashboard")}
                        className="cursor-default flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <HiChartPie size="24" color="gray" />
                        <span className="ms-3">Dashboard</span>
                      </a>
                    </li>

                    <div className="text-sm text-gray-500">
                      <h2>EXAMPLE</h2>
                    </div>

                    <li>
                      <button
                        type="button"
                        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                        aria-controls="dropdown-example"
                        data-collapse-toggle="dropdown-example"
                        onClick={toggleDropdown}
                      >
                        <HiShoppingBag size="24" color="gray" />
                        <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">
                          E-commerce
                        </span>
                        <HiChevronDown size="24" color="gray" />
                      </button>
                      <ul
                        id="dropdown-example"
                        className={`${
                          isOpenDropdown ? "block" : "hidden"
                        } py-2 space-y-2`}
                      >
                        <li>
                          <a
                            onClick={() => navigate("/product")}
                            className="flex items-center w-full cursor-pointer p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                          >
                            Products
                          </a>
                        </li>
                      </ul>
                    </li>

                    <li>
                      <a
                        onClick={() => navigate("/table")}
                        className="flex cursor-default items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <HiTable size="24" color="gray" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Table
                        </span>
                        <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-full dark:bg-gray-700 dark:text-gray-300">
                          Pro
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => navigate("/profile")}
                        className="flex items-center cursor-default p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <HiUser size="24" color="gray" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Profile
                        </span>
                        <span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                          3
                        </span>
                      </a>
                    </li>

                    <div className="text-sm text-gray-500">
                      <h2>ABOUT</h2>
                    </div>

                    <li>
                      <a
                        onClick={() => navigate("/")}
                        className="flex items-center cursor-default p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <FaGithub size="24" color="gray" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Github
                        </span>
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => navigate("/")}
                        className="flex cursor-default items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                      >
                        <HiArrowSmRight size="24" color="gray" />
                        <span className="flex-1 ms-3 whitespace-nowrap">
                          Log Out
                        </span>
                      </a>
                    </li>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default DrawerItem;
