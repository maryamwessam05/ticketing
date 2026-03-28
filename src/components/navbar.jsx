import React, { useState } from 'react';
import "./navbar.css"
import logo from "../assets/logo.svg"
import lang from "../assets/lang.svg"
import Navlink from './navlink';
import burger from "../assets/burger.svg"
import x from "../assets/x.svg"

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };
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
            <img onClick={openMenu} className='burger' src={burger} alt="" />

            </div>

             <div className={`burgermenu ${menuOpen ? "active" : ""}`}>
            <div className="burgerlist">
                 <Navlink navtxt="Events" link="#events"/>
                <Navlink navtxt="Categories" link="#cat"/>
                <Navlink navtxt="About" link="#about"/>
                <Navlink navtxt="Booking" link="#booking" />
                <img src={x} alt="" onClick={closeMenu} className='x'/>
             </div>  
        </div>
            
            
        </nav>
        
        
        </>
     );
}
 
export default Navbar;