import { Product, ProductVariantCompleteDetails } from "../../store/reducers/shopReducer";

export interface ProductCardModalProps {
    show: boolean;
    onClickOutsideModalBody():void;
    initialVariant: ProductVariantCompleteDetails;
    variants: ProductVariantCompleteDetails[];
}

export interface ProductCardModalState {
    selectedVariant: ProductVariantCompleteDetails;
    quantity: number;
}