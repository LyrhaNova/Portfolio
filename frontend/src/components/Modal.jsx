import React, { useEffect, useState } from 'react';
import '../styles/components/_modal.scss';

const Modal = ({ onClose, showModal, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsVisible(false);
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <div className={`modal-overlay ${isVisible ? 'visible' : ''}`} onClick={onClose}>
      <div
        className={`modal-content ${isVisible ? 'visible' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>✖</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;