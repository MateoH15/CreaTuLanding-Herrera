import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simular llamada a una API para obtener los productos
    const fetchProducts = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve([{ id: 1, name: 'Producto 1' }, { id: 2, name: 'Producto 2' }]), 1000)
      );
      setProducts(response);
    };

    fetchProducts();
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h2 className="welcome-message">{greeting}</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemListContainer;