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

interface Cart {
  product: Product;
  quantity: number;
}

interface StoreContextData {
  products: Product[];
  cart: Cart[];
  setCart: React.Dispatch<React.SetStateAction<Cart[]>>;
  addProductToCart: (product: Product, quantity: number) => void;
}

export const StoreContext = createContext({} as StoreContextData);

interface ProductProviderProps {
  children: React.ReactNode;
}
export const StoreProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Cart[]>([]);

  const addProductToCart = (product: Product, quantity: number): void => {
    setCart([{ product, quantity }, ...cart]);
  };

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
    <StoreContext.Provider
      value={{
        products,
        cart,
        setCart,
        addProductToCart,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};
