import React from "react";
import NavbarItem from "./NavbarItem";
import SidebarItem from "./SidebarItem";
import FooterItem from "./FooterItem";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <div className="hidden lg:block custom-width">
          <SidebarItem />
        </div>
        <div className="flex-1 bg-slate-50 flex flex-col">
        <NavbarItem />
        {/* setting pedding content */}
          <main className="p-3 flex-grow">{children}</main>
          <FooterItem/>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
