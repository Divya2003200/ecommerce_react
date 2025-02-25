
import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GlobalContext } from '../components/GloablState'
import '../styles/productDetails.css';

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const context = useContext(GlobalContext);
  const { state } = context || { state: { products: [] } }; 
  const [product, setProduct] = useState<{ title: string; description: string; price: number; image: string } | null>(null);

  useEffect(() => {
    const foundProduct = state.products.find((prod) => prod.id.toString() === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
  }, [id, state.products]);

  if (!product) {
    return <div>Loading...</div>; 
  }

  return (
    <div className="product-details">
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} className="product-image" />
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetails;
