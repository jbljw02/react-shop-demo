import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Product } from "../../features/product/types/product.type";
import fetchProducts from "../../features/product/api/productApi";

// 비동기 액션 생성(Promise를 반환)
export const fetchProductsAsync = createAsyncThunk(
    'product/fetchProducts',
    async () => {
        const response = await fetchProducts();
        return response.products;
    }
);

type ProductState = {
    list: Product[];
    loading: boolean;
    error: string | null;
    selectedProduct: Product | null;
}

// 상품 관련 상태
export const productSlice = createSlice({
    name: 'product',
    initialState: {
        list: [] as Product[], // 상품 목록
        loading: false, // 로딩 상태
        error: null as string | null, // 에러 메시지
        selectedProduct: null as Product | null // 선택된 상품
    } as ProductState,
    // 동기 액션
    reducers: {
        setSelectedProduct: (state, action) => {
            state.selectedProduct = action.payload;
        }
    },
    // 비동기 액션
    extraReducers: (builder) => {
        builder
            // 요청 시작
            .addCase(fetchProductsAsync.pending, (state) => {
                state.loading = true;
            })
            // 요청 성공
            .addCase(fetchProductsAsync.fulfilled, (state, action) => {
                state.loading = false;
                state.list = action.payload;
            })
            // 요청 실패
            .addCase(fetchProductsAsync.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || '상품을 불러오는데 실패했습니다.';
            });
    }
});

export const { setSelectedProduct } = productSlice.actions;

// 리듀서 내보내기
const reducers = {
    productSlice: productSlice.reducer,
}

export default reducers;