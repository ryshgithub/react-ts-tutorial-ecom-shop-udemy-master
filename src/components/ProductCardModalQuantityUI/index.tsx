import React from 'react';
import { ProductCardModalQuantityUIProps } from './interface';

export const ProductCardModalQuantityUI: React.FC<ProductCardModalQuantityUIProps> = ({ quantity }) => {
    return (
        <div className="quantity-container">
            <label>
                <i className="fa fa-minus qty-button"></i>
                <span className="qty-value">QTY {quantity}</span>
                <i className="fa fa-plus qty-button"></i>
            </label>
        </div>
    )
}