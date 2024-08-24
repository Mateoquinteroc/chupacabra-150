import React, { useState, useEffect } from 'react';
import LoadingSpinner from './LoadingSpinner';

const LoadingMiddleware = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Mantiene el spinner visible por 5 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer); // Limpia el timer si el componente se desmonta
  }, []);

  if (isLoading) {
    return <LoadingSpinner />; // Muestra el spinner mientras se carga
  }

  return <>{children}</>; // Renderiza los hijos (contenido de la app) después de 5 segundos
};

export default LoadingMiddleware;
