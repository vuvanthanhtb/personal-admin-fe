import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
      app: path.resolve(__dirname, "./src/app/"),
      modules: path.resolve(__dirname, "./src/modules/"),
      shared: path.resolve(__dirname, "./src/shared/"),
      styles: path.resolve(__dirname, "./src/styles/"),
    },
  },
})
