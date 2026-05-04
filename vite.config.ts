import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Configuração do Vite com plugin React para JSX e HMR.
export default defineConfig({
  plugins: [react()],
});
