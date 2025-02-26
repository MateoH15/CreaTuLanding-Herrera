// filepath: /c:/Users/Usuario/OneDrive/Escritorio/Proyectos/proyecto-inicial/src/components/layout/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import CartWidget from '../common/CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MiTienda</div>
      <ul className="nav-links">
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/category/electronics">Electrónica</Link></li>
        <li><Link to="/category/clothing">Ropa</Link></li>
        <li><Link to="/category/home">Hogar</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;