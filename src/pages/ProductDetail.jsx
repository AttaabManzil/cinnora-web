import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import InquireModal from '../components/InquireModal';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    if (!product) {
        return <div className="container product-not-found"><h2>Product not found</h2></div>;
    }

    return (
        <div className="product-detail-page">
            <div className="container product-detail-container">
                <div className="product-detail-info">
                    <span className="detail-category">{product.category}</span>
                    <h1 className="detail-title">{product.name}</h1>
                    <p className="detail-description">{product.description}</p>

                    <div className="detail-actions">
                        <button className="btn btn-primary btn-inquire" onClick={() => setIsModalOpen(true)}>
                            Inquire Now
                        </button>
                        <Link to="/contact" className="btn btn-outline btn-contact">
                            Contact Us
                        </Link>
                    </div>
                </div>

                <div className="product-detail-image-wrapper">
                    {/* Placeholder for now, will be replaced with product.image */}
                    <div className="detail-placeholder"></div>
                </div>
            </div>

            <InquireModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                productName={product.name}
            />
        </div>
    );
};

export default ProductDetail;
