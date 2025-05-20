import { useContext } from "react";
import { Outlet } from "react-router";
import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { AccountContext } from "../../context/AccountContext/AccountContext";

export const DefaultLayout: React.FC = () => {
  const { showLoginForm } = useContext(AccountContext);

  return (
    <>
      <Header />
      {showLoginForm ? <LoginForm /> : null}

      {/* <Main /> */}
      <Outlet />
      <Footer />
    </>
  );
};
