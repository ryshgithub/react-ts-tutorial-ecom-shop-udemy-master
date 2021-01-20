import { ProductFilters } from "../reducers/shopReducer";

export type UserReducerAction = UpdateUserFiltersAction | UpdateUserShopProductsPageAction;

export interface UpdateUserFiltersAction {
    type: typeof UserAction.UPDATE_USER_FILTERS;
    filters: ProductFilters
}

export interface UpdateUserShopProductsPageAction {
    type: typeof UserAction.UPDATE_USER_SHOP_PRODUCTS_PAGE;
    shopProductsPage: number;
}

class UserAction {
    static readonly UPDATE_USER_FILTERS = 'UPDATE_USER_FILTERS';
    static readonly UPDATE_USER_SHOP_PRODUCTS_PAGE = 'UPDATE_USER_SHOP_PRODUCTS_PAGE'

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

}

export default UserAction;