import { combineReducers, configureStore } from '@reduxjs/toolkit'
import cartReducers from './features/cartSlice'
import productReducers from './features/productSlice'

const combinedReducer = combineReducers({
    cart: cartReducers.cartSlice,
    cartPriceSum: cartReducers.cartPriceSum,
    product: productReducers.productSlice,
    selectedProduct: productReducers.selectedProduct,
});

export type RootState = ReturnType<typeof combinedReducer>;

export const makeStore = () => {
    return configureStore({
        reducer: combinedReducer,
    })
}

const store = makeStore();

// AppStore 타입은 configureStore로 생성된 타입
export type AppStore = ReturnType<typeof makeStore>
// AppDispatch는 스토어의 dispatch 타입
export type AppDispatch = ReturnType<typeof makeStore>['dispatch'];

export default store;