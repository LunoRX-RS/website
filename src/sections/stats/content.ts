import type { Localized } from '../../i18n';

type Stat = { value?: number; text?: string; label: string };

export const content: Localized<{ label: string; stats: Stat[] }> = {
	th: {
		label: 'ข้อเท็จจริงสั้น ๆ',
		stats: [
			{ value: 8, label: 'แหล่งเนื้อเพลงที่เลือกลำดับได้' },
			{ value: 3, label: 'ระบบที่รองรับ: Mac, Windows, Linux' },
			{ value: 0, label: 'เซิร์ฟเวอร์ที่ต้องมีเพื่อใช้แอป' },
			{ text: 'MIT', label: 'สัญญาอนุญาต ซอร์สโค้ดเปิดให้ทุกคน' },
		],
	},
	en: {
		label: 'Quick facts',
		stats: [
			{ value: 8, label: 'lyrics sources you can put in your own order' },
			{ value: 3, label: 'supported systems: Mac, Windows, Linux' },
			{ value: 0, label: 'servers needed to use the app' },
			{ text: 'MIT', label: 'license. The source code is open to everyone' },
		],
	},
};
