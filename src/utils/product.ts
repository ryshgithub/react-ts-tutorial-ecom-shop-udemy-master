import { Product, ProductVariantCompleteDetails } from "../store/reducers/shopReducer";
import { omit } from "./helper";

export type InitialVariant = ProductVariantCompleteDetails | null;

export interface GetProductVariantDetails {
    initialVariant: InitialVariant;
    variants: ProductVariantCompleteDetails[];
}

export const getProductVariantDetails = (product: Product): GetProductVariantDetails => {
    let initialVariant: InitialVariant = null;
    let foundInitialVariant = false;
    const variants: ProductVariantCompleteDetails[] = [];

    product.variants.forEach(variant => {
        const completeDetails: ProductVariantCompleteDetails = {
            ...omit(variant, ['id']),
            ...omit(product, ['id', 'variants']),
            productId: product.id,
            variantId: variant.id
        }

        if(!foundInitialVariant && variant.stock) {
            foundInitialVariant = true;
            initialVariant = completeDetails;
        }

        variants.push(completeDetails);
    });

    return {
        initialVariant,
        variants
    }
}

export const getDiscountedPrice = (price: string, discount: string) => {
    const currentPrice = parseFloat(price.replace('$', ''));
    let discountedPrice: number;

    if(discount.includes('$')) {
        discountedPrice = currentPrice - parseFloat(discount.replace('$', ''));
    } else {
        discountedPrice = currentPrice - (currentPrice * (parseFloat(discount)/100));
    }

    return discountedPrice;
}