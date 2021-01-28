import React from 'react';
import { connect, MapDispatchToPropsFunction, MapStateToProps } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { CheckoutPageProduct } from '../../components/CheckoutPageProduct';
import CustomerInformation from '../../components/CustomerInformation';
import { ROUTE } from '../../constants/route';
import UserAction from '../../store/actions/userAction';
import { StoreStateType } from '../../store/rootReducer';
import { getSubtotalPrice } from '../../utils/product';
import { CheckoutPageDispatchProps, CheckoutPageOwnProps, CheckoutPageProps, CheckoutPageStateProps } from './interface';
import './style.css';

class CheckoutPage extends React.Component<CheckoutPageProps> {
    getCartDetails = () => {
        const { cart } = this.props;

        const cartItems: React.ReactNode[] = [];
        let totalPrice = 0;

        cart.forEach((product, index) => {
            if(index > 0) cartItems.push(<div key={`divider-${index}`} className="divider" />)

            cartItems.push(<CheckoutPageProduct product={product} key={`${product.productId}-${product.variantId}`} />);

            totalPrice += getSubtotalPrice(product);
        });

        return {
            cartItems,
            totalPrice
        }
    }

    render() {
        const { cart, cleanCart, history } = this.props;
        const { cartItems, totalPrice } = this.getCartDetails();

        return cart.length ? (
            <div className="checkout-page-container">
                <div className="cart-items-container">
                    <div className="cart-items-header">
                        <p>Items: {cart.length}</p>
                        <div className="shipping-container">
                            <i className="fa fa-truck" aria-hidden="true"></i>
                            <label>Free Shipping</label>
                        </div>
                    </div>
                    <div className="cart-items">
                        {cartItems}
                    </div>
                    <div className="cart-items-footer">
                        <div className="text">Total</div>
                        <div className="total-price">${totalPrice}</div>
                    </div>
                </div>
                <CustomerInformation history={history} cart={cart} cleanCart={cleanCart} />
            </div>
        ) : <Redirect to={ROUTE.HOME} />
    }
}

const mapStateToProps: MapStateToProps<CheckoutPageStateProps, CheckoutPageOwnProps, StoreStateType> = (state) => {
    const { cart } = state.user;

    return {
        cart
    }
}

const mapDispatchToProps: MapDispatchToPropsFunction<CheckoutPageDispatchProps, CheckoutPageOwnProps> = (dispatch) => {
    const { cleanCart } = new UserAction();

    return {
        cleanCart: () => dispatch(cleanCart()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);