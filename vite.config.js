import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // ✅ RUTA BASE para GitHub Pages
  build: {
    outDir: "dist", // ✅ Carpeta de salida correcta
  },
});
