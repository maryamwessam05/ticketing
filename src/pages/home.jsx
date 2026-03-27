import React from 'react';
import "./home.css"
import Navbar from '../components/navbar';
import Bluebtn from '../components/bluebtn';
import heroimg from "../assets/heroimg.png"
import DecryptedText from "../component/DecryptedText";
import ill from "../assets/heroill.svg"
import rec from "../assets/Rectangle 18.svg"

const Home = () => {
    return ( 
        <>
        <Navbar />

        <section className="hero">
            <div className="herotxt">
  
                      <DecryptedText
                       text="Your Next
                            Adventure
                            Awaits"
                        animateOn="view"
                        revealDirection="start"
                        sequential
                    className="herolabel"

                        useOriginalCharsOnly={false}
                        />
                    
                <p>Book tickets to concerts, festivals, workshops, and cultural events. Join thousands of happy attendees!</p>
                <div className="herobtns">
                    <Bluebtn style="blue" txt="Explore Events "/>
                    <Bluebtn style="grey" txt="How it works "/>

                </div>
                <img src={rec} alt="" className='rec' />

            </div>
            <div className="heroimg">
                <img src={heroimg} alt="" />
                <img className='ill' src={ill} alt="" />
            </div>
            
        </section>
        </>
     );
}
 
export default Home;