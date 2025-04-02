import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSelectedProduct } from "../../../store/features/productSlice";

export default function ({ id }: { id: number }) {
    const dispatch = useAppDispatch();

    const products = useAppSelector(state => state.product);

    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        const findProduct = () => {
            try {
                setIsLoading(true);

                // 라우팅 된 페이지의 ID와 일치하는 상품을 반환
                const targetProduct = products.find(item => item.id === id);
                dispatch(setSelectedProduct(targetProduct));
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        findProduct();
    }, [id, products]);

    return { isLoading, isError }
}