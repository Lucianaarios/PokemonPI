import React from 'react';
import FormCreate from './FormCreate';
import './Modal.css';

const Modal = ({ onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          Cerrar
        </button>
        <FormCreate onClose={onClose} />
      </div>
    </div>
  );
};

export default Modal;