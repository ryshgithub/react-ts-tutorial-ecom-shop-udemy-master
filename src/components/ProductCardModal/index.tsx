import React from 'react';
import { Modal } from '../../ui-components/Modal';
import { ProductCardModalProps } from './interface';
import './style.css';

export class ProductCardModal extends React.Component<ProductCardModalProps> {
    render() {
        const { product, show, onClickOutsideModalBody } = this.props;
        const { title, variants } = product;

        const imageURL = variants[0].image;

        return (
            <Modal onClickOutsideModalBody={onClickOutsideModalBody} modalBodyClassName="product-card-modal-body" show={show}>
                <div className="modal-product-details-container">
                    <div className="modal-product-image">
                        <img src={imageURL} />
                    </div>
                    <div className="modal-product-details">
                        <p className="modal-product-name">{title}</p>
                    </div>
                </div>
            </Modal>
        )
    }
}