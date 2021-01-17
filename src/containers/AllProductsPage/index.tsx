import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { ProductCard } from '../../components/ProductCard';
import ShopAction from '../../store/actions/shopAction';
import { StoreStateType } from '../../store/rootReducer';
import { AllProductsDispatchToProps, AllProductsOwnProps, AllProductsPageProps, AllProductsStateProps } from './interface';
import './style.css';

class AllProductsPage extends React.Component<AllProductsPageProps> {
    componentDidMount() {
        const { shopProducts } = this.props;

        if(!shopProducts.products.length) {
            this.props.fetchShopProductsAndFilters();
        }
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
    const { shopProducts, productFilters } = state.shop;
    return {
        shopProducts: shopProducts,
        productFilters: productFilters
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<AllProductsDispatchToProps, AllProductsOwnProps> = (dispatch) => {
    const { fetchShopProducts, fetchShopProductsAndFilters } = new ShopAction();
    return {
        fetchShopProducts:(options) => dispatch(fetchShopProducts(options)),
        fetchShopProductsAndFilters: () => dispatch(fetchShopProductsAndFilters()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AllProductsPage);