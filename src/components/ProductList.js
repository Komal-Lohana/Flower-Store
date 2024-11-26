import React from 'react';
import ProductCard from './ProductCard';
import rose from '../images/rose.jpg';
import tulip from '../images/tulip.jpg';
import orchid from '../images/orchid.jpg';
import '../App.css'

const products = [
    { id: 1, name: 'Rose Bouquet', price: 29.99, image: rose },
  { id: 2, name: 'Tulip Arrangement', price: 24.99, image: tulip },
  { id: 3, name: 'Orchid Pot', price: 34.99, image: orchid },
];

const ProductList = () => {
  return (
    <section id="products" className="product-list">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
