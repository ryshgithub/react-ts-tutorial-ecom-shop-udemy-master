import { combineReducers } from "redux";
import { productDetailsReducer } from "./reducers/productDetailsReducer";

export const rootReducer = combineReducers({
    productDetails: productDetailsReducer
});

export type StoreStateType = ReturnType<typeof rootReducer>