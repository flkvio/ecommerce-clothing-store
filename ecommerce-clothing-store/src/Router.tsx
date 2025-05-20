import { Route, Routes } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Main } from "./components/Main/Main";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
};
