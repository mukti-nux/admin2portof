import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';

const DEV_PORT = 2121;

export default defineConfig({
  site: process.env.CI
    ? 'https://themesberg.github.io'
    : `http://localhost:${DEV_PORT}`,
  base: undefined, // <= penting kalau di Vercel root domain

  server: {
    port: DEV_PORT,
  },

  integrations: [
    sitemap(),
    tailwind(),
  ],
});
