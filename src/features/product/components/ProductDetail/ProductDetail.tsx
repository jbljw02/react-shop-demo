import { useParams } from "react-router-dom"
import useSingleProduct from "../../hooks/useSingleProduct";
import './ProductDetail.css';
import Button from "../../../../components/common/Button";
import { useCart } from "../../../cart/context/CartContext";

export default function ProductDetail() {
    const { id } = useParams(); // 선택된 상품의 ID

    const { product, isLoading, isError } = useSingleProduct({ id: Number(id) });
    const { addProductToCart } = useCart();

    if (isLoading) return <div>상품 불러오는중..</div>;
    if (isError) return <div>죄송합니다. 문제가 발생했습니다.</div>;
    if (!product) return null;

    return (
        <div className="product-detail-container">
            <img src={product.images[0]} alt={`${product.title}`} />
            <div className="product-detail-info">
                <h2>{product.title}</h2>
                <div>{product.price}$</div>
                <p>{product.description}</p>
                <div className="cart-footer">
                    <Button
                        label="장바구니에 추가"
                        size="medium"
                        color="white"
                        backgroundColor="rgb(154, 154, 154)"
                        onClick={() => addProductToCart({
                            ...product,
                            quantity: 1,
                        })} />
                </div>
            </div>
        </div>
    )
}