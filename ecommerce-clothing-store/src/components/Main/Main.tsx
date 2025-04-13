import { useEffect, useState } from "react";
import style from "./Main.module.css";
import axios from "axios";
import { ProductCard } from "../ProductCard/ProductCard";

export const Main: React.FC = () => {
  const [products, setProducts] = useState<productInterface[]>([]);

  interface productInterface {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: { rate: number; count: number };
  }

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        console.log(response.data);
        const productsFromApi = await response.data.filter(
          (product: productInterface) => {
            return product.category !== "electronics";
          }
        );
        setProducts(productsFromApi);
      } catch (error) {
        console.log(error);
      }
    };
    getItems();
  }, []);
  return (
    <main className={style.Main}>
      <div>
        {products
          ? products.map((product: productInterface) => {
              return (
                <ProductCard
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                />
              );
            })
          : null}
      </div>
    </main>
  );
};
