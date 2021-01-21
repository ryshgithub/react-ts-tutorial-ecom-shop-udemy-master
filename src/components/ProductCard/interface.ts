import { Product } from "../../store/reducers/shopReducer";

export interface ProductCardProps {
    product: Product;
}

export interface ProductCardState {
    showDetails: boolean;
}