import React from 'react';
import "./home.css"
import Navbar from '../components/navbar';
import Bluebtn from '../components/bluebtn';
import heroimg from "../assets/heroimg.png"
import DecryptedText from "../component/DecryptedText";
import rec from "../assets/Rectangle 18.svg"
import LineDraw from '../components/linedraw';
import DrawSVG from "../components/drawsvg";
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
                <img src={heroimg} className='image' alt="" />
                <div className="ill">

                <LineDraw />
                </div>
                <div className="star">
                    <DrawSVG delay={2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="127" height="127" viewBox="0 0 127 127" fill="none">
                        <path d="M122.265 121.742C81.4343 115.693 40.6034 109.644 20.2174 105.448C-0.16857 101.251 1.12766 99.0909 13.5694 87.0682C26.0111 75.0454 49.5591 53.2258 65.4705 39.3929C88.2693 19.5723 102.351 9.84823 109.241 4.80082C114.147 1.20704 98.3179 30.3848 83.3263 63.111C74.6203 82.1157 60.9894 104.695 53.9878 115.195C46.9863 125.696 46.3382 123.104 46.0043 115.395C45.1191 94.9569 44.8063 74.2467 42.4168 57.1733C39.4963 36.3058 36.5053 21.3964 38.2336 19.5077C44.8202 12.3098 57.9976 46.7708 77.0677 68.1257C97.7942 94.2007 105.015 104.708 107.516 108.076C108.936 110.148 110.665 112.957 112.445 115.85" stroke="#C8F22B" stroke-width="9" stroke-linecap="round"/>
                        </svg>
                    </DrawSVG>
                </div>

                <div className="face">
                    <DrawSVG delay={2}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="120" height="135" viewBox="0 0 120 135" fill="none">
                        <path d="M38.543 8.42822L39.8523 88.9509" stroke="#C8F22B" stroke-width="9" stroke-linecap="round"/>
                        <path d="M81.7505 4.50024C80.2383 20.919 78.726 37.3378 77.947 51.1969C77.168 65.0559 77.168 75.8577 77.168 86.9869" stroke="#C8F22B" stroke-width="9" stroke-linecap="round"/>
                        <path d="M4.50098 117.032C47.3599 137.972 82.3599 133.472 115.36 105.972" stroke="#C8F22B" stroke-width="9" stroke-linecap="round"/>
                        </svg>
                    </DrawSVG>
                </div>
             </div>
            
        </section>
        </>
     );
}
 
export default Home;