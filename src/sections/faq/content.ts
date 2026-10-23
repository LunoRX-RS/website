import type { Localized } from '../../i18n';

export const content: Localized<{ kicker: string; title: string; ask: string; issues: string; askAfter: string; items: { q: string; a: string }[] }> = {
	th: {
		kicker: 'คำถามที่พบบ่อย',
		title: 'เรื่องที่คนมักสงสัย',
		ask: 'ไม่เจอคำตอบ? ถามได้ที่',
		issues: 'GitHub Issues',
		askAfter: '(อย่าใส่ข้อมูลส่วนตัว)',
		items: [
			{ q: 'รองรับ Spotify ไหม', a: 'ยังไม่รองรับ ทั้งการค้นหาและการเล่น แอปจะบอกว่าใช้ไม่ได้ ตอนนี้ใช้ได้กับ YouTube Music เท่านั้น' },
			{ q: 'ใช้ฟรีไหม', a: 'ฟรี LunoRX เป็นซอฟต์แวร์เปิดซอร์สภายใต้สัญญา GPL-3.0 ใครก็ดูโค้ด แก้ไข และแจกต่อได้ตามเงื่อนไขของสัญญานั้น' },
			{ q: 'ข้อมูลของฉันเก็บอยู่ที่ไหน', a: 'บนเครื่องของคุณ ทั้งเพลย์ลิสต์ เพลงที่กดใจ และประวัติการฟัง รหัสล็อกอินอยู่ในที่เก็บรหัสผ่านของระบบ การซิงก์กับเซิร์ฟเวอร์เป็นตัวเลือก และคุณตั้งเซิร์ฟเวอร์เองได้' },
			{ q: 'ทำไมตอนเปิดแอปครั้งแรกระบบถึงเตือน', a: 'เพราะตัวติดตั้งยังไม่ผ่านการรับรองของ Apple (macOS) และยังไม่มีลายเซ็นดิจิทัล (Windows) แอปไม่ได้เสียหาย ดูวิธีเปิดในคู่มือติดตั้ง และเทียบไฟล์กับ SHA256SUMS.txt ก่อนเสมอ' },
			{ q: 'LunoRX เกี่ยวข้องกับ YouTube หรือ Google ไหม', a: 'ไม่เกี่ยวข้อง เป็นโปรเจกต์อิสระที่ไม่เป็นทางการ ทาง YouTube และ Google ไม่ได้รับรอง คุณต้องใช้ให้เป็นไปตามข้อกำหนดของบริการที่คุณใช้ อ่านเพิ่มที่ข้อสงวนสิทธิ์' },
			{ q: 'เนื้อเพลงมาจากไหน แล้วแอปส่งข้อมูลอะไรออกไปบ้าง', a: 'มาจากแหล่งที่คุณเลือก เช่น LyricsPlus, LRCLIB, Netease, QQ Music, Kugou, Boidu หรือไฟล์ของคุณเอง แอปส่งแค่ชื่อเพลง ชื่อศิลปิน และความยาวเพลง ไม่ส่งรหัสล็อกอินหรือข้อมูลบัญชี คุณปิดแต่ละแหล่งได้ และบางแหล่งเป็นบริการที่ไม่เป็นทางการ อาจใช้ไม่ได้ในวันหนึ่ง' },
			{ q: 'ต้องติดตั้งตัวเล่นเสียงเพิ่มไหม', a: 'ตัวติดตั้งมีมาให้แล้ว ถ้าเล่นเสียงไม่ได้บน Mac ให้ลองรัน brew install mpv ถ้าคุณรันจากซอร์สโค้ดเอง ต้องติดตั้ง libmpv ด้วยตัวเอง' },
		],
	},
	en: {
		kicker: 'FAQ',
		title: 'Things people often ask',
		ask: 'Cannot find your answer? Ask on',
		issues: 'GitHub Issues',
		askAfter: '(please do not post personal information)',
		items: [
			{ q: 'Does it work with Spotify?', a: 'Not yet, for search or for playing. The app will tell you it is not supported. Right now it works with YouTube Music only.' },
			{ q: 'Is it free?', a: 'Yes. LunoRX is open source software under the GPL-3.0 license. Anyone can read the code, change it and share it, under the terms of that license.' },
			{ q: 'Where is my data kept?', a: 'On your computer: playlists, liked songs and listening history. Your login is stored in your system password storage. Syncing with a server is optional, and you can run your own server.' },
			{ q: 'Why does my computer warn me the first time I open it?', a: 'Because the installer is not yet approved by Apple (macOS) and has no digital signature (Windows). The app is not damaged. See the install guide for how to open it, and always compare the file with SHA256SUMS.txt first.' },
			{ q: 'Is LunoRX connected to YouTube or Google?', a: 'No. It is an independent, unofficial project that YouTube and Google have not approved. You are responsible for using it in line with the terms of the services you use. Read more in the disclaimer.' },
			{ q: 'Where do lyrics come from, and what does the app send out?', a: 'From the sources you choose, such as LyricsPlus, LRCLIB, Netease, QQ Music, Kugou, Boidu, or your own files. The app sends only the song title, artist name and length. It never sends your login or account details. You can turn each source off, and some are unofficial services that may stop working one day.' },
			{ q: 'Do I need to install a separate audio player?', a: 'No, the installers include one. If sound does not work on a Mac, try running brew install mpv. If you run the app from source code, you need to install libmpv yourself.' },
		],
	},
};
