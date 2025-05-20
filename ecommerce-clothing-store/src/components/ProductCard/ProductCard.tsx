import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./ProductCard.module.css";
import {
  Product,
  StoreContext,
} from "../../context/ProductContext/ProductContext";
import { useContext } from "react";

interface ProductCardProps {
  product: Product;
  // title: string;
  // image: string;
  // price: number;
  // rating: { rate: number; count: number };
}

export const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { title, rating, image, price } = props.product;
  const { addProductToCart } = useContext(StoreContext);

  return (
    <article className={style.ProductCard}>
      <span title={title}>
        {title.slice(0, 50)}
        {title.length > 50 ? "..." : null}
      </span>
      <img src={image} />
      <div className={style.rateAndPriceContainer}>
        <span>
          {Array.from({ length: 5 }).map((_, index) =>
            index < Math.round(rating.rate) ? (
              <AiFillStar key={index} />
            ) : (
              <AiOutlineStar key={index} />
            )
          )}
          {rating.rate.toFixed(1)} ({rating.count})
        </span>
        <span>R$ {price.toFixed(2)}</span>
      </div>
      <button
        onClick={() => {
          //
          addProductToCart(props.product, 2);
        }}
      >
        Add to Cart
      </button>
    </article>
  );
};
