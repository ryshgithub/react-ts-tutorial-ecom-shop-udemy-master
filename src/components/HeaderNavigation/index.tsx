import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTE } from '../../constants/route';
import ShoppingCart from '../../containers/ShoppingCart';
import './style.css';

export const HeaderNavigation: React.FC = () => {
    return (
        <div className="header-nav-container">
            <div className="nav-items-left">
                <Link className="nav-item shopname" to={ROUTE.HOME}>Shopspree</Link>
                <Link className="nav-item" to={ROUTE.ALL_PRODUCTS}>All Products</Link>
            </div>
            <div className="nav-items-right">
                <ShoppingCart />
            </div>
        </div>
    )
};