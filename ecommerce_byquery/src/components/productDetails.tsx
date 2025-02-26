
<<<<<<< HEAD
import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchProductById } from '../api/api';  
import "../styles/productDetails.css";

const ProductDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

 
  const { data: product, isLoading, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id!), 
    enabled: !!id, 
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading product details</div>;
  if (!product) return <div>Product not found</div>;
=======
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
>>>>>>> 026a955910774cf75c5a4b23f68dd0842a17f1d4

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
