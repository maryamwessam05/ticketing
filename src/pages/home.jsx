import React, { useState } from 'react';
import "./home.css"
import Navbar from '../components/navbar';
import Bluebtn from '../components/bluebtn';
import heroimg from "../assets/heroimg.png"
import DecryptedText from "../component/DecryptedText";
import rec from "../assets/Rectangle 18.svg"
import LineDraw from '../components/linedraw';
import DrawSVG from "../components/drawsvg";
import abtimg1 from "../assets/abtimg01.png"
import abtimg2 from "../assets/abtimg02.png"
import abtimg3 from "../assets/abtimg03.png"
import abtimg4 from "../assets/abtimg04.png"
import click from "../assets/Vector.svg"
import BlurText from "../componentblur/BlurText";
import Header from '../components/header';
import Category from '../components/category';
import cat1 from "../assets/categimg01.png"
import cat2 from "../assets/categimg02.png"
import cat3 from "../assets/categimg03.png"
import cat4 from "../assets/categimg04.png"
import blackarrow from "../assets/arrowblack.svg"
import Event from '../components/event';
import eventimg1 from "../assets/trendimg01.png"
import eventimg2 from "../assets/trendimg02.png"
import eventimg3 from "../assets/trendimg03.png"


const Home = () => {
      const [aboutStarted, setAboutStarted] = useState(false);
    const [showImg1, setShowImg1] = useState(false);
    const [showImg2, setShowImg2] = useState(false);
    const [showImg3, setShowImg3] = useState(false);
    const [showImg4, setShowImg4] = useState(false);
    const [showShapes, setShowShapes] = useState(false);

    const handleAboutEnter = () => {
        if (aboutStarted) return;

        setAboutStarted(true);

        setShowImg1(true);

        setTimeout(() => {
            setShowImg2(true);
        }, 500);

        setTimeout(() => {
            setShowImg3(true);
        }, 1000);

        setTimeout(() => {
            setShowImg4(true);
        }, 1500);

        setTimeout(() => {
            setShowShapes(true);
        }, 2000);
    };



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

          <div className="about" id="about" onMouseEnter={handleAboutEnter}>
            <div className="abttxt">
                <BlurText
                text="About"
                delay={200}
                animateBy="words"
                direction="top"
                className="hight"
                />
                <p>We blend culture, technology, and design to make every booking feel like part of the show.From underground performances to mega festivals, helps you discover and secure moments that matter.</p>
            </div>

            <div className="abtimg">
                <img src={abtimg1} className={`abtimg1 ${showImg1 ? "show-img" : ""}`} alt="" />
                <img src={abtimg2} className={`abtimg2 ${showImg2 ? "show-img" : ""}`} alt="" />
                <img src={abtimg3} className={`abtimg3 ${showImg3 ? "show-img" : ""}`} alt="" />
                <img src={abtimg4} className={`abtimg4 ${showImg4 ? "show-img" : ""}`} alt="" />

                <img src={rec} className={`star1 ${showShapes ? "show-shape" : ""}`} alt="" />
                <img src={rec} className={`star2 ${showShapes ? "show-shape" : ""}`} alt="" />
                <img src={click} className={`click ${showShapes ? "show-shape" : ""}`} alt="" />
            </div>
        </div>

        <section className="section3" id='cat'>
            <Header style="headerblack" title="Browse by Category" subheading="Find events that match your vibe" />

            <div className="categories">
                <Category style="catselected" type="Music" sub="240+ events" image={cat1} />
                <Category style="cat" type="Art" sub="240+ events" image={cat2} contstyle="contpad" />
                <Category style="cat" type="Tech" sub="240+ events" image={cat3} />
                <Category style="cat" type="Food" sub="240+ events" image={cat4}  contstyle="contpad"/>


            </div>
        </section>

        <section className="section4" id='events'>
            <div className="sec3head">
            <Header style="headerblack" title="Trending Events" subheading="Don't miss out on these hot tickets" />
            <Bluebtn style="green" txt="View All" icon={blackarrow} />
            </div>

            <div className="events">
                <Event img={eventimg1} date="Jan 5, 2026" location="Modern Gallery" name="Electric Nights Festival" desc="Experience the best electronic music with world-class DJs and stunning visuals." price="$45" />
                <Event img={eventimg2} date="Jan 15, 2026" location="Downtown Arena" name="Contemporary Art Expo" desc="Discover emerging artists and stunning contemporary pieces in this exclusive exhibition." price="$25" />
                <Event img={eventimg3} date="Jan 25, 2026" location="Modern Gallery" name="Gourmet Street Food Fest" desc="Taste dishes from 50+ vendors featuring international cuisines and local favorites." price="$45" />

            </div>

            
        </section>
        </>
     );
}
 
export default Home;