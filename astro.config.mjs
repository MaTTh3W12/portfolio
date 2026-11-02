import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { rm } from 'node:fs/promises';

const excludeDevelopmentDesignSystem = {
  name: 'exclude-development-design-system',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      await rm(new URL('design-system/', dir), { recursive: true, force: true });
      await rm(new URL('design-system.html', dir), { force: true });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  integrations: [excludeDevelopmentDesignSystem],
  vite: {
    plugins: [tailwindcss()],
  },
});
