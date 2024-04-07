import React, { useState, useEffect } from 'react';
import ProductCard from '../ProductCard';

import './index.css'

const ProductGrid = ({ onProductCountChange }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
        console.log(products)
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchProducts();
  }, [products]); 

  useEffect(() => {
    onProductCountChange(products.length);
  }, [products, onProductCountChange]);


  return (
    <div className="productGrid">
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );

};

export default ProductGrid;