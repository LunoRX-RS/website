import type { Lang } from '../i18n';
import { site } from '../sections/site';

type Json = Record<string, unknown>;

const abs = (origin: URL | string | undefined, path: string) => (origin ? new URL(path, origin).toString() : undefined);

export function softwareApplication(origin: URL | undefined, lang: Lang, description: string, features: string[]): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'SoftwareApplication',
		name: 'LunoRX',
		alternateName: 'Luno',
		applicationCategory: 'MultimediaApplication',
		operatingSystem: 'macOS, Windows, Linux',
		description,
		inLanguage: lang === 'th' ? 'th' : 'en',
		softwareVersion: '1.0.0-rc',
		isAccessibleForFree: true,
		offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
		license: 'https://www.gnu.org/licenses/gpl-3.0.html',
		downloadUrl: site.releases,
		installUrl: site.releases,
		sameAs: [site.repo],
		...(origin ? { image: abs(origin, `/og-${lang}.png`) } : {}),
		featureList: features,
	};
}

export function webSite(origin: URL | undefined, lang: Lang, description: string): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebSite',
		name: 'LunoRX',
		...(origin ? { url: abs(origin, lang === 'th' ? '/' : '/en/') } : {}),
		description,
		inLanguage: lang === 'th' ? 'th' : 'en',
	};
}

export function faqPage(items: { q: string; a: string }[], lang: Lang): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'FAQPage',
		inLanguage: lang === 'th' ? 'th' : 'en',
		mainEntity: items.map((i) => ({ '@type': 'Question', name: i.q, acceptedAnswer: { '@type': 'Answer', text: i.a } })),
	};
}

export function breadcrumbs(origin: URL | undefined, trail: { name: string; path: string }[]): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'BreadcrumbList',
		itemListElement: trail.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t.name, ...(origin ? { item: abs(origin, t.path) } : {}) })),
	};
}

export function webPage(origin: URL | undefined, lang: Lang, name: string, description: string, path: string): Json {
	return {
		'@context': 'https://schema.org',
		'@type': 'WebPage',
		name,
		description,
		...(origin ? { url: abs(origin, path) } : {}),
		inLanguage: lang === 'th' ? 'th' : 'en',
		isPartOf: { '@type': 'WebSite', name: 'LunoRX', ...(origin ? { url: abs(origin, lang === 'th' ? '/' : '/en/') } : {}) },
	};
}
