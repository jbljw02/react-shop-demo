import { Product } from "../../types/product.type"
import './ProductItem.css';

type ProductItemProps = {
    product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
    return (
        <div className="product-item-container">
            <img src={product.images[0]} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <div className="product-item-footer">
                <div>{product.price}</div>
                <button>장바구니에 추가</button>
            </div>
        </div>
    )
}