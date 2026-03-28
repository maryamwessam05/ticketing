import React from 'react';
import "./event.css"
import bluearrow from "../assets/bluearrow.svg"
import loc from "../assets/loc.svg"
import date from "../assets/date.svg"
import Bluebtn from './bluebtn';

const Event = (props) => {
    return (  
        <>
            <div className="event">

                <div className="eventimg">
                    <img className='evimg' src={props.img} alt="" />
                    <img className='bluearrow' src={bluearrow} alt="" />
                </div>

                <div className="deets">
                    <div className="date">
                        <img src={date} alt="" />
                        <span>{props.date}</span>
                    </div>
                    <div className="loc">
                        <img src={loc} alt="" />
                        <span>{props.location}</span>
                    </div>
                </div>
                <div className="eventname">
                    <h2>{props.name}</h2>
                    <p>{props.desc}</p>
                </div>
                <div className="price">
                    <h4>{props.price}</h4>
                    <div className="btncont">
                      <Bluebtn style="green" txt="Get Tickets" />

                    </div>
                </div>
            </div>
        
        </>
    );
}
 
export default Event;
