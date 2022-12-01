import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config

// https://astro.build/config

// https://astro.build/config
export default defineConfig({
  build: {
    format: 'file'
  },
  site: 'https://maplepost.github.io',
  base: '/www-medimuse.io',
  integrations: [tailwind()]
});