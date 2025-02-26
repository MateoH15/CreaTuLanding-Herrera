import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './ItemDetailContainer.css';

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simular llamada a una API para obtener los detalles del producto
    const fetchProduct = async () => {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({
          id: productId,
          name: 'Producto ' + productId,
          description: 'Descripción del producto ' + productId,
          imageUrl: 'https://www.peregrinoteca.pt/uploads/media/images/zapatillas-adidas-terrex-ax4-gtx-w-gris-negro-1.jpg' 
        }), 1000)
      );
      setProduct(response);
    };

    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <button>Añadir al carrito</button>
    </div>
  );
};

export default ItemDetailContainer;