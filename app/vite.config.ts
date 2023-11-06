import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import path from "path";

export default defineConfig({
  plugins: [solid()],

  resolve: {
    alias: [
      { find: "@/", replacement: path.resolve(__dirname, "./src") + "/" },
    ],
  },

  build: {
    target: "es6",
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
    },
  },
});
