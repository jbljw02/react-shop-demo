import { useEffect } from 'react';
import { Cart } from "../types/cart.type";
import {
    setCart,
    setPriceSum,
    addProductToCart as addProduct,
    deleteProductFromCart as deleteProduct,
    adjustProductCount as adjustCount
} from '../../../store/features/cartSlice';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';

export default function useCart() {
    const dispatch = useAppDispatch();
    const cart = useAppSelector(state => state.cart);

    // 로컬 스토리지에서 초기 데이터 로드
    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            dispatch(setCart(JSON.parse(cartData)));
        }
    }, []);

    // 총 가격 계산 로직
    useEffect(() => {
        const getTotalPrice = () => {
            const sum = cart.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);
            dispatch(setPriceSum(sum));
        };

        getTotalPrice();
    }, [cart]);

    // 장바구니 추가 로직
    const addProductToCart = (product: Cart) => {
        dispatch(addProduct(product));
        localStorage.setItem('cart', JSON.stringify([...cart, product]));
        alert('장바구니에 상품을 추가했어요!');
    }

    // 장바구니 삭제 로직
    const deleteProductFromCart = (product: Cart) => {
        dispatch(deleteProduct(product.id));
        const updatedCart = cart.filter(item => item.id !== product.id);
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        alert('장바구니에서 상품을 삭제했어요.');
    }

    // 수량 조절 로직
    const adjustProductCount = (product: Cart, cal: '+' | '-') => {
        if (product.quantity <= 1 && cal === '-') return;

        const updatedProduct = {
            ...product,
            quantity: cal === '-' ? product.quantity - 1 : product.quantity + 1
        };

        dispatch(adjustCount(updatedProduct));
        const updatedCart = cart.map(item =>
            item.id === product.id ? updatedProduct : item
        );
        localStorage.setItem('cart', JSON.stringify(updatedCart));
    }

    return {
        addProductToCart,
        deleteProductFromCart,
        adjustProductCount
    };
};