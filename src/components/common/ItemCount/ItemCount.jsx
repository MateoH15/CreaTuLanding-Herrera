import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const handleAdd = () => {
    if (count < stock) setCount(count + 1);
  };

  const handleSubtract = () => {
    if (count > 1) setCount(count - 1);
  };

  return (
    <div className="item-count">
      <button onClick={handleSubtract}>-</button>
      <span>{count}</span>
      <button onClick={handleAdd}>+</button>
      <button className="add-to-cart" onClick={() => onAdd(count)}>
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;