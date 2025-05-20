import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import { SlBag, SlHeart } from "react-icons/sl";
import style from "./Header.module.css";
import { AccountContext } from "../../context/AccountContext/AccountContext";
import { Link } from "react-router";
export const Header: React.FC = () => {
  const { setShowLoginForm } = useContext(AccountContext);
  return (
    <header className={style.Header}>
      <div className={style.brandSearchNavContainer}>
        <span>
          <Link to="/">
          ClothingStore
          </Link>
        </span>
        <section role="search">
          <form>
            <input type="text" />
            <button>
              <FaSearch />
            </button>
          </form>
        </section>
        <nav>
          <ul>
            <li title="Lista de desejos">
              <SlHeart />
            </li>
            <li title="Sacola">
              <SlBag />
            </li>
            <li
              onClick={() => {
                setShowLoginForm(true);
              }}
            >
              Login
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
