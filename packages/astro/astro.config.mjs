import { defineConfig } from "astro/config";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://mchevestrier.github.io",
  integrations: [mdx(), sitemap(), react()],
  prefetch: true,

  vite: {
    plugins: [tailwindcss()],
  },
});
