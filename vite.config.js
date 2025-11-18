import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // base: "/portfolio",
  // base: process.env.VITE_BASE_PATH || "/portfolio-main",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
