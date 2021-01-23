import React from 'react';
import { getDiscountedPrice } from '../../utils/product';
import { ProductCardModalPriceUIProps } from './interface';

export const ProductCardModalPriceUI: React.FC<ProductCardModalPriceUIProps> = ({ selectedVariant }) => {
    const { discount, price } = selectedVariant;

    const priceUI = (
        <p className="price-ui">
            {discount ? (
                <React.Fragment>
                    <del className="old-price">{price}</del>
                    <ins>${getDiscountedPrice(price, discount)}</ins>
                </React.Fragment>
            ): <ins>{price}</ins>}
        </p>
    );

    return priceUI;
}