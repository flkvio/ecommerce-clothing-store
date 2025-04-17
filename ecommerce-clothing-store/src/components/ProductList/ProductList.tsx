import { Product } from "../../context/ProductContext/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const renderProducts = (products: Product[]) => {
    return products.map((product: Product) => {
      return (
        <ProductCard
          key={product.id}
          title={product.title}
          image={product.image}
          price={product.price}
          rating={product.rating}
        />
      );
    });
  };

  return <div>{renderProducts(products)}</div>;
};
