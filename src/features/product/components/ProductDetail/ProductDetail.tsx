import { useParams } from "react-router-dom"
import useSingleProduct from "../../hooks/useSingleProduct";
import './ProductDetail.css';
import Button from "../../../../components/common/Button";

export default function ProductDetail() {
    const { id } = useParams(); // 선택된 상품의 ID

    const { product, isLoading, isError } = useSingleProduct({ id: Number(id) });

    if (isLoading) return <div>상품 불러오는중..</div>;
    if (!product || isError) return <div>죄송합니다. 문제가 발생했습니다.</div>;

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
                        onClick={() => console.log("A")}
                        size="medium" />
                </div>
            </div>
        </div>
    )
}