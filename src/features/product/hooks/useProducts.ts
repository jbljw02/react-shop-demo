import { useEffect, useState } from "react";
import fetchProducts from "../api/productApi";
import { Product } from "../types/product.type";

export default function useProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // 마운트 시에 상품 목록 GET
    useEffect(() => {
        const getProducts = async () => {
            try {
                setIsLoading(true);
                
                const data = await fetchProducts();
                setProducts(data.products);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getProducts();
    }, []);

    return { products, isError, isLoading };
}