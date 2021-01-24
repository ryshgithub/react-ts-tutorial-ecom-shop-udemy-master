import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { StoreStateType } from '../../store/rootReducer';
import Popover from '../../ui-components/Popover';
import { ShoppingCartOwnProps, ShoppingCartProps, ShoppingCartStateProps } from './interface';
import './style.css';

const ShoppingCart: React.FC<ShoppingCartProps> = ({ cart }) => {
    const cartLength = cart.length;

    const notificationUI = cartLength ? (
        <div className="shop-cart-notification">{cartLength}</div>
    ): null;

    return (
        <Popover position="bottomleft" content={<div>Hello Popover</div>}>
            <div className="shopping-cart-container">
                <i className="nav-item fa fa-shopping-cart"></i>
                {notificationUI}
            </div>
        </Popover>
    )
}

const mapStateToProps: MapStateToProps<ShoppingCartStateProps, ShoppingCartOwnProps, StoreStateType> = (state) => {
    const { cart } = state.user;
    
    return {
        cart
    }
}

export default connect(mapStateToProps)(ShoppingCart);