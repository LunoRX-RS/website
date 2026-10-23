export type Lang = 'th' | 'en';
export const langs: Lang[] = ['th', 'en'];

export type Localized<T> = Record<Lang, T>;

export function langFromPath(pathname: string): Lang {
	return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'th';
}

/** '/#faq' -> '/en/#faq' for English, unchanged for Thai. */
export function localePath(lang: Lang, path: string): string {
	return lang === 'en' ? `/en${path}` : path;
}

/** Same page in the other language. */
export function switchPath(pathname: string): string {
	if (langFromPath(pathname) === 'en') {
		const rest = pathname.replace(/^\/en/, '');
		return rest === '' ? '/' : rest;
	}
	return `/en${pathname}`;
}
