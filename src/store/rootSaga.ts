import { all } from "redux-saga/effects";
import { watchShopSaga } from "./sagas/shopSaga";
import { watchUserSaga } from "./sagas/userSaga";

export default function* startRootSaga() {
    yield all([
        watchShopSaga(),
        watchUserSaga()
    ])
}