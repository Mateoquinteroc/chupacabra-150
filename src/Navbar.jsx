import { useState } from 'react';
import './Navbar.css';

const Navbar = ({ onHelpClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <a href="#inicio" className="navbar-brand" onClick={handleLinkClick}>
          Chupacabra 150
        </a>
        <button
          className="navbar-toggle"
          aria-label="Abrir menú de navegación"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`navbar-links ${menuOpen ? 'is-open' : ''}`}>
          <li><a href="#inicio" onClick={handleLinkClick}>Inicio</a></li>
          <li><a href="#visor" onClick={handleLinkClick}>Visor 3D</a></li>
          <li><a href="#creditos" onClick={handleLinkClick}>Créditos</a></li>
          <li>
            <button
              className="navbar-help"
              onClick={() => {
                handleLinkClick();
                onHelpClick();
              }}
            >
              Ayuda
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
