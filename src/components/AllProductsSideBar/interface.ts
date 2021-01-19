import { ProductFilters } from "../../store/reducers/shopReducer";

export interface ProductFiltersProps {
    productFilters: ProductFilters;
    userFilters: ProductFilters;
    onUpdateUserFilters(filters: ProductFilters): any;
}