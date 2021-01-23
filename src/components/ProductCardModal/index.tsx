import React from 'react';
import { Button } from '../../ui-components/Button';
import { Modal } from '../../ui-components/Modal';
import { getDiscountedPrice } from '../../utils/product';
import { ProductCardModalProps, ProductCardModalState } from './interface';
import './style.css';

export class ProductCardModal extends React.Component<ProductCardModalProps, ProductCardModalState> {
    constructor(props: ProductCardModalProps) {
        super(props);
        
        this.state = {
            selectedVariant: props.initialVariant,
            quantity: 1
        }
    }

    renderPriceUI = () => {
        const { selectedVariant } = this.state;
        const { discount, price } = selectedVariant;

        const priceUI = (
            <p className="price-ui">
                {discount ? (
                    <React.Fragment>
                        <del>{price}</del>
                        <ins>{getDiscountedPrice(price, discount)}</ins>
                    </React.Fragment>
                ): <ins>{price}</ins>}
            </p>
        );

        return priceUI;
    }

    renderQuantityUI = () => {
        const { quantity } = this.state;
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

    handleButtonClick = () => {

    }

    renderVariantOptionsContainer = (category: string, options: React.ReactNode[]) => {
        return (
            <div className="variant-container">
                <p className="variant-option-header">{category}</p>
                <div className="variant-option">
                    {options}
                </div>
            </div>
        )
    }

    renderVariantOptions = () => {
        const { variants } = this.props;
        const { selectedVariant } = this.state;

        const sizesUI: React.ReactNode[] = [];
        const colorsUI: React.ReactNode[] = [];

        const processData: string[] = [];

        const variantButtonClassName = 'variant-option-button';

        variants.forEach(({ size, color }) => {
           if(!processData.includes(size)) {
                sizesUI.push(
                    <Button
                        className={`${variantButtonClassName} size`}
                        onClick={this.handleButtonClick}
                        key={size}
                        selected={selectedVariant.size === size}
                    >
                        {size}
                    </Button>
                );
           }

           if(!processData.includes(color)) {
                const arrayColors = color.split('&');
                const backgroundStyle: React.CSSProperties = arrayColors.length > 1
                    ? { backgroundImage: `linear-gradient(${arrayColors.join(',')})` }
                        : { backgroundColor: color }

                colorsUI.push(
                    <Button
                        style={backgroundStyle}
                        className={`${variantButtonClassName} color`}
                        key={color}
                        onClick={this.handleButtonClick}
                        selected={selectedVariant.color === color}
                    />

                );
           }

            processData.push(color);
            processData.push(size);
        })

        return (
            <div className="variant-options-container">
                {this.renderVariantOptionsContainer('Sizes', sizesUI)}
                {this.renderVariantOptionsContainer('Colors', colorsUI)}
            </div>
        );
    }

    render() {
        const { show, onClickOutsideModalBody } = this.props;
        const { selectedVariant } = this.state;
        const { title, image } = selectedVariant;

        return (
            <Modal onClickOutsideModalBody={onClickOutsideModalBody} modalBodyClassName="product-card-modal-body" show={show}>
                <div className="modal-product-details-container">
                    <div className="modal-product-image-container">
                        <div style={{ backgroundImage: `url(${image})` }} className="modal-product-image" />
                    </div>
                    <div className="modal-product-details">
                        <p className="modal-product-name">{title}</p>
                        {this.renderPriceUI}
                        {this.renderQuantityUI()}
                        {this.renderVariantOptions()}
                        <Button type="primary" onClick={() => {}} className="add-to-cart-button" >
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </Modal>
        )
    }
}