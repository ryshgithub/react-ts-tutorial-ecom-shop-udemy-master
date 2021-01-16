import { RouteComponentProps } from "react-router-dom";
import { ProductDetails } from "../../store/reducers/productDetailsReducer";

export interface AllProductsStateProps {
    productDetails: ProductDetails;
}

export interface AllProductsOwnProps extends RouteComponentProps {}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps;