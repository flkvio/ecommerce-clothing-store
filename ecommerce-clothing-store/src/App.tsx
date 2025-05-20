import { BrowserRouter } from "react-router";
import { AccountProvider } from "./context/AccountContext/AccountContext";
import { StoreProvider } from "./context/ProductContext/ProductContext";
import { Router } from "./Router";

// import "./App.css";

function App() {
  return (
    <StoreProvider>
      <AccountProvider>
        <BrowserRouter>
          {/* <DefaultLayout /> */}
          <Router />
        </BrowserRouter>
      </AccountProvider>
    </StoreProvider>
  );
}

export default App;
