import React from 'react';
import "./footercol.css"
const Footercol = (props) => {
    return ( 
        <>
        <div className="footercolumn">
            <h1>{props.title}</h1>
            <div className="links">
                <a href="">{props.link}</a>
                <a href="">{props.link2}</a>
                <a href="">{props.link3}</a>
                <a href="">{props.link4}</a>

            </div>
        </div>
        
        
        </>
     );
}
 
export default Footercol;