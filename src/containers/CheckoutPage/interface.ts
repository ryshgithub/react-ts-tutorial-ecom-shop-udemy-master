import { RouteComponentProps } from "react-router-dom";
import { ProductPurchase } from "../../store/reducers/userReducer";

export interface CheckoutPageStateProps {
    cart: ProductPurchase[];
}

export interface CheckoutPageOwnProps extends RouteComponentProps {}

export interface CheckoutPageDispatchProps {
    cleanCart(): any;
}

export type CheckoutPageProps = CheckoutPageStateProps & CheckoutPageOwnProps & CheckoutPageDispatchProps;