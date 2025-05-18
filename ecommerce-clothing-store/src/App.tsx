import { AccountProvider } from "./context/AccountContext/AccountContext";
import { StoreProvider } from "./context/ProductContext/ProductContext";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";

// import "./App.css";

function App() {
  return (
    <StoreProvider>
      <AccountProvider>
        <DefaultLayout />
      </AccountProvider>
    </StoreProvider>
  );
}

export default App;
