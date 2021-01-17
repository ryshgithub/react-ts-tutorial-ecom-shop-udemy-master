import { AnyAction, Reducer } from "redux";
import ProductDetailsAction, { ProductDetailsReducerAction } from "../actions/productDetailsAction";
import update from 'immutability-helper';

export interface ProductVariant {
    id: string;
    size: string;
    color: string;
    price: string;
    stock: number;
    discount?: string;
    image: string;
}

export interface Product {
    id: string;
    category: string[];
    title: string;
    variants: ProductVariant[];
}

export interface ShopProducts {
    products: Product[];
    page?: number;
    nextPage?: boolean;
    productsCount: number;
    totalPages?: number;
}

export interface ProductDetails {
    shopProducts: ShopProducts;
    bestSellerProducts: Product[];
}

const productDetailsInitialState: ProductDetails = {
    shopProducts: {
        products: [],
        productsCount: 0,
    },
    bestSellerProducts: []
}

export const productDetailsReducer: Reducer<ProductDetails, ProductDetailsReducerAction> = (state = productDetailsInitialState, action) => {
    switch(action.type) {
        case ProductDetailsAction.SET_BEST_SELLER_PRODUCTS:
            return update(state, { bestSellerProducts: { $set: action.bestSellerProducts } })
        case ProductDetailsAction.SET_SHOP_PRODUCTS:
            return update(state, { shopProducts: { $set: action.shopProducts } })
        default:
            return state;
    }
}