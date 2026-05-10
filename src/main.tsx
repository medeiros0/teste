import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

/** Imagem em public/ (JPEG). Ajuste o nome se mudar de extensão. */
const bgPrefix = import.meta.env.BASE_URL;
document.documentElement.style.setProperty(
  "--site-bg-image",
  `url("${bgPrefix}background.jpeg")`,
);

const el = document.getElementById("root");
if (!el) {
  throw new Error("Elemento #root não encontrado.");
}

createRoot(el).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
