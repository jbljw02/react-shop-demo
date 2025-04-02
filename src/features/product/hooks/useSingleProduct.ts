import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { setSelectedProduct, fetchProductsAsync } from "../../../store/features/productSlice";

export default function useSingleProduct({ id }: { id: number }) {
    const dispatch = useAppDispatch();
    const { list, loading, error } = useAppSelector(state => state.product);

    // 상품 목록이 없을 경우 요청
    useEffect(() => {
        if (list.length === 0) {
            dispatch(fetchProductsAsync());
        }
    }, [dispatch, list.length]);

    // 상품 목록에서 선택된 상품 찾기
    useEffect(() => {
        const targetProduct = list.find(item => item.id === id);
        dispatch(setSelectedProduct(targetProduct || null));
    }, [id, list, dispatch]);

    return {
        isLoading: loading,
        isError: error
    };
}