import { useContext, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { AccountContext } from "../../context/AccountContext/AccountContext";
import style from "./LoginForm.module.css";
import { BsDash } from "react-icons/bs";

export const LoginForm: React.FC = () => {
  const { showLoginForm, setShowLoginForm } = useContext(AccountContext);

  const form = useRef(null);

  // useEffect(() => {
  //   return () => {
  //     if (form.current === null) return;
  //     const currentForm: HTMLFormElement = form.current;
  //     currentForm.removeEventListner();
  //   };
  // }, [form, showLoginForm]);

  return (
    <div className={style.LoginFormBackground}>
      <form
        ref={form}
        className={style.LoginForm}
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <button
          onClick={() => {
            setShowLoginForm(!showLoginForm);
          }}
        >
          <IoClose />
        </button>
        <span>ClothingStore</span>
        <label htmlFor="email">
          E-mail
          <input type="email" name="email" id="email" />
        </label>
        <label htmlFor="password">
          {" "}
          Senha
          <input type="password" name="password" id="password" />
        </label>
        {/* TO-DO CRIAR UM ROUTER PARA UMA PÁGINA DE RECUPERAÇÃO DE SENHA */}
        <a href="/">Esqueci minha senha</a>
        <div>
          <button type="submit">Entrar</button>
          <BsDash />
          {/* TO-DO CRIAR UM ROUTER PARA UMA PÁGINA DE CRIAÇÃO DE CONTA */}
          <a href="/">Criar uma conta</a>
        </div>
      </form>
    </div>
  );
};
