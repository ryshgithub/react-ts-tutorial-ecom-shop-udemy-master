import { call, put, takeLatest } from 'redux-saga/effects'
import ShopAPI, { ProductFiltersAPIResponse } from '../../api/shopAPI';
import ShopAction, { FetchShopProductsAction } from '../actions/shopAction'
import { Shop, ShopProducts } from '../reducers/shopReducer';

function* workerFetchShopProductsSaga(action: FetchShopProductsAction) {
    const shopAPI = new ShopAPI();
    const shopAction = new ShopAction();

    try {
        const response = yield call(shopAPI.getProducts, action.options);
        const shopProducts = response.data as ShopProducts;

        yield put(shopAction.setShopProducts(shopProducts));
    } catch (err) {
        // TODO: Change in the future
        console.log('err');
    }
}

function* workerFetchBestSellerProductsSaga() {
    const shopAPI = new ShopAPI();
    const shopAction = new ShopAction();

    try {
        const response = yield call(shopAPI.getProducts, { category: ['best seller'] } );
        const { products } = response.data as ShopProducts;

        yield put(shopAction.setBestSellerProducts(products));
    } catch (err) {
        // TODO: Change in the future
        console.log(err);
    }
}

function* workerFetchShopProductsAndFilterSaga(action: FetchShopProductsAction) {
    const shopAPI = new ShopAPI();
    const shopAction = new ShopAction();

    try {
        const productsResponse = yield call(shopAPI.getProducts, {});
        const productFiltersResponse = yield call(shopAPI.getProductFilters);
        const shopProducts = productsResponse.data as ShopProducts;
        const { productFilters } = productFiltersResponse.data as ProductFiltersAPIResponse;

        yield put(shopAction.setShopProductsAndFilters(shopProducts, productFilters));
    } catch (err) {
        // TODO: Change in the future
        console.log(err);
    }
}

export function* watchShopSaga() {
    yield takeLatest(ShopAction.FETCH_SHOP_PRODUCTS, workerFetchShopProductsSaga);
    yield takeLatest(ShopAction.FETCH_ALL_BEST_SELLER_PRODUCTS, workerFetchBestSellerProductsSaga);
    yield takeLatest(ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS, workerFetchShopProductsAndFilterSaga)
}