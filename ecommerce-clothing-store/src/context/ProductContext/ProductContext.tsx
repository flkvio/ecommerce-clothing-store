import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
}

interface ProductContextData {
  products: Product[];
}

export const ProductContext = createContext({} as ProductContextData);

interface ProductProviderProps {
  children: React.ReactNode;
}
export const ProductsProvider: React.FC<ProductProviderProps> = ({
  children,
}) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getItems = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/");
        console.log(response.data);
        const productsFromApi = await response.data.filter(
          (product: Product) => {
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
    <ProductContext.Provider
      value={{
        products,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
