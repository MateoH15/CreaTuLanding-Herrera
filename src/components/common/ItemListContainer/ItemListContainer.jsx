import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2 className="welcome-message">{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;