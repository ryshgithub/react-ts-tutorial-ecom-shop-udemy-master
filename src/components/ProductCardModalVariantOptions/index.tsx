import React from 'react';
import { Button } from '../../ui-components/Button';
import { getBackgroundColorStyleForButton } from '../../utils/product';
import { ProductCardModalVariantOptionsProps } from './interface';

export const ProductCardModalVariantOptions: React.FC<ProductCardModalVariantOptionsProps> = 
    ({ variants, selectedVariant, variantsOptionsAvailable, onColorChange, onSizeChange }) => {

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

    const handleSizeChange = (size: string) => () => {
        onSizeChange(size);
    }

    const handleColorChange = (color: string) => () => {
        onColorChange(color);
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
                    onClick={handleSizeChange(size)}
                    key={size}
                    selected={selectedVariant.size === size}
                    disabled={!variantsOptionsAvailable[size]}
                >
                    {size}
                </Button>
            );
        }

        processData.push(size);
    });

    variantsOptionsAvailable[selectedVariant.size].forEach(color => {
        const backgroundStyle: React.CSSProperties = getBackgroundColorStyleForButton(color);

        colorsUI.push(
            <Button
                style={backgroundStyle}
                className={`${variantButtonClassName} color`}
                key={color}
                onClick={handleColorChange(color)}
                selected={selectedVariant.color === color}
            />

        );
    })

    return (
        <div className="variant-options-container">
            {renderVariantOptionsContainer('Sizes', sizesUI)}
            {renderVariantOptionsContainer('Colors', colorsUI)}
        </div>
    );
}