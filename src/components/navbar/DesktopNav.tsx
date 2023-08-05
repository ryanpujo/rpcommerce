import React, { FC } from 'react';
import { NavBarProps } from './NavBar';
import Image from 'next/image';

const DesktopNav: FC<NavBarProps> = ({ className, navs }) => {
  return (
    <nav className={'navbar bg-base-100 ' + className}>
      <div className="navbar-start text-white">RProjects</div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal text-white">
          {navs.map((nav) => (
            <li key={nav}>
              <a href="#">{nav}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <label className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image src={'/nika.png'} alt="avatar" width={15} height={15} />
          </div>
        </label>
      </div>
    </nav>
  );
};

export default DesktopNav;
