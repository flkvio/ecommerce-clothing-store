import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { Main } from "../Main/Main";

export const DefaultLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
