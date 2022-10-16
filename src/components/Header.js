import React, { useState } from 'react';
import styles from "../constant/style";
import { Logo } from '../assets';
import navLinks from '../constant/navLinks';
import { NavLink } from "react-router-dom";
import { BsChevronDown } from 'react-icons/bs';

const Header = () => {
    const [lngState, setLngState] = useState(false);
    const language = [
        {
            name: "Bahasa Indonesia",
            code: "id"
        },
        {
            name: "English",
            code: "en"
        }
    ]
    return (
        <>
            <nav className='w-full flex py-6 justify-between items-center navbar'>
                <img src={Logo} alt="logo" className='w-[141px] h-[30px]' />

                <ul className='list-none md:flex hidden justify-end items-center flex-1'>
                    {navLinks.map((nav, index) => (
                        <li key={index}>
                            <NavLink to={`${nav.path}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? `text-[18px] font-semibold lg:mr-16 mr-8 underline underline-offset-4`
                                        : `text-[18px] font-semibold lg:mr-16 mr-8 hover:underline underline-offset-4`
                                }
                                end
                            >
                                {nav.title}
                            </NavLink>
                        </li>))}
                    <li className='text-[18px] font-semibold cursor-pointer hover:underline underline-offset-4'>
                        <div className='flex justify-center items-center' onClick={() => setLngState(!lngState)}>
                            <span className='mr-2'>Language</span> <BsChevronDown height={6} className={`transition duration-300 ease-in-out ${lngState ? 'rotate-0' : 'rotate-180'}`} />
                        </div>
                    </li>
                </ul>
            </nav>

            <div className={`${styles.boxWidth} relative h-[87px] z-[2] md:flex hidden flex-row-reverse transition duration-300 ease-in-out ${lngState ? 'visible opacity-1' : 'invisible opacity-0'}`}>
                <div className='w-[170px] h-[87px] bg-primary rounded-[20px] p-4 absolute'>
                    {language.map((item, index) => (
                        <p
                            className='z-[3] text-[16px] text-white font-semibold cursor-pointer hover:underline underline-offset-4'
                            key={index}
                        >
                            {item.name}
                        </p>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Header