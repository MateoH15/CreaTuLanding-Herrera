import React from 'react';
import './CartWidget.css';

const CartWidget = () => {
  return (
    <div className="cart-widget">
      <span className="cart-icon">🛒</span>
      <span className="cart-counter">0</span>
    </div>
  );
};

export default CartWidget;