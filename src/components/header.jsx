import React from 'react';
import "./header.css"

const Header = (props) => {
    return ( 
        <>
        <div className={props.style}>
            <h2>{props.title}</h2>
            <h6>{props.subheading}</h6>
        </div>
        
        </>
     );
}
 
export default Header;