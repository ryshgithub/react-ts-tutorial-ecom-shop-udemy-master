import { combineReducers } from "redux";
import { shopReducer } from "./reducers/shopReducer";

export const rootReducer = combineReducers({
    shop: shopReducer
});

export type StoreStateType = ReturnType<typeof rootReducer>