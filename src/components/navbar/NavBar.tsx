import React, { ComponentProps } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
const navs = ['Home', 'Catalog', 'About Us'];
export type NavBarProps = {
  navs: string[];
} & ComponentProps<'nav'>;
const NavBar = () => {
  return (
    <>
      <DesktopNav navs={navs} className="hidden md:inline-flex bg-blue-600" />
      <MobileNav navs={navs} className="md:hidden bg-blue-600" />
    </>
  );
};

export default NavBar;
