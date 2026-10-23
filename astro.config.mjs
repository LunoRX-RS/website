// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare';
import sitemap from '@astrojs/sitemap';

// Set SITE_URL at build time to the real production origin, e.g. SITE_URL=https://example.com.
// Without it the build omits canonical, hreflang, og:url/og:image, the sitemap and structured-data URLs
// instead of guessing a domain.
const site = process.env.SITE_URL || undefined;
if (!site && process.argv.includes('build')) {
  console.warn('\n[seo] SITE_URL is not set: canonical, hreflang, sitemap and absolute og:image are skipped.\n');
}

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
