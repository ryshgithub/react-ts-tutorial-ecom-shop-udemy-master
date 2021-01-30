require.extensions['.css'] = () => undefined;
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { Redirect, Route, StaticRouter, Switch } from 'react-router-dom';
import ThemeContextProvider from '../src/context/ThemeContext';
import { HeaderNavigation } from '../src/components/HeaderNavigation';
import HandleAllError from '../src/components/HandleAllError';
import CheckoutPage from '../src/containers/CheckoutPage';
import AllProductsPage from '../src/containers/AllProductsPage';
import HomePage from '../src/containers/HomePage';
import { ErrorPage } from '../src/containers/ErrorPage';
import { ROUTE } from '../src/constants/route';
import { createStore } from 'redux';
import { rootReducer, StoreStateType } from '../src/store/rootReducer';
import { Product, ProductFilters, shopInitialState, ShopProducts } from '../src/store/reducers/shopReducer';
import { userInitialState } from '../src/store/reducers/userReducer';
import ShopAPI, { GetProductsOptions } from '../src/api/shopAPI';
import serialize from 'serialize-javascript';
import { JSDOM } from 'jsdom';

const app = express();

app.use('/public', express.static('build'));

const htmlFilePath = path.join(__dirname, '../build/index.html');
const htmlContent = fs.readFileSync(htmlFilePath, { encoding: 'utf-8' });

global.document = new JSDOM(htmlContent).window.document;

app.get('*', async (req, res) => {

    let bestSellerProducts: Product[] = [];
    let shopProducts: ShopProducts = {
        ...shopInitialState.shopProducts
    };
    let productFilters: ProductFilters = {
        ...shopInitialState.productFilters
    }

    const shopAPI = new ShopAPI();

    try {
        switch(req.url) {
            case ROUTE.HOME:
                const response = await shopAPI.getProducts({ category: ['best seller'] });
                const { products } = response.data as ShopProducts;
                bestSellerProducts = products;
                break;
            case ROUTE.ALL_PRODUCTS:
                const options: GetProductsOptions = {
                    page: userInitialState.shopProductsPage,
                    size: userInitialState.shopProductsSize,
                };
        
                const productsResponse = await shopAPI.getProducts(options);
                const productFiltersResponse = await shopAPI.getProductFilters();
        
                shopProducts = productsResponse.data as ShopProducts;
                productFilters = productFiltersResponse.data.productFilters as ProductFilters;
                break;
        }
    } catch(e) {
        console.error('Error:', e);
        console.error('Failed to fetch data for store');
    }

    const initialStoreState: StoreStateType = {
        user: userInitialState,
        shop: {
            ...shopInitialState,
            bestSellerProducts,
            shopProducts,
            productFilters
        }
    }

    const store = createStore(rootReducer, initialStoreState);

    const renderComponent = renderToString(
        <Provider store={store}>
            <StaticRouter location={req.url}>
                <ThemeContextProvider>
                    <HeaderNavigation />
                    <HandleAllError>
                        <Switch>
                            <Route exact component={CheckoutPage} path={ROUTE.CHECKOUT} />
                            <Route exact component={AllProductsPage} path={ROUTE.ALL_PRODUCTS} />
                            <Route exact component={ErrorPage} path={ROUTE.ERROR} />
                            <Route exact component={HomePage} path={ROUTE.HOME} />
                            <Redirect to="/" />
                        </Switch>
                    </HandleAllError>
                </ThemeContextProvider>
            </StaticRouter>
        </Provider>
    );

    res.send(htmlContent
        .replace('<div id="root"></div>', `<div id="root">${renderComponent}</div>`)
        .replace('window.initialState=null',`window.initialState=${serialize(initialStoreState)}`));
})

app.listen(5000);