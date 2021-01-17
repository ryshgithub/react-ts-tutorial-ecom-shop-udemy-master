import axios from "axios";

export interface GetProducsOptions {
    page?: number;
    size?: number;
    category?: string[];
}

class ProductDetailsAPI {
    getProducts = (options: GetProducsOptions) => {
        const { page, size, category } = options;
        const pageQueryParam = `page=${page || ''}`;
        const sizeQueryParam = `&size=${size || ''}`;
        const categoryQueryParam = `&category=${category ? category.join('&category='): ''}`;
        return axios.get(`http://localhost:1234/products?${pageQueryParam}${sizeQueryParam}${categoryQueryParam}`);
    }
}

export default ProductDetailsAPI;