import React from 'react';
import { Button } from '../../ui-components/Button';
import { ProductCardModalVariantOptionsProps } from './interface';

export const ProductCardModalVariantOptions: React.FC<ProductCardModalVariantOptionsProps> = ({ variants, selectedVariant }) => {

    const renderVariantOptionsContainer = (category: string, options: React.ReactNode[]) => {
        return (
            <div className="variant-container">
                <p className="variant-option-header">{category}</p>
                <div className="variant-option">
                    {options}
                </div>
            </div>
        )
    }

    const sizesUI: React.ReactNode[] = [];
    const colorsUI: React.ReactNode[] = [];

    const processData: string[] = [];

    const variantButtonClassName = 'variant-option-button';

    variants.forEach(({ size, color }) => {
        if (!processData.includes(size)) {
            sizesUI.push(
                <Button
                    className={`${variantButtonClassName} size`}
                    onClick={() => {}}
                    key={size}
                    selected={selectedVariant.size === size}
                >
                    {size}
                </Button>
            );
        }

        if (!processData.includes(color)) {
            const arrayColors = color.split('&');
            const backgroundStyle: React.CSSProperties = arrayColors.length > 1
                ? { backgroundImage: `linear-gradient(${arrayColors.join(',')})` }
                : { backgroundColor: color }

            colorsUI.push(
                <Button
                    style={backgroundStyle}
                    className={`${variantButtonClassName} color`}
                    key={color}
                    onClick={() => {}}
                    selected={selectedVariant.color === color}
                />

            );
        }

        processData.push(color);
        processData.push(size);
    })

    return (
        <div className="variant-options-container">
            {renderVariantOptionsContainer('Sizes', sizesUI)}
            {renderVariantOptionsContainer('Colors', colorsUI)}
        </div>
    );
}