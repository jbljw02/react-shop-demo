import { useEffect, useState } from "react";
import { Product } from "../types/product.type";
import useProducts from "./useProducts";

export default function ({ id }: { id: number }) {
    const { products } = useProducts();
    
    const [product, setProduct] = useState<Product>();
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const findProduct = () => {
            try {
                setIsLoading(true);

                // 라우팅 된 페이지의 ID와 일치하는 상품을 반환
                const targetProduct = products.find(item => item.id === id);
                console.log(targetProduct)
                setProduct(targetProduct);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        findProduct();
    }, [id, products]);

    return { product, isLoading, isError }
}