import type { Localized } from '../i18n';

const repo = 'https://github.com/LunoRX-RS/desktop';

export const site = {
	name: 'LunoRX',
	repo,
	releases: `${repo}/releases`,
	security: `${repo}/security`,
	issues: `${repo}/issues`,
	installGuide: `${repo}/blob/main/INSTALL.md`,
	installScript: 'curl -fsSL https://raw.githubusercontent.com/LunoRX-RS/desktop/main/scripts/install-linux.sh | sh',
	installScriptDeb: 'curl -fsSL https://raw.githubusercontent.com/LunoRX-RS/desktop/main/scripts/install-linux.sh | sh -s -- --deb',
	installScriptRemove: 'curl -fsSL https://raw.githubusercontent.com/LunoRX-RS/desktop/main/scripts/install-linux.sh | sh -s -- --uninstall',
	updated: { th: '24 ตุลาคม 2569', en: 'October 24, 2026' } as Localized<string>,
};

export const meta: Localized<{ title: string; description: string }> = {
	th: {
		title: 'LunoRX | เครื่องเล่นเพลง YouTube Music บนคอมพิวเตอร์',
		description: 'LunoRX เป็นแอปเล่นเพลง YouTube Music บน Mac, Windows และ Linux ฟรีและเปิดซอร์ส มีเนื้อเพลงเลื่อนตามเสียงร้อง และเก็บเพลย์ลิสต์ไว้บนเครื่องของคุณ',
	},
	en: {
		title: 'LunoRX | A music player for YouTube Music on your computer',
		description: 'LunoRX plays YouTube Music on Mac, Windows and Linux. It is free and open source, with lyrics that follow the singing and playlists kept on your own computer.',
	},
};

export const nav: Localized<{ id: string; label: string }[]> = {
	th: [
		{ id: 'features', label: 'ฟีเจอร์' },
		{ id: 'showcase', label: 'ตัวอย่าง' },
		{ id: 'download', label: 'ดาวน์โหลด' },
		{ id: 'faq', label: 'คำถามที่พบบ่อย' },
		{ id: 'legal', label: 'ข้อกฎหมาย' },
	],
	en: [
		{ id: 'features', label: 'Features' },
		{ id: 'showcase', label: 'Preview' },
		{ id: 'download', label: 'Download' },
		{ id: 'faq', label: 'FAQ' },
		{ id: 'legal', label: 'Legal' },
	],
};

export const legalPages: Localized<{ slug: string; title: string; summary: string }[]> = {
	th: [
		{ slug: 'disclaimer', title: 'ข้อสงวนสิทธิ์และเงื่อนไขการใช้งาน', summary: 'แอปนี้ไม่ได้เกี่ยวข้องกับ Google, YouTube หรือ Spotify รวมถึงเรื่องเครื่องหมายการค้าและความรับผิด' },
		{ slug: 'privacy', title: 'ความเป็นส่วนตัว', summary: 'แอปเก็บอะไรไว้ที่ไหน ส่งข้อมูลอะไรออกไปบ้าง และรหัสล็อกอินเก็บอย่างไร' },
		{ slug: 'license', title: 'สัญญาอนุญาตซอฟต์แวร์', summary: 'MIT และรายชื่อโปรแกรมของคนอื่นที่แอปนำมาใช้' },
		{ slug: 'security', title: 'ความปลอดภัย', summary: 'ถ้าพบช่องโหว่ แจ้งเราแบบส่วนตัวได้อย่างไร' },
		{ slug: 'cookies', title: 'คุกกี้ของเว็บไซต์', summary: 'เว็บไซต์นี้จำอะไรไว้ในเบราว์เซอร์ของคุณบ้าง' },
	],
	en: [
		{ slug: 'disclaimer', title: 'Disclaimer and terms of use', summary: 'This app is not connected to Google, YouTube or Spotify. Also covers trademarks and liability.' },
		{ slug: 'privacy', title: 'Privacy', summary: 'What the app stores and where, what it sends out, and how login details are kept.' },
		{ slug: 'license', title: 'Software license', summary: 'MIT, and the third-party software the app uses.' },
		{ slug: 'security', title: 'Security', summary: 'How to report a security problem privately.' },
		{ slug: 'cookies', title: 'Website cookies', summary: 'What this website remembers in your browser.' },
	],
};
