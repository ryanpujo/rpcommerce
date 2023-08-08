'use client';
import React, { FC } from 'react';
import { NavBarProps } from './NavBar';
import NavDrawer from './NavDrawer';
import DarkSwitcher from '../DarkSwitcher';
import DropdownAvatar from '../DropdownAvatar';

const MobileNav: FC<NavBarProps> = ({
  className,
  navs,
  handleToggle,
  theme,
}) => {
  return (
    <nav className={'navbar bg-blue-600 ' + className}>
      <NavDrawer
        theme={theme}
        handleToggle={handleToggle}
        navs={navs}
        className="navbar-start"
      />
      <div className="navbar-center text-white">RProjects</div>
      <div className="navbar-end">
        <DarkSwitcher
          theme={theme}
          handleToggle={handleToggle}
          className="text-white mr-2"
        />
        <DropdownAvatar />
      </div>
    </nav>
  );
};

export default MobileNav;
