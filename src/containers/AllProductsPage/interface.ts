import { RouteComponentProps } from "react-router-dom";
import { GetProducsOptions } from "../../api/shopAPI";
import { FetchShopProductsAction } from "../../store/actions/shopAction";
import { Shop, ProductFilters, ShopProducts } from "../../store/reducers/shopReducer";

export interface AllProductsStateProps {
    shopProducts: ShopProducts;
    productFilters: ProductFilters;
    userFilters: ProductFilters;
    userSelectedPage: number;
}

export interface AllProductsOwnProps extends RouteComponentProps {}

export interface AllProductsDispatchToProps {
    fetchShopProducts(options: GetProducsOptions): FetchShopProductsAction;
    fetchShopProductsAndFilters():any;
    updateUserFilters(filters: ProductFilters): any;
    updateUserShopProductsPage(shopProductsPage: number): any;
}

export type AllProductsPageProps = AllProductsStateProps & AllProductsOwnProps & AllProductsDispatchToProps;