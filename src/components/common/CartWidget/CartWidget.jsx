import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import './CartWidget.css';

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-counter">{getTotalItems()}</span>
    </Link>
  );
};

export default CartWidget;