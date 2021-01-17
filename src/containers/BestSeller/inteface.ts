import { Product } from "../../store/reducers/shopReducer";

export interface BestSellerStateProps {
    bestSellerProducts: Product[];
}

export interface BestSellerDispatchProps {
    fetchAllBestSellerProducts():any;
}

export type BestSellerProps = BestSellerStateProps & BestSellerDispatchProps;