import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../features/cart/types/cart.type";

// 장바구니의 상품
export const cartSlice = createSlice({
    name: 'cart',
    initialState: [] as Cart[],
    reducers: {
        addProductToCart: (state, action) => {
            state.push(action.payload);
        },
        deleteProductFromCart: (state, action) => {
            return state.filter(item => item.id !== action.payload);
        },
        adjustProductCount: (state, action) => {
            return state.map(item => item.id === action.payload.id ? action.payload : item);
        },
        setCart: (_, action) => {
            return action.payload;
        },
    },
});

// 장바구니에 있는 상품 가격의 합
export const cartPriceSum = createSlice({
    name: 'cartPriceSum',
    initialState: 0,
    reducers: {
        setPriceSum: (_, action) => {
            return action.payload;
        },
    },
});

export const { addProductToCart, deleteProductFromCart, adjustProductCount, setCart } = cartSlice.actions;
export const { setPriceSum } = cartPriceSum.actions;

const reducers = {
    cartSlice: cartSlice.reducer,
    cartPriceSum: cartPriceSum.reducer,
}

export default reducers;