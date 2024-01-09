import React, { useState } from 'react';
import FormCreate from './FormCreate';
import './Modal.css';

const Modal = ({ onClose }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  const showOverlay = () => {
    setOverlayVisible(true);
  };

  const hideOverlay = () => {
    setOverlayVisible(false);
  };

  return (
    <div>
      {overlayVisible && <div className="overlay"></div>}
      <div className="modal-overlay">
        <div className="modal-content">
          <button className="close-button" onClick={() => { onClose(); hideOverlay(); }}>
            Cerrar
          </button>
          <FormCreate onClose={() => { onClose(); hideOverlay(); }} />
        </div>
      </div>
    </div>
  );
};

export default Modal;