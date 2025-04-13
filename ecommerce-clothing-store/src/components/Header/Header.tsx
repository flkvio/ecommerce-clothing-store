import React from "react";
import { FaSearch } from "react-icons/fa";
import { SlBag, SlHeart } from "react-icons/sl";
import style from "./Header.module.css";
export const Header: React.FC = () => {
  return (
    <header className={style.Header}>
      <div className={style.brandSearchNavContainer}>
        <span>ClothingStore</span>
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
            <li>Login</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
