import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import StatusModal from '../components/StatusModal';
import '../styles/Contact.css';

const Contact = () => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusModal, setStatusModal] = useState({ isOpen: false, type: 'success', title: '', message: '' });

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm('service_pnmmdmj', 'template_fmutxir', form.current, {
                publicKey: 'sE414j78e-rqUy8p7',
            })
            .then(
                () => {
                    setIsSending(false);
                    form.current.reset();
                    setStatusModal({
                        isOpen: true,
                        type: 'success',
                        title: 'Message Sent!',
                        message: 'Thank you for contacting us. We will get back to you as soon as possible.'
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSending(false);
                    setStatusModal({
                        isOpen: true,
                        type: 'error',
                        title: 'Sending Failed',
                        message: 'Something went wrong. Please try again later or email us at info@cinnora.store.'
                    });
                },
            );
    };

    return (
        <div className="contact-page">
            <StatusModal
                isOpen={statusModal.isOpen}
                onClose={() => setStatusModal({ ...statusModal, isOpen: false })}
                title={statusModal.title}
                message={statusModal.message}
                type={statusModal.type}
            />

            <div className="contact-hero">
                <div className="container">
                    <h1 className="contact-title">Contact Us</h1>
                    <p className="contact-subtitle">We'd love to hear from you. Reach out to us for any inquiries.</p>
                </div>
            </div>

            <div className="contact-content">
                <div className="container">
                    <div className="contact-grid">

                        {/* --------- INFO SECTION WITHOUT ADDRESS --------- */}
                        <div className="contact-info">
                            <h2>Get in Touch</h2>
                            <p>Have questions about our products or want to place a bulk order? We're here to help.</p>

                            <div className="info-item">
                                <h3>Email</h3>
                                <p>info@cinnora.store</p>
                            </div>
                            <div className="info-item">
                                <h3>Phone</h3>
                                <p>+94 77 877 8917</p>
                            </div>
                        </div>

                        {/* --------- FORM --------- */}
                        <div className="contact-form-wrapper">
                            <form ref={form} onSubmit={sendEmail} className="contact-form">

                                <input type="hidden" name="product_name" value="General Inquiry" />

                                <div className="form-group">
                                    <label htmlFor="user_name">Name</label>
                                    <input type="text" name="user_name" id="user_name" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="user_email">Email</label>
                                    <input type="email" name="user_email" id="user_email" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="subject">Subject</label>
                                    <input type="text" name="subject" id="subject" required />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="5" required></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary btn-submit" disabled={isSending}>
                                    {isSending ? 'Sending...' : 'Send Message'}
                                </button>

                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
