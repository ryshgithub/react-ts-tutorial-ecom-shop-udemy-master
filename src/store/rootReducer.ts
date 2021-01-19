import { combineReducers } from "redux";
import { shopReducer } from "./reducers/shopReducer";
import { userReducer } from "./reducers/userReducer";

export const rootReducer = combineReducers({
    shop: shopReducer,
    user: userReducer
});

export type StoreStateType = ReturnType<typeof rootReducer>