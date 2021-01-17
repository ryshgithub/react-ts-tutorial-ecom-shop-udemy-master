import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { ProductCard } from '../../components/ProductCard';
import ProductDetailsAction from '../../store/actions/productDetailsAction';
import { StoreStateType } from '../../store/rootReducer';
import { BestSellerDispatchProps, BestSellerProps, BestSellerStateProps } from './inteface';
import './style.css';

class BestSeller extends React.Component<BestSellerProps> {
    componentDidMount() {
        const { bestSellerProducts } = this.props;
        if(!bestSellerProducts.length) {
            this.props.fetchAllBestSellerProducts();
        }
        
    }

    renderBestSellerProducts = () => {
        const { bestSellerProducts } = this.props;

        return bestSellerProducts.map(({ title, id, variants }) => {
            return (
                <ProductCard
                    key={id}
                    url={variants[0].image}
                    name={title}
                />
            )
        });
    }

    render() {
        return (
            <div className="best-seller-container">
                <h2>Best Seller</h2>
                <div className="best-seller-products">
                    {this.renderBestSellerProducts()}
                </div>
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<BestSellerStateProps, {}, StoreStateType> = (state) => {
    return {
        bestSellerProducts: state.productDetails.bestSellerProducts
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<BestSellerDispatchProps, {}> = (dispatch) => {
    const { fetchAllBestSellerProducts } = new ProductDetailsAction();

    return {
        fetchAllBestSellerProducts: () => dispatch(fetchAllBestSellerProducts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BestSeller);