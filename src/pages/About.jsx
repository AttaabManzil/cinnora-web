import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <div className="about">
            <section className="about-hero">
                <div className="container">
                    <h1 className="about-title">About Cinnora</h1>
                    <p className="about-subtitle">Great taste begins at the source.</p>
                </div>
            </section>

            <section className="about-section intro-section">
                <div className="container">
                    <div className="about-text">
                        <p>
                            At Cinnora, we believe that great taste begins at the source.
                            Sri Lanka is home to some of the world’s finest spices, nurtured by rich soil, tropical climate, and generations of agricultural expertise. Our purpose is to take these natural treasures to global markets and introduce the world to the true flavor of authentic Sri Lankan spices.
                        </p>
                        <p>
                            Cinnora was born from a passion to preserve Sri Lanka’s spice heritage while making it accessible to international buyers who value authenticity. Today, we export carefully selected Ceylon cinnamon, black pepper, cloves, turmeric, cardamom, and many other spice essentials, produced with care, respect, and uncompromising standards.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section why-we-exist">
                <div className="container">
                    <h2 className="section-title">Why We Exist</h2>
                    <div className="about-text">
                        <p>
                            For decades, Sri Lankan spices have been exported, blended, altered, or diluted before reaching consumers abroad. As a result, the world rarely experiences the real purity and richness of Sri Lankan-grown spices.
                        </p>
                        <p>
                            <strong>Cinnora was created to change that.</strong>
                        </p>
                        <p>
                            We connect international restaurants, supermarkets, small businesses, and specialty retailers directly to the source. What you receive is fresh, unadulterated, and ethically processed spice — the way it was meant to be experienced.
                        </p>
                        <p className="highlight-text">No fillers. No shortcuts. No substitutions. Only real Sri Lankan spice excellence.</p>
                    </div>
                </div>
            </section>

            <section className="about-section what-sets-us-apart">
                <div className="container">
                    <h2 className="section-title">What Sets Us Apart</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <h3>100% Sri Lankan Origin</h3>
                            <p>Every product we offer is 100% Sri Lankan in origin. We source from local growers, trusted harvesters, and regions renowned for excellence, ensuring consistency and traceability.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Premium Quality</h3>
                            <p>Our cinnamon is graded with precision, our pepper is bold and full-bodied, our cloves are handpicked, and our turmeric carries the vibrant color and potency Sri Lanka is known for.</p>
                        </div>
                        <div className="feature-item">
                            <h3>Controlled Processing</h3>
                            <p>We process and package spices in controlled environments to maintain freshness, aroma, and quality from farm to delivery. Whether you need bulk quantities, retail-ready packs, or private-label packaging, we provide flexible solutions to suit your scale.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="about-section who-we-serve">
                <div className="container">
                    <h2 className="section-title">Who We Serve</h2>
                    <div className="about-text">
                        <p>
                            We supply spices to restaurants, supermarkets, and small to medium international businesses. Whether you are sourcing ingredients for culinary use, building a retail spice brand, or requiring premium supply for manufacturing, we are here to support your growth and product integrity.
                        </p>
                    </div>
                </div>
            </section>

            <section className="about-section our-commitment">
                <div className="container">
                    <h2 className="section-title">Our Commitment</h2>
                    <div className="about-text">
                        <p>
                            Every batch we prepare represents the skill of Sri Lankan farmers, the purity of our soil, and the excellence that has made our island famous across centuries.
                        </p>
                        <p>
                            We are committed to honest sourcing, sustainable practices, and long-term partnerships built on trust and reliability.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
