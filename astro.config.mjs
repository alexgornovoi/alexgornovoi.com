import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";

export default defineConfig({
  output: "static",
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    syntaxHighlight: "prism",
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex],
  },
});
