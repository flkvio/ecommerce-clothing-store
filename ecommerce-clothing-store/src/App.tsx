import { useState } from "react";
import { DefaultLayout } from "./components/DefaultLayout/DefaultLayout";

// import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <DefaultLayout />
    </>
  );
}

export default App;
