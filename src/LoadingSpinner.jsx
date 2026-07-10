import './LoadingSpinner.css';

const LoadingSpinner = ({ progress = 0 }) => {
  return (
    <div className="spinner-container">
      <h1>Cargando el visor 3D…</h1>
      <div className="spinner"></div>
      <p className="spinner-progress">{Math.round(progress)}%</p>
    </div>
  );
};

export default LoadingSpinner;
