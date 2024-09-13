import { HashRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import { Cart } from "./pages/Cart";
import { Shop } from "./pages/Shop";
import NotFoundPage from "./pages/NotFound";

export const Root = () => {
  return (
    <HashRouter>
      <Routes>
      <Route path="/" element={<App />}>
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};
