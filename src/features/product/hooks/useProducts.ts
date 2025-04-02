import { useEffect, useState } from "react";
import fetchProducts from "../api/productApi";
import { useAppDispatch } from "../../../store/hooks";
import { fetchProductsAsync } from "../../../store/features/productSlice";

export default function useProducts() {
    const dispatch = useAppDispatch();

    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    // 마운트 시에 상품 목록 GET
    useEffect(() => {
        const getProducts = async () => {
            try {
                setIsLoading(true);

                const data = await fetchProducts();
                dispatch(fetchProductsAsync(data.products));
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        getProducts();
    }, []);

    return { isError, isLoading };
}