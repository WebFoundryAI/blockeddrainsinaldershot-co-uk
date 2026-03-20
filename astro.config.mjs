import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blockeddrainsinaldershot.co.uk',
  integrations: [
    sitemap(),
    tailwind(),
  ],
  output: 'static',
  build: {
    format: 'file',
  },
  trailingSlash: 'never',
});
