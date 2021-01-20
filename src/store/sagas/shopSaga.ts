import { call, put, select, takeLatest } from 'redux-saga/effects'
import ShopAPI, { GetProducsOptions, ProductFiltersAPIResponse } from '../../api/shopAPI';
import { convertFiltersToCategories } from '../../utils/helper';
import ShopAction, { FetchShopProductsAction } from '../actions/shopAction'
import { Shop, ShopProducts } from '../reducers/shopReducer';
import { User } from '../reducers/userReducer';
import { StoreStateType } from '../rootReducer';

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
        const user: User = yield select((state: StoreStateType) => state.user);

        const options: GetProducsOptions = {
            page: user.shopProductsPage,
            size: user.shopProductsSize,
        };

        const productsResponse = yield call(shopAPI.getProducts, options);
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