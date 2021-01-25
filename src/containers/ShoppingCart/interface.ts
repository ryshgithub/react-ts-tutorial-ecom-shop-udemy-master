import { ProductPurchase } from "../../store/reducers/userReducer";

export interface ShoppingCartStateProps {
    cart: ProductPurchase[];
}

export interface ShoppingCartOwnProps {}

export interface ShoppingCartDispatchProps {
    removeToCart(productPurchase: ProductPurchase): any;
}

export type ShoppingCartProps = ShoppingCartStateProps & ShoppingCartOwnProps & ShoppingCartDispatchProps;

export interface ShoppingCartState {
    showPopover: boolean;
}