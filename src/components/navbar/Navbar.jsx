import React from 'react';
import { IoTimeOutline } from 'react-icons/io5';
import { RiHome2Line } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
  return (
    <nav className="shadow-sm bg-base-100 fixed w-full top-0 left-0 z-50">
      <div className="navbar container mx-auto">
        <div className="flex-1">
          <a className="btn btn-ghost text-2xl font-bold">
            <p>
              Keen
              <span className="inline font-normal text-[#244D3F]">Keeper</span>
            </p>
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-1">
            <li>
              <NavLink
                to={'/'}
                className={({ isActive }) =>
                  `btn btn-ghost ${isActive ? ' bg-[#244D3F] text-white' : ''}`
                }
              >
                <RiHome2Line className="text-xl" />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/timeline'}
                className={({ isActive }) =>
                  `btn btn-ghost ${isActive ? ' bg-[#244D3F] text-white' : ''}`
                }
              >
                <IoTimeOutline className="text-xl" />
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                to={'/stats'}
                className={({ isActive }) =>
                  `btn btn-ghost ${isActive ? ' bg-[#244D3F] text-white' : ''}`
                }
              >
                <TfiStatsUp className="text-xl" />
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;