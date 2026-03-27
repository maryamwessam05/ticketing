import React from 'react';
import "./navbar.css"
import logo from "../assets/logo.svg"
import lang from "../assets/lang.svg"
import Navlink from './navlink';

const Navbar = () => {
    return ( 
        <>
        <nav>
            <img src={logo} alt="" />

            <ul>
                <Navlink navtxt="Events" link="#events"/>
                <Navlink navtxt="Categories" link="#cat"/>
                <Navlink navtxt="About" link="#about"/>
                <Navlink navtxt="Booking" link="#booking" />

            </ul>

            <div className="navactions">
                <button className='signup'>Sign Up</button>
                <div className="lang">
                    <img src={lang} alt="" />
                    <span>EN</span>
                </div>
            </div>
        </nav>
        
        
        </>
     );
}
 
export default Navbar;