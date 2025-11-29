import React, { useState } from 'react';
import '../styles/ProductDetail.css'; // We'll add modal styles here

const InquireModal = ({ isOpen, onClose, productName }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: `I would like to inquire about ${productName}.`
    });

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically send the data to a backend
        alert(`Thank you, ${formData.name}! Your inquiry for ${productName} has been sent.`);
        onClose();
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>
                <h2>Inquire About Product</h2>
                <p className="modal-subtitle">{productName}</p>

                <form onSubmit={handleSubmit} className="inquire-form">
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone (Optional)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="btn-submit">Send Inquiry</button>
                </form>
            </div>
        </div>
    );
};

export default InquireModal;
