import Button from '../../../../components/common/Button';
import { useCart } from '../../context/CartContext';
import { Cart } from '../../types/cart.type';
import './CartItem.css';

export default function CartItem({ cartItem }: { cartItem: Cart }) {
    const { deleteProductFromCart, adjustProductCount } = useCart();
    return (
        <div className="cart-item">
            <img src={cartItem.images[0]} alt={cartItem.title} />
            <div className="item-info">
                <h3>{cartItem.title}</h3>
                <p>{cartItem.price}</p>
            </div>
            <div className="item-quantity">
                <Button
                    label="-"
                    size="small"
                    color="black"
                    backgroundColor="white"
                    onClick={() => adjustProductCount(cartItem, '-')} />
                <span>{cartItem.quantity}</span>
                <Button
                    label="+"
                    size="small"
                    color="black"
                    backgroundColor="white"
                    onClick={() => adjustProductCount(cartItem, '+')} />
            </div>
            <Button
                label="삭제"
                size="medium"
                color="white"
                backgroundColor="red"
                onClick={() => deleteProductFromCart(cartItem)} />
        </div>
    )
}