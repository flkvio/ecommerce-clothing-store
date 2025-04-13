import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import style from "./ProductCard.module.css";

interface ProductCardProps {
  title: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
}

export const ProductCard: React.FC<ProductCardProps> = ({
  title,
  image,
  price,
  rating,
}) => {
  return (
    <article className={style.ProductCard}>
      <span title={title}>
        {title.slice(0, 50)}
        {title.length > 50 ? "..." : null}
      </span>
      <img src={image} />
      <span>
        {Array.from({ length: 5 }).map((_, index) =>
          index < Math.round(rating.rate) ? (
            <AiFillStar key={index} />
          ) : (
            <AiOutlineStar key={index} />
          )
        )}{" "}
        {rating.count}
      </span>
      <span>R$ {price}</span>
      <button>Add to Cart</button>
    </article>
  );
};
