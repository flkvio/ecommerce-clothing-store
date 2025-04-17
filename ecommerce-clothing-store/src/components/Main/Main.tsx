import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext/ProductContext";
import { ProductList } from "../ProductList/ProductList";
import style from "./Main.module.css";

export const Main: React.FC = () => {

  const { products } = useContext(ProductContext);

  return (
    <main className={style.Main}>
      <ProductList products={products} />
    </main>
  );
};
