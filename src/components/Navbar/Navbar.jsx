import React, { useState } from 'react';
import './Navbar.css';
import vexafinal from '../../img/vexa-final.png';
import { FaBars, FaTimes } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='vexaSoftware-navbar-row'>
      <div className='vexaSoftware-navbar-column-left col-6 '>
        <img src={vexafinal} className="vexaSoftware-navbar-logo" alt="Vexa Logo" />
      </div>
      <div className='vexaSoftware-navbar-column-right col-6'>
        <div className={`nav-links ${isOpen ? 'open' : ''}`}>
          <a href="#main-banner" onClick={toggleMenu}>Inicio</a>
          <a href="#services" onClick={toggleMenu}>Servicios</a>
          <a href="#projects" onClick={toggleMenu}>Casos de éxito</a>
          <a href="#technologies" onClick={toggleMenu}>Tecnologías</a>
          <a href="#hiring" onClick={toggleMenu}>Contratación</a>
          <a href="#contact" className='vexaSoftware-navbar-buttons' onClick={toggleMenu}>Contacto</a>
        </div>
        <div className="hamburger-menu col-6" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
