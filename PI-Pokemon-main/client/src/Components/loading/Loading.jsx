import React from 'react';
import './Loading.css'; // Asegúrate de tener estilos CSS para el componente Loading

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;