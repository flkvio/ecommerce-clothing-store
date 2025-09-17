import { Route, Routes } from "react-router";
import { DefaultLayout } from "./layouts/DefaultLayout/DefaultLayout";
import { Main } from "./components/Main/Main";
import { Error404 } from "./components/Error404/Error404";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
};
