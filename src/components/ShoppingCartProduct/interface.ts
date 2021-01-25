import { ProductPurchase } from "../../store/reducers/userReducer";

export interface ShoppingCartProductProps {
    product: ProductPurchase;
    removeToCart(productPurchase: ProductPurchase): any;
}