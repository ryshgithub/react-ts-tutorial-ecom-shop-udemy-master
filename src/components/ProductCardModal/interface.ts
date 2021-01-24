import { Product, ProductVariantCompleteDetails } from "../../store/reducers/shopReducer";
import { VariantsOptionsAvailable } from "../../utils/product";

export interface ProductCardModalProps {
    show: boolean;
    onClickOutsideModalBody():void;
    initialVariant: ProductVariantCompleteDetails;
    variants: ProductVariantCompleteDetails[];
    variantsOptionsAvailable: VariantsOptionsAvailable;
}

export interface ProductCardModalState {
    selectedVariant: ProductVariantCompleteDetails;
    quantity: number;
}