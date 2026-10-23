import type { Localized } from '../../i18n';

export const content: Localized<{ home: string; tagline: string; project: string; legal: string; links: string; legalLabel: string; disclaimer: string; copyright: string }> = {
	th: {
		home: 'LunoRX หน้าแรก', tagline: 'เครื่องเล่นเพลงบนคอมพิวเตอร์สำหรับ YouTube Music เปิดซอร์ส อยู่ในช่วงทดลอง',
		project: 'โปรเจกต์', legal: 'ข้อกฎหมาย', links: 'ลิงก์ท้ายหน้า', legalLabel: 'เอกสารทางกฎหมาย',
		disclaimer: 'LunoRX เป็นโปรเจกต์อิสระที่ไม่เป็นทางการ ไม่ได้เกี่ยวข้องหรือได้รับการรับรองจาก Google LLC, YouTube, YouTube Music หรือ Spotify AB ชื่อและเครื่องหมายการค้าทั้งหมดเป็นของเจ้าของแต่ละราย',
		copyright: '© 2026 EvarinthoSec และผู้ร่วมพัฒนา · เผยแพร่ภายใต้ GPL-3.0',
	},
	en: {
		home: 'LunoRX home', tagline: 'An open source music player for YouTube Music on your computer. Currently a test version.',
		project: 'Project', legal: 'Legal', links: 'Footer links', legalLabel: 'Legal documents',
		disclaimer: 'LunoRX is an independent, unofficial project. It is not connected to, or approved by, Google LLC, YouTube, YouTube Music or Spotify AB. All names and trademarks belong to their owners.',
		copyright: '© 2026 EvarinthoSec and contributors · Released under GPL-3.0',
	},
};
