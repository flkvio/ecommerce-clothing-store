import { useContext } from "react";
import { StoreContext } from "../../context/ProductContext/ProductContext";
import { ProductList } from "../ProductList/ProductList";
import style from "./Main.module.css";

export const Main: React.FC = () => {
  const { products } = useContext(StoreContext);

  return (
    <main className={style.Main}>
      <ProductList products={products} />
    </main>
  );
};
