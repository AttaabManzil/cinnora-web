import React from 'react';
import '../styles/Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">We'd love to hear from you.</p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container contact-grid">
                    <div className="contact-info">
                        <h2>Get in Touch</h2>
                        <p>
                            Whether you have a question about our products, pricing, or anything else, our team is ready to answer all your questions.
                        </p>
                        <div className="info-item">
                            <h3>Address</h3>
                            <p>123 Spice Garden Road, Cinnamon Hill, Sri Lanka</p>
                        </div>
                        <div className="info-item">
                            <h3>Email</h3>
                            <p>info@cinnora.com</p>
                        </div>
                        <div className="info-item">
                            <h3>Phone</h3>
                            <p>+94 77 123 4567</p>
                        </div>
                    </div>

                    <div className="contact-form-wrapper">
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
