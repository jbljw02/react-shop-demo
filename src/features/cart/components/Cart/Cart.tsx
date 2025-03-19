import CartItem from '../CartItem';
import './Cart.css';
import { useCart } from '../../context/CartContext';

export default function Cart() {
    const { cart, priceSum } = useCart();
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