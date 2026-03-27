import React from 'react';
import "./home.css"
import Navbar from '../components/navbar';

const Home = () => {
    return ( 
        <>
        <Navbar />

        <section className="hero">
            <div className="herotxt">
                <h1>Your Next <span>Adventure</span> Awaits</h1>
                <p>Book tickets to concerts, festivals, workshops, and cultural events. Join thousands of happy attendees!</p>
                
            </div>
            
        </section>
        </>
     );
}
 
export default Home;