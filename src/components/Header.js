import React, { useState } from 'react';
import styles from "../constant/style";
import { Logo } from '../assets';
import navLinks from '../constant/navLinks';
import { NavLink } from "react-router-dom";
import { BsChevronDown } from 'react-icons/bs';
import { IoMenu, IoClose } from 'react-icons/io5';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const {t} = useTranslation();
    const changeLanguage = (lng) => {
        setLngState(false);
        setToggle(false);
        i18n.changeLanguage(lng);
    }

    const [lngState, setLngState] = useState(false);
    const [toggle, setToggle] = useState(false);

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
    const navLink = [
        {
            path: navLinks[0].path,
            title: t("header-home")
        },
        {
            path: navLinks[1].path,
            title: t("header-services")
        },
        {
            path: navLinks[2].path,
            title: t("header-products")
        },
        {
            path: navLinks[3].path,
            title: t("header-contacts")
        }
    ]
    return (
        <div className={`w-full overflow-hidden bg-white ${toggle ? 'fixed z-[10]' : ''}`}>
            <div className={`${styles.paddingX} ${styles.flexCenter}`}>
                <div className={`${styles.boxWidth} `}>
                    <nav className='w-full flex py-6 justify-between items-center navbar'>
                        <img src={Logo} alt="logo" className='w-[141px] h-[30px]' />

                        <ul className='list-none md:flex hidden justify-end items-center flex-1'>
                            {navLink.map((nav, index) => (
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
                                    <span className='mr-2'>{t("header-language")}</span> <BsChevronDown height={6} className={`transition duration-300 ease-in-out ${lngState ? 'rotate-0' : 'rotate-180'}`} />
                                </div>
                            </li>
                        </ul>

                        <div className='md:hidden flex flex-1 justify-end items-center'>
                            <div className='cursor-pointer' onClick={() => setToggle(!toggle)}>
                                {toggle ? <IoClose size={30} /> : <IoMenu size={30} />}
                            </div>
                            <div className={`${toggle ? 'flex flex-col gap-3 fixed' : 'hidden'} p-6 bg-primary top-[78px] right-0 z-[10] w-full h-screen items-center text-center`}>
                                {navLink.map((nav, index) => (
                                    <p key={index}>
                                        <NavLink to={`${nav.path}`}
                                            onClick={() => setToggle(false)}
                                            className={({ isActive }) =>
                                                isActive
                                                    ? `text-[18px] font-semibold underline underline-offset-4`
                                                    : `text-[18px] font-semibold hover:underline underline-offset-4`
                                            }
                                            end
                                        >
                                            {nav.title}
                                        </NavLink>
                                    </p>))}
                                <hr className='w-full bt-2 border-black' />
                                <div className='flex flex-col gap-3'>
                                    <p className='font-bold text-[18px]'>Language</p>
                                    {language.map((item, index) => (
                                        <p
                                            className='z-[3] text-[16px] text-black font-semibold cursor-pointer hover:underline underline-offset-4'
                                            key={index}
                                            onClick={() => changeLanguage(item.code)}
                                        >
                                            {item.name}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>


                        <div className={`${styles.boxWidth} atglg:right-auto right-16 top-20 h-[87px] z-[10] flex-row-reverse transition duration-300 ease-in-out ${lngState ? 'flex fixed' : 'hidden'}`}>
                            <div className='w-[170px] h-[87px] bg-primary rounded-[20px] p-4 absolute'>
                                {language.map((item, index) => (
                                    <p
                                        className='z-[3] text-[16px] text-white font-semibold cursor-pointer hover:underline underline-offset-4'
                                        key={index}
                                        onClick={() => changeLanguage(item.code)}
                                    >
                                        {item.name}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Header