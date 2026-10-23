import type { Localized } from '../../i18n';

export const content: Localized<{ label: string; row1: string[]; row2: string[] }> = {
	th: {
		label: 'สิ่งที่แอปทำได้',
		row1: ['ค้นหา', 'เล่น', 'เนื้อเพลง', 'เพลย์ลิสต์', 'ฟังออฟไลน์'],
		row2: ['คิวเพลง', 'แป้นลัด', 'ธีมมืด', 'ไฟล์ .lrc', 'เปิดซอร์ส'],
	},
	en: {
		label: 'What the app does',
		row1: ['Search', 'Play', 'Lyrics', 'Playlists', 'Offline'],
		row2: ['Queue', 'Shortcuts', 'Dark theme', '.lrc files', 'Open source'],
	},
};
