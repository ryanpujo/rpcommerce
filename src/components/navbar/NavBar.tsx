'use client';
import React, { ComponentProps, useEffect, useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const navs = ['Home', 'Catalog', 'About Us'];
export type NavBarProps = {
  navs: string[];
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  theme: string;
} & ComponentProps<'nav'>;
const NavBar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'corporate'
  );
  useEffect(() => {
    localStorage.setItem('theme', theme ? theme : 'corporate');
    const localTheme = localStorage.getItem('theme');
    document
      .querySelector('html')
      ?.setAttribute('data-theme', localTheme ? localTheme : 'corporate');
  }, [theme]);

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      setTheme('synthwave');
    } else {
      setTheme('corporate');
    }
  };
  return (
    <>
      <DesktopNav
        theme={theme ? theme : 'corporate'}
        handleToggle={handleToggle}
        navs={navs}
        className="hidden md:inline-flex"
      />
      <MobileNav
        theme={theme ? theme : 'corporate'}
        handleToggle={handleToggle}
        navs={navs}
        className="md:hidden"
      />
    </>
  );
};

export default NavBar;
