import React from 'react';
import logo from "../assets/logo.svg"
import smicons from "../assets/smicons.svg"
import footbg from "../assets/footerbg.svg"
import Footercol from './footercol';
import "./footer.css"

const Footer = () => {
    return ( 
        <>
        <footer>
            <img className='footbg' src={footbg} alt="" />
            <div className="footercont">
                <div className="col1">
                    <img src={logo} alt="" />
                    <p>Making event discovery and booking simple and fun for everyone.</p>
                </div>

                <Footercol title="Quick Links" link1="Browse Events" link2="Categories" link3="Create Event" link4="Help Center" />
                <Footercol title="Company" link1="About Us" link2="Careers" link3="Press" link4="Contact" />

                <div className="col1">
                    <h1>Follow Us</h1>
                    <img src={smicons} alt="" />
                    </div>           
            </div>
        </footer>
        
        </>
     );
}
 
export default Footer
