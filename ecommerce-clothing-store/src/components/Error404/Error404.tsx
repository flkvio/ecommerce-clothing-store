import { TfiFaceSad } from "react-icons/tfi";
import style from "./Error404.module.css";

export const Error404 = () => {
  return (
    <div className={style.Error404}>
      <div>
        <h1>ERROR 404</h1>
        <h2>page not found</h2>
      </div>
      <TfiFaceSad />

    </div>
  );
};
