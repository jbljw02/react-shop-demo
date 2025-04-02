import CartItem from '../CartItem';
import './Cart.css';
import { useAppSelector } from '../../../../store/hooks';
import useCart from '../../hooks/useCart';

export default function Cart() {
    const cart = useAppSelector(state => state.cart);
    const priceSum = useAppSelector(state => state.cartPriceSum);

    console.log(priceSum);

    useCart(); // 초기 마운트 시 장바구니 데이터를 로드
    return (
        <div className="cart-container">
            <h2 className="cart-title">장바구니</h2>
            <div className="cart-items">
                {
                    cart.map(item => (
                        <CartItem key={item.id} cartItem={item} />
                    ))
                }
            </div>
            <div className="cart-summary">
                <div className="total">
                    <span>총 금액</span>
                    <span>{priceSum.toLocaleString()}$</span>
                </div>
                <button className="checkout-button">주문하기</button>
            </div>
        </div>
    );
}