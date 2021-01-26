import { RouteComponentProps } from "react-router-dom";
import { ProductPurchase } from "../../store/reducers/userReducer";

export interface CheckoutPageStateProps {
    cart: ProductPurchase[];
}

export interface CheckoutPageOwnProps extends RouteComponentProps {}

export type CheckoutPageProps = CheckoutPageStateProps & CheckoutPageOwnProps;