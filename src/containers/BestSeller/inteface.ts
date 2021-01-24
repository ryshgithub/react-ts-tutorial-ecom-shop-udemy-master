import { Product } from "../../store/reducers/shopReducer";
import { ProductPurchase } from "../../store/reducers/userReducer";

export interface BestSellerStateProps {
    bestSellerProducts: Product[];
}

export interface BestSellerDispatchProps {
    fetchAllBestSellerProducts():any;
    addToCart(product: ProductPurchase): any;
}

export type BestSellerProps = BestSellerStateProps & BestSellerDispatchProps;