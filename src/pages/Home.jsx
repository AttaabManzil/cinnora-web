import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">

            {/* -------- HERO SECTION -------- */}
            <section
                className="hero"
                style={{ backgroundImage: "url('/assets/hero-new-2.png')" }}
            >
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in-up">
                        Experience the Authentic Essence of Ceylon.
                    </h1>

                    <p className="hero-subtitle fade-in-up delay-1">
                        100% Authentic Ceylon Cinnamon and premium spices, hand-harvested in the heart of Sri Lanka.
                    </p>

                    <Link to="/products" className="btn btn-hero fade-in-up delay-2">
                        Shop the Collection
                    </Link>
                </div>
            </section>


            {/* -------- BENEFITS SECTION -------- */}
            <section className="benefits-section">
                <div className="container benefits-container">
                    <div className="benefits-content">
                        <p className="benefits-subtitle">Health Benefits</p>
                        <h2 className="benefits-title">CINNAMON</h2>

                        <p className="benefits-description">
                            Cinnamon has been valued for thousands of years for its rich flavor and powerful wellness properties.
                            Here are some of the most remarkable benefits:
                        </p>

                        <div className="benefits-list">
                            <div className="benefit-item">
                                <span className="benefit-icon">🎁</span>
                                <div className="benefit-text">
                                    <h3>Antioxidant Support</h3>
                                    <p>Contains powerful antioxidants that help protect cells from stress and damage.</p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <span className="benefit-icon">🛡️</span>
                                <div className="benefit-text">
                                    <h3>Anti-inflammatory</h3>
                                    <p>May support reduced inflammation and assist overall metabolic health.</p>
                                </div>
                            </div>

                            <div className="benefit-item">
                                <span className="benefit-icon">💉</span>
                                <div className="benefit-text">
                                    <h3>Supports Blood Sugar Balance</h3>
                                    <p>Studies suggest it may support healthier glucose processing.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="benefits-image-wrapper">
                        <img
                            src="/assets/benefits-bowl-final.png"
                            alt="Cinnamon powder"
                            className="benefits-image"
                        />
                    </div>
                </div>
            </section>


            {/* -------- PRODUCTS -------- */}
            <section id="products" className="products-section">
                <div className="container">
                    <h2 className="section-title fade-in-up">Our Premium Spices</h2>

                    <div className="products-grid fade-in-up delay-1">
                        <div className="product-card">
                            <div className="product-image-container">
                                <img src="/assets/cinnamon-powder.png" alt="Cinnamon Powder" className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3>Cinnamon Powder</h3>
                                <p>Authentic Ceylon Cinnamon</p>
                                <Link to="/products/1" className="btn-text">View Details</Link>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image-container">
                                <img src="/assets/black-pepper-powder.png" alt="Black Pepper" className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3>Black Pepper Powder</h3>
                                <p>Bold and Aromatic</p>
                                <Link to="/products/2" className="btn-text">View Details</Link>
                            </div>
                        </div>

                        <div className="product-card">
                            <div className="product-image-container">
                                <img src="/assets/cardamom-powder.jpg" alt="Cardamom Powder" className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3>Cardamom Powder</h3>
                                <p>The Queen of Spices</p>
                                <Link to="/products/8" className="btn-text">View Details</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* -------- STORY -------- */}
            <section className="story-section">
                <div className="container story-content fade-in-up">
                    <h2 className="section-title">Authentic Sri Lankan Spices, Delivered Worldwide</h2>

                    <p>
                        At Cinnora, we bring the true taste of Sri Lanka to the world. Every batch is harvested with care
                        and processed in small quantities to ensure freshness and purity.
                    </p>

                    <p className="story-highlight">
                        Taste purity. Taste craftsmanship. Taste Sri Lanka.
                    </p>

                    <Link to="/about" className="btn btn-primary btn-large">
                        Discover Our Story →
                    </Link>
                </div>
            </section>


            {/* -------- FAQ -------- */}
            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>

                    <div className="faq-grid fade-in-up delay-1">
                        <div className="faq-item">
                            <h3>Do you ship internationally?</h3>
                            <p>Yes — we deliver worldwide using reliable, tracked logistics partners.</p>
                        </div>

                        <div className="faq-item">
                            <h3>Are your spices organic?</h3>
                            <p>We source from traditional pesticide-free farms across Sri Lanka.</p>
                        </div>

                        <div className="faq-item">
                            <h3>How should spices be stored?</h3>
                            <p>Keep them in airtight packaging away from light and moisture.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* -------- CALL TO ACTION -------- */}
            <section className="contact-cta">
                <div className="container cta-content fade-in-up">
                    <h2>Ready to Order?</h2>
                    <p>Wholesale, private label or retail — we’re here to help.</p>

                    <Link to="/contact" className="btn btn-white btn-large">
                        Contact Us
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Home;
