import { useParams } from "react-router-dom"
import useSingleProduct from "../../hooks/useSingleProduct";
import './ProductDetail.css';
import Button from "../../../../components/common/Button";
import useCart from "../../../cart/hooks/useCart";
import { useAppSelector } from "../../../../store/hooks";
export default function ProductDetail() {
    const { id } = useParams(); // 선택된 상품의 ID

    const selectedProduct = useAppSelector(state => state.selectedProduct);

    const { isLoading, isError } = useSingleProduct({ id: Number(id) });
    const { addProductToCart } = useCart();

    if (isLoading) return <div>상품 불러오는중..</div>;
    if (isError) return <div>죄송합니다. 문제가 발생했습니다.</div>;
    if (!selectedProduct) return null;

    return (
        <div className="product-detail-container">
            <img src={selectedProduct.images[0]} alt={`${selectedProduct.title}`} />
            <div className="product-detail-info">
                <h2>{selectedProduct.title}</h2>
                <div>{selectedProduct.price}$</div>
                <p>{selectedProduct.description}</p>
                <div className="cart-footer">
                    <Button
                        label="장바구니에 추가"
                        size="medium"
                        color="white"
                        backgroundColor="rgb(154, 154, 154)"
                        onClick={() => addProductToCart({
                            ...selectedProduct,
                            quantity: 1,
                        })} />
                </div>
            </div>
        </div>
    )
}