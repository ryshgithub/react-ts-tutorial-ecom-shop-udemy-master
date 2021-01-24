import { ProductFilters } from "../reducers/shopReducer";
import { ProductPurchase } from "../reducers/userReducer";

export type UserReducerAction = UpdateUserFiltersAction | UpdateUserShopProductsPageAction | AddToCartAction;

export interface UpdateUserFiltersAction {
    type: typeof UserAction.UPDATE_USER_FILTERS;
    filters: ProductFilters
}

export interface UpdateUserShopProductsPageAction {
    type: typeof UserAction.UPDATE_USER_SHOP_PRODUCTS_PAGE;
    shopProductsPage: number;
}

export interface AddToCartAction {
    type: typeof UserAction.ADD_TO_CART;
    productPurchase: ProductPurchase;
}

class UserAction {
    static readonly UPDATE_USER_FILTERS = 'UPDATE_USER_FILTERS';
    static readonly UPDATE_USER_SHOP_PRODUCTS_PAGE = 'UPDATE_USER_SHOP_PRODUCTS_PAGE';
    static readonly ADD_TO_CART = 'ADD_TO_CART';

    updateUserFilters = (filters: ProductFilters): UpdateUserFiltersAction => {
        return {
            type: UserAction.UPDATE_USER_FILTERS,
            filters
        }
    }

    updateUserShopProductsPage = (shopProductsPage: number): UpdateUserShopProductsPageAction => {
        return {
            type: UserAction.UPDATE_USER_SHOP_PRODUCTS_PAGE,
            shopProductsPage
        }
    }

    addToCart = (productPurchase: ProductPurchase): AddToCartAction => {
        return {
            type: UserAction.ADD_TO_CART,
            productPurchase,
        }
    }

}

export default UserAction;