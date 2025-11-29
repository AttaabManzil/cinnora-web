import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const NotFound = () => {
    return (
        <div className="container" style={{ padding: '150px 20px', textAlign: 'center' }}>
            <h1 style={{ fontSize: '4rem', color: '#482E1D', marginBottom: '20px' }}>404</h1>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Page Not Found</h2>
            <p style={{ marginBottom: '40px', color: '#666' }}>The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.</p>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
    );
};

export default NotFound;
