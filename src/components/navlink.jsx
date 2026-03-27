import React from 'react';
import "./navlink.css"

const Navlink = (props) => {
    return (  
        <>
        <a href={props.link}>
            {props.navtxt}
        </a>
        
        </>
    );
}
 
export default Navlink;