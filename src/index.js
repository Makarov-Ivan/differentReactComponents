import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import Counter from "./Counter";
import SaerchForm from "./SearchForm";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Counter />
    <SaerchForm />
  </StrictMode>
);
