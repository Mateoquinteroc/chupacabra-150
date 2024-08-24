import React from 'react';
import './LoadingSpinner.css';

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <h1>estamos cargando todo</h1>
      <br></br>
      <div className="spinner"></div>
    </div>
  );
};

export default LoadingSpinner;