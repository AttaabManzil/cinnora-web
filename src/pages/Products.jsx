import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/Products.css';

const Products = () => {
    return (
        <div className="products-page">
            <div className="container">
                <h1 className="products-title">Our Premium Products</h1>
                <div className="products-grid-page">
                    {products.map((product) => (
                        <div key={product.id} className="product-card-page">
                            <div className="product-image-wrapper-page">
                                {product.image ? (
                                    <img src={product.image} alt={product.name} className="product-image-page" />
                                ) : (
                                    <div className="product-placeholder"></div>
                                )}
                            </div>
                            <div className="product-details-page">
                                <span className="product-category">{product.category}</span>
                                <h3 className="product-name">{product.name}</h3>
                                <Link to={`/products/${product.id}`} className="btn-view-product">View Product</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;
