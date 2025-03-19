import { createContext, ReactNode, SetStateAction, useContext, useEffect, useState } from "react";
import { Cart } from "../types/cart.type";

type CartContextType = {
    cart: Cart[];
    setCart: React.Dispatch<SetStateAction<Cart[]>>
    priceSum: number;
    addProductToCart: (product: Cart) => void;
    deleteProductFromCart: (product: Cart) => void;
    adjustProductCount: (product: Cart, cal: '-' | '+') => void;
}

const CartContext = createContext<CartContextType>({
    cart: [],
    setCart: () => { },
    priceSum: 0,
    addProductToCart: () => { },
    deleteProductFromCart: () => { },
    adjustProductCount: () => { },
});

export function CartProvicer({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Cart[]>([]);
    const [priceSum, setPriceSum] = useState(0);

    // 로컬 스토리지에서 장바구니 데이터 가져오기
    useEffect(() => {
        const cartData = localStorage.getItem('cart');
        if (cartData) {
            setCart(JSON.parse(cartData));
        }
    }, []);

    // 장바구니에 존재하는 상품의 가격 누계
    useEffect(() => {
        const getTotalPrice = () => {
            const sum = cart.reduce((total, item) => {
                return total + (item.price * item.quantity);
            }, 0);

            setPriceSum(sum);
        };

        getTotalPrice();
    }, [cart]);

    // 장바구니 데이터를 state, 로컬 스토리지에 추가
    const addProductToCart = (product: Cart) => {
        const copiedCart = [...cart];
        copiedCart.push(product);

        localStorage.setItem('cart', JSON.stringify(copiedCart));
        setCart(copiedCart);

        alert('장바구니에 상품을 추가했어요!');
    }

    // 장바구니에서 요소를 삭제하고 state, 로컬 스토리지에 반영
    const deleteProductFromCart = (product: Cart) => {
        const filtredCart = cart.filter(item => item.id !== product.id);

        setCart(filtredCart);
        localStorage.setItem('cart', JSON.stringify(filtredCart));

        alert('장바구니에서 상품을 삭제했어요.');
    }

    // 장바구니의 특정 상품의 수량 조절
    const adjustProductCount = (product: Cart, cal: '+' | '-') => {
        if (product.quantity <= 1 && cal === '-') return; // 수량은 1미만이 될 수 없음

        const adjustedCart = cart.map(item => (
            item.id === product.id ?
                {
                    ...item,
                    quantity: cal === '-' ? item.quantity - 1 : item.quantity + 1,
                } :
                item
        ))

        setCart(adjustedCart);
        localStorage.setItem('cart', JSON.stringify(adjustedCart));
    }

    return (
        <CartContext.Provider value={{
            cart,
            setCart,
            priceSum,
            addProductToCart,
            deleteProductFromCart,
            adjustProductCount
        }}>
            {children}
        </CartContext.Provider>
    )
}

// 단순 context 접근을 위한 훅
export const useCart = () => useContext(CartContext);