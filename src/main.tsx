import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { CartProvider } from "./Context/CartContext.tsx";
import { Root } from "./Root.tsx";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={theme}>
    <StrictMode>
      <CartProvider>
        <Root />
      </CartProvider>
    </StrictMode>
  </ThemeProvider>
);
