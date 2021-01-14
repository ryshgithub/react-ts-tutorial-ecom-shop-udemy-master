import React from 'react';
import { ProductCard } from '../../components/ProductCard';
import './style.css';

class BestSeller extends React.Component {
    render() {
        return (
            <div className="best-seller-container">
                <h2>Best Seller</h2>
                <div className="best-seller-products">
                    <ProductCard
                        url="http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Long%20Sleeve%20Slim%20Fit%20-%20Blue.png"
                        name="Formal Dress Shirts Casual Long Sleeve Slim Fit"
                    />
                    <ProductCard
                        url="http://localhost:1234/public/images/Formal%20Dress%20Shirts%20Casual%20Short%20Sleeve%20Slim%20Fit%20-%20Blue.png"
                        name="Formal Dress Shirts Casual Short Sleeve Slim Fit"
                    />
                    <ProductCard 
                        url="http://localhost:1234/public/images/Tiered%20Wave%20Shirt%20Dress%20-%20Navy%20&%20White.png"
                        name="Tiered Wave Shirt Dress"
                    />
                </div>
            </div>
        )
    }
}

export default BestSeller;