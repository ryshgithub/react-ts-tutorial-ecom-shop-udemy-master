import { ProductPurchase } from "../../store/reducers/userReducer";

export interface ShoppingCartStateProps {
    cart: ProductPurchase[];
}

export interface ShoppingCartOwnProps {}

export type ShoppingCartProps = ShoppingCartStateProps & ShoppingCartOwnProps;