// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// Production origin. Override with SITE_URL at build time (e.g. for a preview domain).
// Without an origin the build omits canonical, hreflang, og:url/og:image, the sitemap and structured-data URLs.
const site = process.env.SITE_URL || 'https://lunorx.xyz';

// https://astro.build/config
export default defineConfig({
  site,
  adapter: cloudflare(),
  integrations: [
    react(),
    ...(site
      ? [
          sitemap({
            filter: (page) => !page.includes('/components'),
            i18n: { defaultLocale: 'th', locales: { th: 'th-TH', en: 'en-US' } },
          }),
        ]
      : []),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
