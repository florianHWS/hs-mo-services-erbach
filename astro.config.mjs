import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://florianhws.github.io',
  base: '/hs-mo-services-erbach',
  vite: { plugins: [tailwindcss()] }
});
