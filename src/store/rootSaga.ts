import { all } from "redux-saga/effects";
import { watchShopSaga } from "./sagas/shopSaga";

export default function* startRootSaga() {
    yield all([
        watchShopSaga()
    ])
}