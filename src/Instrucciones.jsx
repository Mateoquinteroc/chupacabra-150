import './Instrucciones.css';

const Instrucciones = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="instrucciones-overlay" onClick={onClose}>
      <div className="instrucciones-content" onClick={(e) => e.stopPropagation()}>
        <button className="instrucciones-close" onClick={onClose} aria-label="Cerrar instrucciones">
          ✕
        </button>
        <h1>Instrucciones de uso</h1>
        <p>El visor 3D está desactivado por defecto para que puedas navegar la página con normalidad.</p>
        <ul>
          <li>Toca el botón &ldquo;Toca para interactuar&rdquo; para activar el modelo 3D</li>
          <li>Una vez activo, desliza con un dedo (o clic izquierdo) para orbitar</li>
          <li>Usa el pellizco (o scroll) para hacer zoom, y dos dedos (o clic derecho) para desplazar la vista</li>
          <li>Toca &ldquo;Salir del modo 3D&rdquo; para volver a navegar la página libremente</li>
        </ul>
        <p>Puedes volver a ver este mensaje en cualquier momento con el botón &ldquo;Ayuda&rdquo; del menú.</p>
      </div>
    </div>
  );
};

export default Instrucciones;
