import React from 'react';
import quote from "../assets/quote.svg"
import "./testimonial.css"
const Testimonial = (props) => {
    return ( 
        <>
        <div className="testimonial">
            <img src={quote} alt="" />
            <p>{props.say}</p>
            <div className="user">
                <img src={props.peop} alt="" />
                <div className="name">
                    <h5>{props.name}</h5>
                    <span>{props.loc}</span>
                </div>
            </div>
        </div>
        </>
     );
}
 
export default Testimonial;