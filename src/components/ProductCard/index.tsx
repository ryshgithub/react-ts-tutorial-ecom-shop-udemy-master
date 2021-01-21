import React from 'react';
import { ProductCardModal } from '../ProductCardModal';
import { ProductCardProps, ProductCardState } from './interface';
import './style.css';

export class ProductCard extends React.Component<ProductCardProps, ProductCardState> {
    constructor(props: ProductCardProps) {
        super(props);
        this.state = {
            showDetails: false
        }
    }

    onClickProductCard = () => {
        this.setState({ showDetails: true });
    }

    onClickOutsideModalBody = () => {
        this.setState({ showDetails: false });
    }

    render() {
        const { showDetails } = this.state;
        const { product } = this.props;
        const { title, variants } = product;

        const imageURL = variants[0].image;

        return (
            <div onClick={this.onClickProductCard} className="product-card-container">
                <div style={{ backgroundImage: `url(${imageURL})` }} className="product-image" />
                <div className="product-details">
                    <p>{title}</p>
                </div>
                <ProductCardModal onClickOutsideModalBody={this.onClickOutsideModalBody} show={showDetails} product={product} />
            </div>
        );
    }
}
