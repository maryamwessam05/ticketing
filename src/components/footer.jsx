import React from 'react';
import logo from "../assets/logo.svg";
import smicons from "../assets/smicons.svg";
import footbg from "../assets/footerbg.svg";
import Footercol from './footercol';
import "./footer.css";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation();

    return ( 
        <>
            <footer>
                <img className='footbg' src={footbg} alt="" />
                <div className="footercont">
                    <div className="col1">
                        <img src={logo} alt="" />
                        <p>{t("footer.desc")}</p>
                    </div>

                    <Footercol 
                        title={t("footer.quickLinks")}
                        link1={t("footer.browseEvents")}
                        link2={t("footer.categories")}
                        link3={t("footer.createEvent")}
                        link4={t("footer.helpCenter")}
                    />

                    <Footercol 
                        title={t("footer.company")}
                        link1={t("footer.aboutUs")}
                        link2={t("footer.careers")}
                        link3={t("footer.press")}
                        link4={t("footer.contact")}
                    />

                    <div className="col1">
                        <h1>{t("footer.followUs")}</h1>
                        <img src={smicons} alt="" />
                    </div>           
                </div>
            </footer>
        </>
     );
}
 
export default Footer;