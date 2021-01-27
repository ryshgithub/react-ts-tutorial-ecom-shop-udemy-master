import { CustomerInformationField, CustomerInformationFieldsList } from "../../constants/user";

export interface CustomerInformationProps {

}

export interface CustomerInformationState extends CustomerInformationFieldsList {
    error: CustomerInformationFieldsList;
    hasCompletePurchaseClick: boolean;
}

export type CustomerInformationFieldRefs = {
    [field in CustomerInformationField]: React.RefObject<HTMLInputElement>
}