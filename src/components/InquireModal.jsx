import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/ProductDetail.css';

const InquireModal = ({ product, isOpen, onClose }) => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);

    if (!isOpen) return null;

    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);

        emailjs
            .sendForm('service_pnmmdmj', 'template_fmutxir', form.current, {
                publicKey: 'sE414j78e-rqUy8p7',
            })
            .then(
                () => {
                    alert('Inquiry sent successfully!');
                    setIsSending(false);
                    onClose();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    alert('Failed to send inquiry. Please try again.');
                    setIsSending(false);
                },
            );
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>Inquire about {product.name}</h2>
                <form ref={form} onSubmit={sendEmail} className="inquire-form">
                    {/* Hidden input for product name so it's sent in the email */}
                    <input type="hidden" name="product_name" value={product.name} />

                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone (Optional)</label>
                        <input type="tel" name="phone" id="phone" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            defaultValue={`I am interested in learning more about ${product.name}. Please send me more details.`}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Inquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquireModal;
