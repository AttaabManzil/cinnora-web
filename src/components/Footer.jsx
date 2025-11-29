import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <img src="/assets/logo-light.png" alt="Cinnora" className="footer-logo" />
                    <p>Premium Sri Lankan Spices</p>
                </div>
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h3>Contact Us</h3>
                    <p>Email: info@cinnora.com</p>
                    <p>Phone: +94 77 123 4567</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Cinnora. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
