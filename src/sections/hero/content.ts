import type { Localized } from '../../i18n';

export const content: Localized<{
	line1: string; line2: string; body: string; download: string; source: string;
	meta: string[]; note: string; scroll: string; shotAlt: string; moonLabel: string;
}> = {
	th: {
		line1: 'เพลงที่คุณชอบ',
		line2: 'อยู่บนเครื่องคุณ',
		body: 'LunoRX เป็นแอปเล่นเพลง YouTube Music สำหรับ Mac, Windows และ Linux มีเนื้อเพลงที่เลื่อนตามเสียงร้อง และเก็บเพลย์ลิสต์ไว้บนเครื่องของคุณ',
		download: 'ดาวน์โหลด',
		source: 'ดูซอร์สโค้ดบน GitHub',
		meta: ['ใช้ฟรี', 'เปิดซอร์ส GPL-3.0', 'Mac · Windows · Linux'],
		note: 'รุ่นทดลอง 1.0.0-rc ไม่ได้เกี่ยวข้องกับ Google, YouTube หรือ Spotify',
		scroll: 'เลื่อนลง',
		shotAlt: 'หน้า Listen Now ของ LunoRX บน macOS แสดงเพลงที่เพิ่งฟัง รายการเพลงด้านข้าง และแถบควบคุมการเล่นด้านล่าง',
		moonLabel: 'ภาพวาดพระจันทร์เสี้ยวล้อมด้วยวงโคจรและแถบคลื่นเสียง',
	},
	en: {
		line1: 'Your music,',
		line2: 'on your own machine.',
		body: 'LunoRX plays YouTube Music on Mac, Windows and Linux. Lyrics follow the singing, and your playlists stay on your own computer.',
		download: 'Download',
		source: 'View the source on GitHub',
		meta: ['Free to use', 'Open source GPL-3.0', 'Mac · Windows · Linux'],
		note: 'Test version 1.0.0-rc. Not connected to Google, YouTube or Spotify.',
		scroll: 'Scroll',
		shotAlt: 'The Listen Now page of LunoRX on macOS, showing recently played songs, a song list on the side and playback controls at the bottom',
		moonLabel: 'Drawing of a crescent moon surrounded by orbits and a ring of sound bars',
	},
};
