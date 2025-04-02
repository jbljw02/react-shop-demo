import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../../features/product/types/product.type";

// 상품 목록
export const productSlice = createSlice({
    name: 'product',
    initialState: [] as Product[],
    reducers: {
        setProducts: (_, action) => {
            return action.payload;
        },
    },
});

// 선택된 상품
export const selectedProduct = createSlice({
    name: 'selectedProduct',
    initialState: null as Product | null,
    reducers: {
        setSelectedProduct: (_, action) => action.payload,
    },
});

export const { setProducts } = productSlice.actions;
export const { setSelectedProduct } = selectedProduct.actions;

const reducers = {
    productSlice: productSlice.reducer,
    selectedProduct: selectedProduct.reducer,
}

export default reducers;