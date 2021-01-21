import { Product } from "../../store/reducers/shopReducer";

export interface ProductCardModalProps {
    show: boolean;
    product: Product;
    onClickOutsideModalBody():void;
}