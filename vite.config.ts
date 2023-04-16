import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import alias from "@rollup/plugin-alias";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [
        { find: "@", replacement: path.resolve(__dirname, "src") },
        { find: "@assets", replacement: path.resolve(__dirname, "src/assets") },
        {
          find: "@components",
          replacement: path.resolve(__dirname, "src/components"),
        },
        {
          find: "@routes",
          replacement: path.resolve(__dirname, "src/routes"),
        },
        /* Alias example
        {
          find: "@example",
          replacement: path.resolve(__dirname, "src/example"),
        },
        */
      ],
    }),
  ],
});
