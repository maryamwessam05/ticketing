import React from 'react';
import "./why.css"

const Why = (props) => {
    return ( 
        <>
            <div className={props.style}>
                <img src={props.dot} alt="" />
                <div className={props.textcon}>
                    <h1 className='whytit'>{props.title}</h1>
                    <p className='whyp'>{props.desc}</p>
                </div>
            </div>
        </>
     );
}
 
export default Why;