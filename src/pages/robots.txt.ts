import type { APIRoute } from 'astro';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
	// /components/ is kept out of results with a noindex tag; blocking it here would hide that tag from crawlers.
	const lines = ['User-agent: *', 'Allow: /'];
	if (site) lines.push('', `Sitemap: ${new URL('/sitemap-index.xml', site)}`);
	return new Response(lines.join('\n') + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
