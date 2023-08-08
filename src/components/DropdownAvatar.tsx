import Image from 'next/image';
import React, { ComponentProps, FC } from 'react';

const dropdownContent = ['Profile', 'Settings', 'Logout'];
const DropdownAvatar: FC<ComponentProps<'div'>> = ({ className }) => {
  return (
    <div className={'dropdown dropdown-end ' + className}>
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <Image src={'/nika.png'} alt="avatar" width={15} height={15} />
        </div>
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content mt-3 z-[1] p-2 shadow menu menu-sm bg-base-100 rounded-box w-52"
      >
        {dropdownContent.map((nav) => (
          <li key={nav}>
            <a href="#">{nav}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DropdownAvatar;
