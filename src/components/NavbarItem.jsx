import React, {useState} from "react";
import { Avatar, Dropdown, Navbar } from "flowbite-react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import DrawerItem from "./DrawerItem";

const NavbarItem = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  return (
    <>
      <Navbar fluid rounded className="custom-fixed-navbar">
        <HiOutlineMenuAlt2
          size="24"
          className="custom-icon-navbar"
          onClick={() => setDrawerOpen(true)}
        />
        <DrawerItem isOpen={isDrawerOpen} handleClose={handleDrawerClose}/>
        <Navbar.Brand href="https://flowbite-react.com">
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            Dashboard Admin
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Bonnie Green</span>
              <span className="block truncate text-sm font-medium">
                name@flowbite.com
              </span>
            </Dropdown.Header>
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        {/* <Navbar.Collapse>
        
      </Navbar.Collapse> */}
      </Navbar>
    </>
  );
};

export default NavbarItem;
