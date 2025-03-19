import { Link } from "react-router-dom";
import { Product } from "../../types/product.type"
import './ProductItem.css';
import Button from "../../../../components/common/Button";

type ProductItemProps = {
    product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
    return (
        <div className="product-item-container">
            <Link to={`product/${product.id}`}>
                <img src={product.images[0]} alt={`${product.title}`} />
            </Link>
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product-item-footer">
                <div>{product.price}$</div>
                <Button
                    label="장바구니에 추가"
                    size="small"
                    onClick={() => console.log("A")} />
            </div>
        </div>
    )
}