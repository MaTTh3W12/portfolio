import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  includes: ['./src', './assets'],
  integrations: [tailwind()],
});