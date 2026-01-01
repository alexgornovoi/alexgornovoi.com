import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  output: "static",
  integrations: [react()],
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: "shiki",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
    shikiConfig: {
      themes: {
        light: "github-light",
        dark: "github-dark",
        forest: "vitesse-dark",
        ocean: "nord",
        sunset: "rose-pine-moon",
        lavender: "rose-pine-dawn",
        sepia: "min-light",
        nord: "nord",
        mono: "github-dark-high-contrast",
      },
      defaultColor: false,
      wrap: true,
    },
  },
});
