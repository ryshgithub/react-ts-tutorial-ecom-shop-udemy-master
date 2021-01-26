import React from 'react';
import { upperCaseFirstLetter } from '../../utils/helper';
import { getDiscountedPrice, getSubtotalPrice, parsePrice } from '../../utils/product';
import { ShoppingCartProductProps } from './interface';
import './style.css';

export const ShoppingCartProduct: React.FC<ShoppingCartProductProps> = ({ product, removeToCart }) => {
    const { title, image, size, color, quantity } = product;

    const subtotalPrice = getSubtotalPrice(product);

    const handleOnClickCloseButton = () => {
        removeToCart(product);
    }

    return (
        <div className="shopping-cart-product-container">
            <div className="image-container">
                <div style={{ backgroundImage: `url(${image})` }} className="product-image" />
            </div>
            <div className="product-details">
                <p className="product-name">{title}</p>
                <p>{size}</p>
                <p>{upperCaseFirstLetter(color)}</p>
                <p>QTY: {quantity}</p>
                <p className="sub-total">Subtotal: ${subtotalPrice}</p>
            </div>
            <div onClick={handleOnClickCloseButton} className="close-button"><i className="fa fa-times" aria-hidden="true"></i></div>
        </div>
    )
}