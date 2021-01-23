import React from 'react';
import { Button } from '../../ui-components/Button';
import { Modal } from '../../ui-components/Modal';
import { ProductCardModalPriceUI } from '../ProductCardModalPriceUI';
import { ProductCardModalQuantityUI } from '../ProductCardModalQuantityUI';
import { ProductCardModalVariantOptions } from '../ProductCardModalVariantOptions';
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


    render() {
        const { show, onClickOutsideModalBody, variants } = this.props;
        const { selectedVariant, quantity } = this.state;
        const { title, image } = selectedVariant;

        return (
            <Modal onClickOutsideModalBody={onClickOutsideModalBody} modalBodyClassName="product-card-modal-body" show={show}>
                <div className="modal-product-details-container">
                    <div className="modal-product-image-container">
                        <div style={{ backgroundImage: `url(${image})` }} className="modal-product-image" />
                    </div>
                    <div className="modal-product-details">
                        <p className="modal-product-name">{title}</p>
                        <ProductCardModalPriceUI selectedVariant={selectedVariant} />
                        <ProductCardModalQuantityUI quantity={quantity} />
                        <ProductCardModalVariantOptions selectedVariant={selectedVariant} variants={variants}  />
                        <Button type="primary" onClick={() => {}} className="add-to-cart-button" >
                            Add To Cart
                        </Button>
                    </div>
                </div>
            </Modal>
        )
    }
}