import React from 'react';
import './NavBar.css';
import CartWidget from '../common/CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="logo">MiTienda</div>
      <ul className="nav-links">
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;