import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://darnedog.github.io',
  base: '/',
  outDir: 'public',
  publicDir: 'static',
});