import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import '../styles/components/_modal.scss';

const Modal = ({ onClose, showModal, children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false); // Nouvel état pour la fermeture

  useEffect(() => {
    if (showModal) {
      setTimeout(() => {
        setIsVisible(true);
      }, 10);
      document.body.style.overflow = 'hidden';
    } else {
      setIsClosing(true);
      setTimeout(() => {
        setIsVisible(false);
        setIsClosing(false);
      }, 300);
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <div className={`modal ${isVisible ? 'modal--visible' : ''} ${isClosing ? 'modal--closing' : ''}`} onClick={onClose}>
      <div
        className={`modal__overlay ${isVisible ? 'modal__overlay--visible' : ''} ${isClosing ? 'modal__overlay--closing' : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose}>✖</button>
        <div className={`modal__content ${isVisible ? 'modal__content--visible' : ''} ${isClosing ? 'modal__content--closing' : ''}`}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;

