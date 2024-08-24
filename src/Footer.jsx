import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <h2>Visualización 3D</h2>
          <p>
            Experiencia de dibujo en vivo feria del libro 2023 convertida en modelos 3D y presentada en la web usando Three.js
          </p>
        </div>
        <div className="footer-links">
          <h3>Enlaces Útiles</h3>
          <ul>
            <li><a href="#contact">Contacto</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <h3>Síguenos</h3>
          <h3>Chupacabra</h3>
          <a href="https://www.instagram.com/chupacabraclub/" target="_blank" rel="noopener noreferrer"> Instagram </a>
          <h3>desarrollador</h3>
          <a href="https://www.instagram.com/malalinea_/" target="_blank" rel="noopener noreferrer"> Instagram </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Tu Proyecto. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
