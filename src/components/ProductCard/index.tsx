import React from 'react';
import { ProductCardProps } from './interface';
import './style.css';

export const ProductCard: React.FC<ProductCardProps> = ({ name, url }) => {
    return (
        <div className="product-card-container">
            <div style={{ backgroundImage: `url(${url})` }} className="product-image" />
            <div className="product-details">
                <p>{name}</p>
            </div>
        </div>
    )
}