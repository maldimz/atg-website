import React from 'react';
import { Logo } from '../assets';
import navLinks from '../constant/navLinks';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <nav className='w-full flex py-6 justify-between items-center navbar'>
            <img src={Logo} alt="logo" className='w-[141px] h-[30px]' />

            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {navLinks.map((nav, index) => (
                    <li key={index}>
                        <NavLink to={`${nav.path}`}
                            className={({ isActive }) =>
                                isActive
                                    ? `font-inter text-[18px] font-semibold ${index === navLinks.length - 1 ? 'mr-0' : 'mr-16'} underline underline-offset-4`
                                    : `font-inter text-[18px] font-semibold ${index === navLinks.length - 1 ? 'mr-0' : 'mr-16'} hover:underline underline-offset-4`
                            }
                            end
                        >
                            {nav.title}
                        </NavLink>
                    </li>))}
            </ul>
        </nav>
    )
}

export default Header