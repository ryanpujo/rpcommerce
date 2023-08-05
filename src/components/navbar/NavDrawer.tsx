import React, { FC } from 'react';
import { NavBarProps } from './NavBar';
import { GiHamburgerMenu } from 'react-icons/gi';

const NavDrawer: FC<NavBarProps> = ({ className, navs }) => {
  return (
    <div className={'drawer ' + className}>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost btn-circle text-white drawer-button"
        >
          <GiHamburgerMenu />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-60 h-full bg-base-200 text-base-content">
          {/* Sidebar content here */}
          <div className=" flex justify-center">
            <h3 className="text-lg text-white">RProjects</h3>
          </div>
          <div className="divider"></div>
          {navs.map((nav) => (
            <li key={nav}>
              <a href="#">{nav}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavDrawer;
