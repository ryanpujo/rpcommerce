import React, { FC } from 'react';
import { NavBarProps } from './NavBar';
import DarkSwitcher from '../DarkSwitcher';
import DropdownAvatar from '../DropdownAvatar';

const DesktopNav: FC<NavBarProps> = ({
  className,
  navs,
  handleToggle,
  theme,
}) => {
  return (
    <nav className={'navbar bg-blue-600 ' + className}>
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
        <DarkSwitcher
          theme={theme}
          className="text-white"
          handleToggle={handleToggle}
        />
        <DropdownAvatar />
      </div>
    </nav>
  );
};

export default DesktopNav;
