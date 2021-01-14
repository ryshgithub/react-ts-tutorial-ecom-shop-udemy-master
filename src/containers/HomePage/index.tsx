import React from 'react';
import { Partners } from '../../components/Partners';
import { ShopQuality } from '../../components/ShopQuality';
import BestSeller from '../BestSeller';
import './style.css'

class HomePage extends React.Component {
    render() {
        return (
            <div className="homepage-container">
                <div className="cover-image" />
                <ShopQuality />
                <BestSeller />
                <Partners />
            </div>
        )
    }
}

export default HomePage;