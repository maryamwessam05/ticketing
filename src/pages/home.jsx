import React, { useState , useEffect } from 'react';
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
import DashedLine from '../components/dashed';
import Why from '../components/why';
import Chips from '../components/chips';
import calen from "../assets/featevent01.svg"
import loc2 from "../assets/featevent02.svg"
import people from "../assets/featevent03.svg"
import featimg from "../assets/featimg.png"
import SquareDraw from '../components/squaredraw';
import testi from "../assets/testi.png"
import Testimonial from '../components/testimonial';
import peop1 from "../assets/people01.png"
import peop2 from "../assets/people02.png"
import peop3 from "../assets/people03.png"
import minus from "../assets/minus.svg"
import plus from "../assets/plus.svg"
import droparw from "../assets/blackarrow.svg"
import arw1 from "../assets/arrow01.svg"
import arw2 from "../assets/arrow02.svg"
import arw3 from "../assets/arrow03.svg"
import arw4 from "../assets/arrow04.svg"
import Submitbtn from '../components/submitbtn';
import footbg from "../assets/footerbg.svg"
import logo from "../assets/logo.svg"
import Footercol from '../components/footercol';
import smicons from "../assets/smicons.svg"
import Folder from '../componentfolder/Folder';
import Preloader from './preloader';
import Footer from '../components/footer';


const Home = () => {
    
    const [count, setCount] = useState(0);

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


    const increase = () => {
        if (count < 10) {
            setCount(count + 1);
        }
    }
    const decrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    event: "",
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");

    const eventOptions = [
    "Electric Nights Festival",
    "Contemporary Art Expo",
    "Gourmet Street Food Fest",
    "Summer Music Festival",
    "Tech Innovators Summit",
    ];


    const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
    }));

    setErrors((prev) => ({
        ...prev,
        [name]: "",
    }));
    };

    const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
        newErrors.fullName = "Full name is required";
    }

    if (!formData.email.trim()) {
        newErrors.email = "Email is required";
    } else if (!formData.email.includes("@")) {
        newErrors.email = "Email must include @";
    }

    if (count === 0) {
        newErrors.tickets = "Please select at least 1 ticket";
    }

    if (!formData.event) {
        newErrors.event = "Please choose an event";
    }

    return newErrors;
    };

    const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
        setErrors(validationErrors);
        setSuccessMessage("");
        return;
    }

    setErrors({});
    setSuccessMessage("Tickets booked successfully!");

    console.log({
        ...formData,
        tickets: count,
    });

    setFormData({
        fullName: "",
        email: "",
        event: "",
    });
    setCount(0);
    };
      const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
        setLoading(false);
        }, 2000); // duration of preloader

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Preloader />;
    }

    return ( 
        <>
        <main>

        <Navbar />

        <section className="hero">
            <div className="herotxt">
            <div className="dectext">

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
            </div>
                    
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

        <section className='section5'>
            <Header style="headerblack" title="Why Choose EventHub?" subheading="We make discovering and booking events simple, safe, and enjoyable" />
            <div className="wrapper">
                <div className="linedash">
                <DashedLine />  
                </div>
               <Folder
  color="#c8f22b"
  size={2.6}
  className="custom-folder"
  items={[
    <Why
      textcon="textcong"
      title="Easy Discovery"
      style="whyg"
      textstyle="whytit"
      pstyle="whyp"
      desc="Find events that match your interests with our smart search and recommendation system."

    />,
    <Why
      textcon="textcong"
      title="Secure Booking"
      style="whyg"
      textstyle="whytitw"
      pstyle="whypw"
      desc="Book with confidence using our secure payment system and get instant confirmation."
    />,
    <Why
      
      textcon="textcong"
      textstyle="whytit"
      pstyle="whyp"
      title="Amazing Experience"
      style="whyg"
      desc="Join millions of happy event-goers who trust us for their entertainment needs."

    
    />
  ]}
/>

            
            </div>
        </section>

        <section className="section6">
           <div className="featetxt">
            <h1>Summer Music Festival 2025</h1>
            <p>Join us for three days of non-stop music, art, and 
            unforgettable memories. Featuring 50+ artists across 5 
            stages.</p>
            <div className="chips">
                <Chips icon={calen} text="July 15-17, 2025" />
                <Chips icon={loc2} text="Beachside Arena" />
                <Chips icon={people} text="20,000 Attendees" />
            </div>
            <div className="featactions">
                <Bluebtn style="white" txt="Book Now - From $89" />
                <Bluebtn style="whitetrans" txt="Book Now - From $89" />

            </div>
           </div>

           <div className="featimg">
            <img className='recfeat' src={rec} alt="" />
            <img className='featimg2' src={featimg} alt="" />
            <div className="bordergreen">

            <SquareDraw />
            </div>
           </div>
        </section>

        <section className="section7">
            <div className="headingt">
                <img className='testi' src={testi} alt="" />  
                <Header style="headerblack" title="What People Say" subheading="Hear from our happy event-goers" />
            </div>
            <div className="testiwrap">
                <div className="testimonials">
                    <Testimonial say="EventHub made finding and booking concerts so easy! The interface is beautiful and the booking process is seamless." peop={peop1} name="Omar Kareem" loc="Cairo" />
                    <Testimonial say="Amazing platform! Found the perfect concert and the booking process was so smooth. Highly recommended!" peop={peop2} name="Sarah Ahmed" loc="Cairo" />
                    <Testimonial say="The best event platform I've used. Great selection, fair prices, and excellent customer service. Five stars!" peop={peop3} name="Lina Ahmed" loc="Cairo" />

                </div>

            </div>
        </section>

        <section className='section8'>
            <div className="bookingcont">
                <Header style="headerwhite" title="Book Your Tickets" subheading="Fill in your details and get ready for an amazing experience" />

                <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="pair">
                    <label htmlFor="fullname">Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        placeholder="Enter your name"
                        id="fullname"
                        className="fullname"
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <span className="error">{errors.fullName}</span>}
                    </div>

                    <div className="pair">
                    <label htmlFor="email">Email</label>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        id="email"
                        className="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                </div>

                <div className="row">
                    <div className="pair">
                    <label htmlFor="">Number of tickets</label>
                    <div className="counter">
                        <button type="button" onClick={decrease}>
                        <img src={minus} alt="decrease" />
                        </button>
                        <h1>{count}</h1>
                        <button type="button" onClick={increase}>
                        <img src={plus} alt="increase" />
                        </button>
                    </div>
                    {errors.tickets && <span className="error">{errors.tickets}</span>}
                    </div>

                    <div className="pair">
                    <label htmlFor="event">Event</label>
                    <div className="inputdrop">
                        <select
                        name="event"
                        id="event"
                        value={formData.event}
                        onChange={handleChange}
                        >
                        <option value="">Select an event</option>
                        {eventOptions.map((event, index) => (
                            <option key={index} value={event}>
                            {event}
                            </option>
                        ))}
                        </select>
                        <img className="droparw" src={droparw} alt="" />
                    </div>
                    {errors.event && <span className="error">{errors.event}</span>}
                    </div>
                </div>

                <Submitbtn style="green" txt="Get Tickets" type="submit" />

                {successMessage && <p className="success">{successMessage}</p>}
                </form>
            </div>
            <img src={arw1} alt="" className='arw1'/>
            <img src={arw2} alt="" className='arw2'/>
            <img src={arw3} alt="" className='arw3'/>
            <img src={arw4} alt="" className='arw4'/>

        </section>
        
        <Footer />
        </main>
        </>
     );
}
 
export default Home;