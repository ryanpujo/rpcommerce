'use client';
import Image from 'next/image';
import React, { FC } from 'react';
import { NavBarProps } from './NavBar';
import NavDrawer from './NavDrawer';

const MobileNav: FC<NavBarProps> = ({ className, navs }) => {
  return (
    <div>
      <nav className={'navbar bg-base-100 ' + className}>
        <NavDrawer navs={navs} className="navbar-start" />
        <div className="navbar-center text-white">RProjects</div>
        <div className="navbar-end">
          <label className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <Image src={'/nika.png'} alt="avatar" width={15} height={15} />
            </div>
          </label>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
