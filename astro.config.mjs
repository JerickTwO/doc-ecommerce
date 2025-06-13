import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';


export default defineConfig({
  integrations: [tailwind()],
  site: 'https://docs.perseo.com',
  base: '/',
  output: 'server',
  adapter: vercel(),
});
