import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { ProductCard } from '../../components/ProductCard';
import ProductDetailsAction from '../../store/actions/productDetailsAction';
import { StoreStateType } from '../../store/rootReducer';
import { AllProductsDispatchToProps, AllProductsOwnProps, AllProductsPageProps, AllProductsStateProps } from './interface';
import './style.css';

class AllProductsPage extends React.Component<AllProductsPageProps> {
    componentDidMount() {
        this.props.fetchShopProducts({})
    }

    renderAllProducts = () => {
        const { shopProducts } = this.props;
        return shopProducts.products.map(({ title, variants, id  }) => {
            return (
                <div key={id} className="product-item-container">
                    <ProductCard name={title} url={variants[0].image} />
                </div>
            );
        })
    }

    render() {
        return (
            <div className="all-products-page-container">
                {this.renderAllProducts()}
            </div>
        )
    }
}

const mapStateToProps: MapStateToProps<AllProductsStateProps, AllProductsOwnProps, StoreStateType> = (state) => {
    return {
        shopProducts: state.productDetails.shopProducts
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<AllProductsDispatchToProps, AllProductsOwnProps> = (dispatch) => {
    const { fetchShopProducts } = new ProductDetailsAction();
    return {
        fetchShopProducts:(options) => dispatch(fetchShopProducts(options)),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);