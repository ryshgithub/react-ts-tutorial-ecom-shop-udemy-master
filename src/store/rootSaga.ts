import { all } from "redux-saga/effects";
import { watchProductDetailsSaga } from "./sagas/productDetailsSaga";

export default function* startRootSaga() {
    yield all([
        watchProductDetailsSaga()
    ])
}