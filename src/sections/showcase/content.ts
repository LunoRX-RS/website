import type { Localized } from '../../i18n';

type Step = { title: string; body: string; img: string; alt: string };

export const content: Localized<{ kicker: string; title: string; note: string; steps: Step[] }> = {
	th: {
		kicker: 'ตัวอย่าง',
		title: 'หน้าตาจริงของแอป',
		note: 'ภาพหน้าจอจริงจาก macOS ที่ใช้ข้อมูลจาก YouTube Music',
		steps: [
			{ img: 'listen-now', alt: 'หน้า Listen Now', title: 'เริ่มต้นที่หน้า Listen Now', body: 'เห็นเพลงที่เพิ่งฟัง รายการเพลงของคุณอยู่ทางซ้าย และแถบควบคุมการเล่นอยู่ด้านล่าง พร้อมรายการเพลงที่จะเล่นต่อ' },
			{ img: 'lyrics-fullwindow', alt: 'เนื้อเพลงเต็มหน้าต่าง', title: 'เนื้อเพลงเต็มหน้าจอ', body: 'บรรทัดที่ร้องอยู่จะเด่นขึ้น บางเพลงไฮไลต์ทีละคำ กดที่บรรทัดไหนก็ข้ามไปตรงนั้นได้ และเลือกแหล่งเนื้อเพลงเองได้' },
			{ img: 'lyrics-split', alt: 'เนื้อเพลงแบบแบ่งหน้าจอ', title: 'ดูปกอัลบั้มไปด้วย', body: 'มุมมองแบบแบ่งครึ่ง ปกและชื่อเพลงอยู่ซ้าย เนื้อเพลงอยู่ขวา ถ้าเนื้อเพลงช้าหรือเร็วไป ก็ปรับเวลาได้แยกตามแหล่ง' },
			{ img: 'playlist-editor', alt: 'ตัวแก้ไขเพลย์ลิสต์', title: 'เพลย์ลิสต์ของคุณ', body: 'สร้างและแก้ไขได้ในเครื่อง เลือกเก็บไว้ฟังตอนไม่มีเน็ต และจะอัปโหลดขึ้นเซิร์ฟเวอร์เมื่อไรก็ได้ที่คุณสั่ง' },
		],
	},
	en: {
		kicker: 'Preview',
		title: 'What the app looks like',
		note: 'Real screenshots from macOS, using data from YouTube Music',
		steps: [
			{ img: 'listen-now', alt: 'The Listen Now page', title: 'Start at Listen Now', body: 'See what you played recently, your playlists on the left, and the playback controls at the bottom, along with what plays next.' },
			{ img: 'lyrics-fullwindow', alt: 'Full-window lyrics', title: 'Full-screen lyrics', body: 'The line being sung stands out, and on some songs each word lights up as it is sung. Click any line to jump there, and pick which lyrics source to use.' },
			{ img: 'lyrics-split', alt: 'Split-screen lyrics', title: 'See the cover as well', body: 'A split view with the cover and song name on the left and lyrics on the right. If lyrics run early or late, you can shift the timing for each source.' },
			{ img: 'playlist-editor', alt: 'Playlist editor', title: 'Your playlists', body: 'Create and edit them on your computer, keep them for offline listening, and upload them to a server only when you choose to.' },
		],
	},
};
