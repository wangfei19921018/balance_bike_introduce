import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import pxtorem from "@minko-fe/postcss-pxtorem";

export default defineConfig({
  base: "/",
  plugins: [vue()],
  css: {
    postcss: {
      plugins: [
        pxtorem({
          rootValue: 37.5,
          unitPrecision: 5,
          minPixelValue: 2,
          exclude: "/node_modules/i",
        }),
      ],
    },
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
