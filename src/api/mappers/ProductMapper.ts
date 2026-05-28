import { Product } from "../../Product";

export type ProductDTO = {
    id: string;
    name: string;
    price: {
        amount: number;
        currency: string;
        formatted: string;
    };
};

export class ProductMapper {
    static toDTO(product: Product): ProductDTO {
        return {
            id: product.id,
            name: product.name,
            price: {
                amount: product.price.amount,
                currency: product.price.currency,
                formatted: product.price.format()
            }
        };
    }
}