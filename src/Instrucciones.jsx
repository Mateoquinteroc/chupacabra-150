import React, { useState } from 'react';
import './Instrucciones.css'; // Importa el archivo CSS para estilos

const Instrucciones = () => {
  const [isVisible, setIsVisible] = useState(true); // Estado para controlar la visibilidad

  const handleClick = () => {
    setIsVisible(false); // Oculta el componente al hacer clic
  };

  if (!isVisible) return null; // No renderiza nada si no está visible

  return (
    <div className="instrucciones-overlay" onClick={handleClick}>
      <div className="instrucciones-content">
        <h1>Instrucciones de Uso</h1>
        <p>Para interactuar con la página, sigue estos pasos:</p>
        <ul>
          <li>Desliza para explorar</li>
          <li>Usa el scroll para el zoom- acercar alejar</li>
          <li>Con el click navega orbitalmente si le sumas shift te moveras en un eje fijo</li>
        </ul>
        <p>No puedes estar sobre el rectangulo gris central si lo que quieres es navegar en la pagina</p>
        <p>Haz clic en cualquier parte para cerrar este mensaje.</p>
      </div>
    </div>
  );
};

export default Instrucciones;
