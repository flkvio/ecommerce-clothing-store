import { useContext, useEffect } from "react";
import {
  Product,
  StoreContext,
} from "../../context/ProductContext/ProductContext";
import { ProductCard } from "../ProductCard/ProductCard";

interface ProductListProps {
  products: Product[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const { cart } = useContext(StoreContext);

  useEffect(() => {
    console.log(cart)
  }, [cart]);

  const renderProducts = (products: Product[]) => {
    console.log("is calling this")
    return products.map((product: Product) => {
      return (
        <ProductCard
          product={product}
          key={product.id}
          // title={product.title}
          // image={product.image}
          // price={product.price}
          // rating={product.rating}
        />
      );
    });
  };

  return <div>{renderProducts(products)}</div>;
};
