import { call, put, takeLatest } from 'redux-saga/effects'
import ProductDetailsAPI from '../../api/productsDetailsAPI';
import ProductDetailsAction from '../actions/productDetailsAction'
import { ProductDetails } from '../reducers/productDetailsReducer';

function* workerFetchProductsDetailSaga() {
    const productDetailsAPI = new ProductDetailsAPI();
    const productDetailsAction = new ProductDetailsAction();

    try {
        const response = yield call(productDetailsAPI.getProducts);
        const productDetails = response.data as ProductDetails;

        yield put(productDetailsAction.set(productDetails));
    } catch (err) {
        // TODO: Change in the future
        console.log('err');
    }
}

export function* watchProductDetailsSaga() {
    yield takeLatest(ProductDetailsAction.FETCH_PRODUCTS_DETAILS, workerFetchProductsDetailSaga)
}