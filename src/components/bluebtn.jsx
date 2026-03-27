import React from 'react';
import "./bluebtn.css"

const Bluebtn = (props) => {
    return (  
        <>
        <div className={props.style}>
            <h3>{props.txt}</h3>
            <img src={props.icon} alt="" />
        </div>

        
        
        </>
    );
}
 
export default Bluebtn;