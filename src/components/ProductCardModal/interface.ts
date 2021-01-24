import { Product, ProductVariantCompleteDetails } from "../../store/reducers/shopReducer";
import { ProductPurchase } from "../../store/reducers/userReducer";
import { VariantsOptionsAvailable } from "../../utils/product";

export interface ProductCardModalProps {
    show: boolean;
    onClickOutsideModalBody():void;
    initialVariant: ProductVariantCompleteDetails;
    variants: ProductVariantCompleteDetails[];
    variantsOptionsAvailable: VariantsOptionsAvailable;
    addToCart(product: ProductPurchase): any;
}

export interface ProductCardModalState {
    selectedVariant: ProductVariantCompleteDetails;
    quantity: number;
}