import React from 'react';
import "./chips.css"

const Chips = (props) => {
    return ( 
        <>
        <div className="chip">
            <img src={props.icon} alt="" />
            <span>{props.text}</span>
        </div>
        
        </>
     );
}
 
export default Chips;