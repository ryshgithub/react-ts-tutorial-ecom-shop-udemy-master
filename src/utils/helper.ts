import { ProductFilters } from "../store/reducers/shopReducer";

export const upperCaseFirstLetter = (str: string) => str[0].toUpperCase() + str.substr(1).toLowerCase();

export const convertFiltersToCategories = (filters: ProductFilters) => {
    let categories: string[] = [];

    Object.keys(filters).forEach(filterCategory => {
        const categoryFilters = filters[filterCategory as keyof ProductFilters];
        if(categoryFilters.length) categories = categories.concat(categoryFilters);
    });

    return categories;
}