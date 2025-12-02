import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductDetail.css';

const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = products.find(p => p.id === parseInt(id));
        setProduct(foundProduct);
    }, [id]);

    const handleInquire = () => {
        const message = `Hi, I'm interested in ${product.name}. Could you share more details?`;
        const whatsappUrl = `https://wa.me/94778778917?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    if (!product) {
        return <div className="container product-not-found"><h2>Product not found</h2></div>;
    }

    return (
        <div className="product-detail-page">
            <div className="container product-detail-container">

                {/* Left - Info */}
                <div className="product-detail-info">

                    <span className="detail-category">{product.category}</span>
                    <h1 className="detail-title">{product.name}</h1>
                    <p className="detail-description">{product.description}</p>

                    <div className="detail-actions">
                        <button className="btn btn-primary btn-inquire" onClick={handleInquire}>
                            Inquire Now
                        </button>

                        <Link to="/contact" className="btn btn-white btn-contact">
                            Contact Us
                        </Link>
                    </div>
                </div>

                {/* Right - Image */}
                <div className="product-detail-image-wrapper">
                    <img src={product.image} alt={product.name} className="detail-image" />
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
