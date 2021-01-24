import { ProductVariantCompleteDetails } from "../../store/reducers/shopReducer";
import { VariantsOptionsAvailable } from "../../utils/product";

export interface ProductCardModalVariantOptionsProps {
    variants: ProductVariantCompleteDetails[];
    selectedVariant: ProductVariantCompleteDetails;
    variantsOptionsAvailable: VariantsOptionsAvailable;
    onSizeChange(size: string): void;
    onColorChange(color: string): void;
}