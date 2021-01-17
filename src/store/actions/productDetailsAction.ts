import { GetProducsOptions } from "../../api/productsDetailsAPI";
import { ProductDetails, ShopProducts } from "../reducers/productDetailsReducer";

export type ProductDetailsReducerAction = SetShopProductsAction | FetchShopProductsAction;

export interface SetShopProductsAction {
    type: typeof ProductDetailsAction.SET_SHOP_PRODUCTS;
    shopProducts: ShopProducts;
}

export interface FetchShopProductsAction {
    type: typeof ProductDetailsAction.FETCH_SHOP_PRODUCTS;
    options: GetProducsOptions;
}

class ProductDetailsAction {
    static readonly FETCH_SHOP_PRODUCTS = 'FETCH_SHOP_PRODUCTS';
    static readonly SET_SHOP_PRODUCTS = 'SET_SHOP_PRODUCTS';

    fetchShopProducts = (options: GetProducsOptions): FetchShopProductsAction => {
        return {
            type: ProductDetailsAction.FETCH_SHOP_PRODUCTS,
            options,
        }
    }

    setShopProducts = (shopProducts: ShopProducts): SetShopProductsAction => {
        return {
            type: ProductDetailsAction.SET_SHOP_PRODUCTS,
            shopProducts
        }
    }
}

export default ProductDetailsAction