import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm('service_pnmmdmj', 'template_fmutxir', form.current, {
                publicKey: 'sE414j78e-rqUy8p7',
            })
            .then(
                () => {
                    alert('Message sent successfully!');
                    setIsSending(false);
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send message. Please try again.');
                    setIsSending(false);
                },
            );
    };

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
                        <form ref={form} onSubmit={sendEmail} className="contact-form">
                            <input type="hidden" name="product_name" value="General Inquiry" />
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" placeholder="Your Name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" placeholder="Your Email" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5" placeholder="Your Message" required></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={isSending}>
                                {isSending ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
