import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase/firebaseConfig"
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [addedToCart, setAddedToCart] = useState(false);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const docRef = doc(db, "products", productId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setProduct({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No such document!");
      }
    };

    fetchProduct();
  }, [productId]);

  const handleAddToCart = (quantity) => {
    addToCart(product, quantity);
    setAddedToCart(true);
  };

  if (!product) {
    return <div>Cargando...</div>;
  }

  return (
    <div className="item-detail-container">
      <h2>{product.name}</h2>
      <img src={product.imageUrl} alt={product.name} />
      <p>{product.description}</p>
      <p>Precio: ${product.price}</p>
      {addedToCart ? (
        <p>Producto agregado al carrito</p>
      ) : (
        <ItemCount stock={product.stock} initial={1} onAdd={handleAddToCart} />
      )}
    </div>
  );
};

export default ItemDetailContainer;