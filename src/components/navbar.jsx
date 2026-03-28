import React, { useState, useEffect } from 'react';
import "./navbar.css";
import logo from "../assets/logo.svg";
import lang from "../assets/lang.svg";
import Navlink from './navlink';
import burger from "../assets/burger.svg";
import x from "../assets/x.svg";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const toggleLanguage = () => {
        const newLang = i18n.language === "ar" ? "en" : "ar";
        i18n.changeLanguage(newLang);
    };

    useEffect(() => {
        const isArabic = i18n.language === "ar";
        document.documentElement.lang = isArabic ? "ar" : "en";
        document.documentElement.dir = isArabic ? "rtl" : "ltr";
        document.body.dir = isArabic ? "rtl" : "ltr";
    }, [i18n.language]);

    return ( 
        <>
        <nav>
            <img className='logo' src={logo} alt="" />

            <ul>
                <Navlink navtxt={t("nav.events")} link="#events"/>
                <Navlink navtxt={t("nav.categories")} link="#cat"/>
                <Navlink navtxt={t("nav.about")} link="#about"/>
                <Navlink navtxt={t("nav.booking")} link="#booking" />
            </ul>

            <div className="navactions">
                <button className='signup'>{t("nav.signup")}</button>

                <button className="lang" type="button" onClick={toggleLanguage}>
                    <img src={lang} alt="" />
                    <span>{i18n.language === "ar" ? "EN" : "AR"}</span>
                </button>

                <img onClick={openMenu} className='burger' src={burger} alt="" />
            </div>

            <div className={`burgermenu ${menuOpen ? "active" : ""}`}>
                <div className="burgerlist">
                    <Navlink navtxt={t("nav.events")} link="#events"/>
                    <Navlink navtxt={t("nav.categories")} link="#cat"/>
                    <Navlink navtxt={t("nav.about")} link="#about"/>
                    <Navlink navtxt={t("nav.booking")} link="#booking" />
                    <img src={x} alt="" onClick={closeMenu} className='x'/>
                </div>  
            </div>
        </nav>
        </>
     );
}
 
export default Navbar;