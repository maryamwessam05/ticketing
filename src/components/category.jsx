import React from 'react';
import "./category.css"
import whitearrow from "../assets/arrwhite.svg"

const Category = (props) => {
    return ( 
        <>
        <div className={props.contstyle}>
            <div className={props.style}>
                <h1 className='type'>{props.type}</h1>
                <p className='sub'>{props.sub}</p>
                <div className="imgcont">
                <img className='imagecat' src={props.image} alt="" />
                    <img src={whitearrow} alt="" className="arrw" />
                </div>
            </div>

        </div>
        
        </>
     );
}
 
export default Category;