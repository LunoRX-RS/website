import type { Localized } from '../../i18n';

export const content: Localized<{ title: string; body: string; download: string; source: string }> = {
	th: { title: 'ลองฟังเพลงด้วยแอปนี้ดูไหม', body: 'ดาวน์โหลดรุ่นล่าสุดจาก GitHub หรืออ่านซอร์สโค้ดก่อนก็ได้ ทุกอย่างเปิดให้ดู', download: 'ดาวน์โหลดจาก Releases', source: 'ดูซอร์สโค้ด' },
	en: { title: 'Want to try it?', body: 'Download the latest version from GitHub, or read the source code first. Everything is open to see.', download: 'Download from Releases', source: 'View the source' },
};
