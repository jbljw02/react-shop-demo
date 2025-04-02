import { useAppSelector } from "../../../../store/hooks";
import useProducts from "../../hooks/useProducts"
import ProductItem from "../ProductItem";
import './ProductList.css'

export default function ProductList() {
    const product = useAppSelector(state => state.product);
    
    const { isLoading, isError } = useProducts();

    if (isLoading) return <div>상품 불러오는중..</div>;
    if (isError) return <div>죄송합니다. 문제가 발생했습니다.</div>;

    return (
        <div className="product-list-container">
            {
                product.list.length > 0 && product.list.map(product => (
                    <ProductItem key={product.id} product={product} />
                ))
            }
        </div>
    )
}