import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className={`header ${isHome ? 'header-transparent' : ''}`}>
            <div className="container header-container">
                <Link to="/" className="logo">
                    <img src={isHome ? "/assets/logo-dark.png" : "/assets/logo-dark.png"} alt="Cinnora" className="logo-image" />
                </Link>
                <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="nav-list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link" onClick={() => setIsMenuOpen(false)}>About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-link" onClick={() => setIsMenuOpen(false)}>Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>Contact</Link>
                        </li>
                    </ul>
                </nav>
                <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </button>
            </div>
        </header>
    );
};

export default Header;
