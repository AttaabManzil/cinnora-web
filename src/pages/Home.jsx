import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
    return (
        <div className="home">
            <section className="hero" style={{ backgroundImage: "url('/assets/hero-new.png')" }}>
                <div className="hero-overlay"></div>
                <div className="container hero-content">
                    <h1 className="hero-title fade-in-up">The Gold Standard of Spice</h1>
                    <p className="hero-subtitle fade-in-up delay-1">100% Authentic Ceylon Cinnamon and premium spices, hand-harvested in the heart of Sri Lanka.</p>
                    <a href="#products" className="btn btn-hero fade-in-up delay-2">Shop the Collection</a>
                </div>
            </section>

            <section className="benefits-section">
                <div className="container benefits-container">
                    <div className="benefits-content">
                        <h4 className="benefits-subtitle">Health Benefits</h4>
                        <h2 className="benefits-title">CINNAMON</h2>
                        <p className="benefits-description">
                            Cinnamon is a spice that has been used for thousands of years for both its delicious flavor and its health-promoting properties. Here are some of the most well-known health benefits of cinnamon:
                        </p>
                        <div className="benefits-list">
                            <div className="benefit-item">
                                <div className="benefit-icon">🎁</div>
                                <div className="benefit-text">
                                    <h3>ANTIOXIDANT PROPERTIES</h3>
                                    <p>Cinnamon is packed with antioxidants, which help protect the body from damage caused by harmful free radicals.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">🛡️</div>
                                <div className="benefit-text">
                                    <h3>ANTI-INFLAMMATORY EFFECTS</h3>
                                    <p>Cinnamon has anti-inflammatory properties that may help reduce the risk of chronic diseases such as heart disease and arthritis.</p>
                                </div>
                            </div>
                            <div className="benefit-item">
                                <div className="benefit-icon">❓</div>
                                <div className="benefit-text">
                                    <h3>REGULATES BLOOD SUGAR</h3>
                                    <p>Cinnamon has been shown to help regulate blood sugar levels, making it a useful spice for people with diabetes or prediabetes.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="benefits-image-wrapper">
                        <img src="/assets/benefits-bowl-final.png" alt="Cinnamon Powder and Sticks" className="benefits-image" />
                    </div>
                </div>
            </section>

            <section id="products" className="products-section">
                <div className="container">
                    <h2 className="section-title">Our Premium Spices</h2>
                    <div className="products-grid">
                        <div className="product-card">
                            <div className="product-image-container">
                                <img src="/assets/cinnamon.png" alt="Cinnamon Powder" className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3>Cinnamon Powder</h3>
                                <p>Authentic Ceylon Cinnamon</p>
                                <Link to="/products/1" className="btn-text">View Details</Link>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image-container">
                                <img src="/assets/pepper.png" alt="Black Pepper Powder" className="product-image" />
                            </div>
                            <div className="product-info">
                                <h3>Black Pepper Powder</h3>
                                <p>Bold and Aromatic</p>
                                <Link to="/products/2" className="btn-text">View Details</Link>
                            </div>
                        </div>
                        <div className="product-card">
                            <div className="product-image-container">
                                {/* Placeholder for Cardamom */}
                                <div className="product-image-placeholder" style={{ backgroundColor: '#E8E8E8' }}></div>
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

            <section className="about-teaser">
                <div className="container">
                    <div className="teaser-content">
                        <h2>The Cinnora Story</h2>
                        <p>
                            Discover the heritage behind our premium spices. From the lush gardens of Sri Lanka to your kitchen,
                            learn about our commitment to quality and tradition.
                        </p>
                        <Link to="/about" className="btn btn-outline">Read Our Story</Link>
                    </div>
                </div>
            </section>

            <section className="faq-section">
                <div className="container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3>Where do your spices come from?</h3>
                            <p>All our spices are sourced directly from certified organic farms in Sri Lanka (Ceylon), ensuring authentic flavor and premium quality.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Do you ship internationally?</h3>
                            <p>Yes, we ship our premium spices worldwide. Shipping rates and times vary depending on the destination.</p>
                        </div>
                        <div className="faq-item">
                            <h3>Are your products organic?</h3>
                            <p>Yes, our spices are grown using traditional, sustainable farming methods without harmful pesticides or chemicals.</p>
                        </div>
                        <div className="faq-item">
                            <h3>How should I store the spices?</h3>
                            <p>To maintain freshness, store your spices in a cool, dry place away from direct sunlight in airtight containers.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact-cta">
                <div className="container">
                    <h2>Ready to Order?</h2>
                    <p>Get in touch with us for bulk orders, wholesale inquiries, or any other questions.</p>
                    <Link to="/contact" className="btn btn-primary">Contact Us</Link>
                </div>
            </section>
        </div>
    );
};

export default Home;
