import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import StatusModal from './StatusModal';
import '../styles/ProductDetail.css';

const InquireModal = ({ product, isOpen, onClose }) => {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const [statusModal, setStatusModal] = useState({ isOpen: false, type: 'success', title: '', message: '' });

    if (!isOpen && !statusModal.isOpen) return null;

    const handleCloseStatus = () => {
        setStatusModal({ ...statusModal, isOpen: false });
        if (statusModal.type === 'success') {
            onClose();
        }
    };

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
                    setStatusModal({
                        isOpen: true,
                        type: 'success',
                        title: 'Inquiry Sent!',
                        message: 'Thank you for your interest. We have received your inquiry and will get back to you shortly.'
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    setIsSending(false);
                    setStatusModal({
                        isOpen: true,
                        type: 'error',
                        title: 'Sending Failed',
                        message: 'Something went wrong. Please try again later or contact us directly at info@cinnora.store.'
                    });
                },
            );
    };

    // If status modal is open, render it instead of the form modal (or on top)
    if (statusModal.isOpen) {
        return (
            <StatusModal
                isOpen={statusModal.isOpen}
                onClose={handleCloseStatus}
                title={statusModal.title}
                message={statusModal.message}
                type={statusModal.type}
            />
        );
    }

    return (
        <div className="inquire-modal-overlay" onClick={onClose}>
            <div className="inquire-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="inquire-modal-close" onClick={onClose}>&times;</button>
                <h2>Inquire about {product.name}</h2>
                <form ref={form} onSubmit={sendEmail} className="inquire-form">
                    {/* Hidden input for product name so it's sent in the email */}
                    <input type="hidden" name="product_name" value={product.name} />

                    <div className="inquire-form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" required />
                    </div>
                    <div className="inquire-form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" required />
                    </div>
                    <div className="inquire-form-group">
                        <label htmlFor="phone">Phone (Optional)</label>
                        <input type="tel" name="phone" id="phone" />
                    </div>
                    <div className="inquire-form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            rows="4"
                            defaultValue={`I am interested in learning more about ${product.name}. Please send me more details.`}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="inquire-btn-submit" disabled={isSending}>
                        {isSending ? 'Sending...' : 'Send Inquiry'}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default InquireModal;
