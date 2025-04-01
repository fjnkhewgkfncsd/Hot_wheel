import React, { useEffect } from 'react';
import "../Styles/Modal.css";

const Modal = ({ isOpen, onClose, children }) => {
    // Close modal when pressing Escape key
    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal-content" 
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal="true"
            >
                <button 
                    className="modal-close" 
                    onClick={onClose}
                    aria-label="Close modal"
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;