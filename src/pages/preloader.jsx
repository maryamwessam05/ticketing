import React from 'react';
import "./preloader.css"
import FuzzyText from '../componentpreloader/FuzzyText';

const Preloader = () => {
    return ( 
        <>
        <div className="back">

            <FuzzyText 
            baseIntensity={0.2}
            hoverIntensity={0.5}
            enableHover
            >
            EventHub
            </FuzzyText>
        </div>
        
        
        </>
     );
}
 
export default Preloader;