import React from 'react';
import '../styles/StatusModal.css';

const StatusModal = ({ isOpen, onClose, title, message, type = 'success' }) => {
    if (!isOpen) return null;

    return (
        <div className="status-modal-overlay" onClick={onClose}>
            <div className="status-modal-content" onClick={(e) => e.stopPropagation()}>
                <div className={`status-icon ${type}`}>
                    {type === 'success' ? '✓' : '!'}
                </div>
                <h3 className="status-title">{title}</h3>
                <p className="status-message">{message}</p>
                <button className="btn btn-primary status-btn" onClick={onClose}>
                    Close
                </button>
            </div>
        </div>
    );
};

export default StatusModal;
