import { GetProductsOptions } from "../../api/shopAPI";
import { Product, Shop, ProductFilters, ShopProducts } from "../reducers/shopReducer";

export type ShopReducerAction = SetShopProductsAction | FetchShopProductsAction | SetBestSellerProductsAction | FetchBestSellerProductsAction
    | FetchShopProductsAndFilterAction | SetShopProductsAndFilterAction;

export interface SetShopProductsAction {
    type: typeof ShopAction.SET_SHOP_PRODUCTS;
    shopProducts: ShopProducts;
}

export interface FetchShopProductsAction {
    type: typeof ShopAction.FETCH_SHOP_PRODUCTS;
    options: GetProductsOptions;
}

export interface SetBestSellerProductsAction {
    type: typeof ShopAction.SET_BEST_SELLER_PRODUCTS;
    bestSellerProducts: Product[];
}

export interface FetchBestSellerProductsAction {
    type: typeof ShopAction.FETCH_ALL_BEST_SELLER_PRODUCTS;
}

export interface FetchShopProductsAndFilterAction {
    type: typeof ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS;
}

export interface SetShopProductsAndFilterAction {
    type: typeof ShopAction.SET_SHOP_PRODUCTS_AND_FILTERS;
    shopProducts: ShopProducts;
    productFilters: ProductFilters;
}

class ShopAction {
    static readonly FETCH_SHOP_PRODUCTS_AND_FILTERS = 'FETCH_SHOP_PRODUCTS_AND_FILTERS';
    static readonly SET_SHOP_PRODUCTS_AND_FILTERS = 'SET_SHOP_PRODUCTS_AND_FILTERS';
    static readonly FETCH_SHOP_PRODUCTS = 'FETCH_SHOP_PRODUCTS';
    static readonly SET_SHOP_PRODUCTS = 'SET_SHOP_PRODUCTS';
    static readonly FETCH_ALL_BEST_SELLER_PRODUCTS = 'FETCH_ALL_BEST_SELLER_PRODUCTS';
    static readonly SET_BEST_SELLER_PRODUCTS = 'SET_BEST_SELLER_PRODUCTS';

    fetchShopProducts = (options: GetProductsOptions): FetchShopProductsAction => {
        return {
            type: ShopAction.FETCH_SHOP_PRODUCTS,
            options,
        }
    }

    setShopProducts = (shopProducts: ShopProducts): SetShopProductsAction => {
        return {
            type: ShopAction.SET_SHOP_PRODUCTS,
            shopProducts
        }
    }

    fetchAllBestSellerProducts = (): FetchBestSellerProductsAction => {
        return {
            type: ShopAction.FETCH_ALL_BEST_SELLER_PRODUCTS
        }
    }

    setBestSellerProducts = (bestSellerProducts: Product[]): SetBestSellerProductsAction => {
        return {
            type: ShopAction.SET_BEST_SELLER_PRODUCTS,
            bestSellerProducts
        }
    }

    fetchShopProductsAndFilters = (): FetchShopProductsAndFilterAction => {
        return {
            type: ShopAction.FETCH_SHOP_PRODUCTS_AND_FILTERS,
        }
    }

    setShopProductsAndFilters = (shopProducts: ShopProducts, productFilters: ProductFilters): SetShopProductsAndFilterAction => {
        return {
            type: ShopAction.SET_SHOP_PRODUCTS_AND_FILTERS,
            shopProducts,
            productFilters,
        }
    }
}

export default ShopAction