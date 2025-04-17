import { ProductsProvider } from "./context/ProductContext/ProductContext";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";

// import "./App.css";

function App() {
  return (
    <ProductsProvider>
      <DefaultLayout />
    </ProductsProvider>
  );
}

export default App;
