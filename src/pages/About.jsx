import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <div className="container">
                    <h1 className="about-title">Our Story</h1>
                </div>
            </section>

            <section className="about-content">
                <div className="container">
                    <div className="about-text">
                        <div className="about-logo-container">
                            <img src="/assets/logo-dark.png" alt="Cinnora Logo" className="about-logo" />
                        </div>
                        <h2>The Spice Island Legacy</h2>
                        <p>
                            Sri Lanka, known as the "Spice Island," has a rich history of producing some of the world's finest spices.
                            At Cinnora, we are dedicated to bringing this legacy to your kitchen.
                        </p>
                        <p>
                            Our journey began with a passion for authentic flavors and a commitment to quality.
                            We source our spices directly from local farmers who use traditional methods to cultivate and harvest their crops.
                        </p>
                        <h2>Our Mission</h2>
                        <p>
                            To provide premium quality powdered spices that enhance the culinary experience while supporting sustainable farming practices in Sri Lanka.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
