import { Product } from "../../product/types/product.type";

export interface Cart extends Product {
    quantity: number;
}