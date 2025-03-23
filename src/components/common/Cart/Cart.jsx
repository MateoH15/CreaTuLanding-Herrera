import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, clearCart, getTotalPrice } = useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="cart-empty">
        <h2>El carrito está vacío</h2>
        <Link to="/" className="continue-shopping">Continuar comprando</Link>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <h2>Tu Carrito</h2>
      {cart.map((item) => (
        <div key={item.id} className="cart-item">
          <img src={item.imageUrl} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>Cantidad: {item.quantity}</p>
            <p>Precio unitario: ${item.price}</p>
            <p>Subtotal: ${item.price * item.quantity}</p>
          </div>
          <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
        </div>
      ))}
      <div className="cart-summary">
        <h3>Total: ${getTotalPrice()}</h3>
        <button onClick={clearCart}>Vaciar carrito</button>
        <button className="checkout-button">Proceder al pago</button>
      </div>
    </div>
  );
};

export default Cart;