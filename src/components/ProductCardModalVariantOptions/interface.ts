import { ProductVariantCompleteDetails } from "../../store/reducers/shopReducer";

export interface ProductCardModalVariantOptionsProps {
    variants: ProductVariantCompleteDetails[];
    selectedVariant: ProductVariantCompleteDetails;
}