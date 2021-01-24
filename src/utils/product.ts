import { Product, ProductVariantCompleteDetails } from "../store/reducers/shopReducer";
import { omit } from "./helper";

export type InitialVariant = ProductVariantCompleteDetails | null;

export interface VariantsOptionsAvailable {
    [sizes: string] : string[];
}

export interface GetProductVariantDetails {
    initialVariant: InitialVariant;
    variants: ProductVariantCompleteDetails[];
    variantsOptionsAvailable: VariantsOptionsAvailable;
}

export const getProductVariantDetails = (product: Product): GetProductVariantDetails => {
    let initialVariant: InitialVariant = null;
    let foundInitialVariant = false;
    const variants: ProductVariantCompleteDetails[] = [];
    const variantsOptionsAvailable: VariantsOptionsAvailable = {};

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

        if(variant.stock) {
            const variantSizeData = variantsOptionsAvailable[variant.size];
            if(variantSizeData && !variantSizeData.includes(variant.color)) {
                variantSizeData.push(variant.color);
            } else if (!variantSizeData) {
                variantsOptionsAvailable[variant.size] = [ variant.color ];
            }
        }

        variants.push(completeDetails);
    });

    return {
        initialVariant,
        variants,
        variantsOptionsAvailable
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