import axios from "axios";

class ProductDetailsAPI {
    getProducts = (page?: number, size?: number) => {
        return axios.get(`http://localhost:1234/products?page=${page || ''}&size=${page || ''}`);
    }
}

export default ProductDetailsAPI;