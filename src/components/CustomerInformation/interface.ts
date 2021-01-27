import { CustomerInformationField, CustomerInformationFieldsList } from "../../constants/user";
import { ProductPurchase } from "../../store/reducers/userReducer";
import { History } from 'history';

export interface CustomerInformationProps {
    cart: ProductPurchase[];
    history: History;
    cleanCart(): any;
}

export interface CustomerInformationState extends CustomerInformationFieldsList {
    error: CustomerInformationFieldsList;
    hasCompletePurchaseClick: boolean;
    showThankyouModal: boolean;
}

export type CustomerInformationFieldRefs = {
    [field in CustomerInformationField]: React.RefObject<HTMLInputElement>
}