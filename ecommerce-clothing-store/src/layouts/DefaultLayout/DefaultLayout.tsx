import { Footer } from "../../components/Footer/Footer";
import { Header } from "../../components/Header/Header";
import { Main } from "../../components/Main/Main";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
