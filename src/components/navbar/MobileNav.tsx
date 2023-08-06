'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import { NavBarProps } from './NavBar';
import NavDrawer from './NavDrawer';
import DarkSwitcher from '../DarkSwitcher';

const MobileNav: FC<NavBarProps> = ({
  className,
  navs,
  handleToggle,
  theme,
}) => {
  return (
    <nav className={'navbar bg-base-100 ' + className}>
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
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image src={'/nika.png'} alt="avatar" width={15} height={15} />
          </div>
        </label>
      </div>
    </nav>
  );
};

export default MobileNav;
