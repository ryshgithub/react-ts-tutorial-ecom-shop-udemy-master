import React from 'react';
import { ProductCardModalQuantityUIProps } from './interface';

export const ProductCardModalQuantityUI: React.FC<ProductCardModalQuantityUIProps> = ({ quantity, onClickAdd, onClickMinus }) => {
    return (
        <div className="quantity-container">
            <label className="quantity-container-label">
                <div><i onClick={onClickMinus} className="fa fa-minus qty-button"></i></div>
                <span className="qty-value">QTY {quantity}</span>
                <div><i onClick={onClickAdd} className="fa fa-plus qty-button"></i></div>
            </label>
        </div>
    )
}