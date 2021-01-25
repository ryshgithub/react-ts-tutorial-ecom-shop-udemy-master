import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { Link } from 'react-router-dom';
import { ShoppingCartProduct } from '../../components/ShoppingCartProduct';
import { ROUTE } from '../../constants/route';
import UserAction from '../../store/actions/userAction';
import { ProductPurchase } from '../../store/reducers/userReducer';
import { StoreStateType } from '../../store/rootReducer';
import { Button } from '../../ui-components/Button';
import Popover from '../../ui-components/Popover';
import { ShoppingCartDispatchProps, ShoppingCartOwnProps, ShoppingCartProps, ShoppingCartState, ShoppingCartStateProps } from './interface';
import './style.css';

class ShoppingCart extends React.Component<ShoppingCartProps, ShoppingCartState> {
    constructor(props: ShoppingCartProps) {
        super(props);

        this.state = {
            showPopover: false,
        }
    }

    handlePopoverClick = () => {
        const { cart } = this.props;
        cart.length && this.setState({ showPopover: !this.state.showPopover });
    }

    handleRemoveToCart = (product: ProductPurchase) => {
        const { cart } = this.props;
        cart.length === 1 && this.setState({ showPopover: false })
        this.props.removeToCart(product);
    }

    getAllProducts = () => {
        const { cart, removeToCart } = this.props;
        return cart.map(product => (
            <ShoppingCartProduct
                key={`${product.productId}-${product.variantId}`}
                product={product}
                removeToCart={this.handleRemoveToCart}
            />) );
    }

    render() {
        const { cart } = this.props;
        const { showPopover } = this.state;
        const cartLength = cart.length;

        const notificationUI = cartLength ? (
            <div className="shop-cart-notification">{cartLength}</div>
        ): null;

        const popoverContent = (
            <div className="shopping-cart-container-popover">
                <div className="shopping-cart-all-products">{this.getAllProducts()}</div>
                <Link to={ROUTE.CHECKOUT} component={({ navigate }) => (
                    <Button
                        className="checkout-button"
                        type="primary"
                        onClick={() => {
                            navigate();
                            this.handlePopoverClick();
                        }}
                    >
                        Checkout
                    </Button>
                )} />
            </div>
        )

        return (
            <Popover controlShow={showPopover} onClick={this.handlePopoverClick} position="bottomleft" content={popoverContent}>
                <div className="shopping-cart-container">
                    <i className="nav-item fa fa-shopping-cart"></i>
                    {notificationUI}
                </div>
            </Popover>
        );
    }
}

const mapStateToProps: MapStateToProps<ShoppingCartStateProps, ShoppingCartOwnProps, StoreStateType> = (state) => {
    const { cart } = state.user;
    
    return {
        cart
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<ShoppingCartDispatchProps, ShoppingCartOwnProps> = (dispatch) => {
    const { removeToCart } = new UserAction();

    return {
        removeToCart: (productPurchase) => dispatch(removeToCart(productPurchase))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);