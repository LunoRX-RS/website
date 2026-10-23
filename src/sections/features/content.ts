import type { Localized } from '../../i18n';

type Item = { title: string; body: string; badge?: string };

export const content: Localized<{ kicker: string; title: string; items: Item[] }> = {
	th: {
		kicker: 'ฟีเจอร์',
		title: 'สิ่งที่แอปทำได้',
		items: [
			{ title: 'เล่นเสียงด้วยตัวเล่นในแอป', body: 'แอปมีตัวเล่นเสียงของตัวเอง ไม่ได้เปิดหน้าเว็บมาเล่น คุณข้ามไปตรงไหนของเพลงก็ได้ ปรับระดับเสียงและคุณภาพได้ และเปิดแอปมาเล่นต่อจากที่ค้างไว้ได้' },
			{ title: 'เพลงถัดไปมาเอง', body: 'พอเพลงจบ แอปจะเปิดเพลงที่คล้ายกันต่อให้ คุณดูรายการเพลงถัดไปและเลือกเองได้ ปุ่มย้อนกลับก็ย้อนตามรายการนั้น' },
			{ title: 'เนื้อเพลงจาก 8 แหล่ง', body: 'เรียงลำดับแหล่งที่อยากใช้ได้ บางเพลงไฮไลต์ทีละคำตามจังหวะ และคุณเขียนไฟล์เนื้อเพลงของตัวเองได้ด้วยเครื่องมือในแอป' },
			{ title: 'ข้อมูลอยู่บนเครื่องคุณ', body: 'เพลย์ลิสต์ เพลงที่กดใจ และประวัติการฟัง เก็บในเครื่องก่อน เลือกเก็บเพลย์ลิสต์ไว้ฟังตอนไม่มีเน็ตได้ และจะซิงก์กับเซิร์ฟเวอร์ของคุณเองหรือไม่ก็ได้' },
			{ title: 'ใช้คีย์บอร์ดคล่อง', body: 'กด ⌘K บน Mac หรือ Ctrl+K บน Windows และ Linux เพื่อค้นหาและสั่งงานได้ทันที ตั้งแป้นลัดเองได้' },
			{ title: 'เก็บรหัสล็อกอินอย่างปลอดภัย', body: 'ข้อมูลล็อกอิน YouTube เก็บในที่เก็บรหัสผ่านของระบบ (Keychain บน Mac, Credential Manager บน Windows, GNOME Keyring หรือ KWallet บน Linux) ไม่เขียนลงไฟล์ ไม่ส่งไปที่เซิร์ฟเวอร์ ถ้าเครื่องไม่มีที่เก็บแบบนี้ ระบบล็อกอินจะไม่ทำงาน แทนที่จะเก็บแบบไม่ปลอดภัย' },
		],
	},
	en: {
		kicker: 'Features',
		title: 'What it does',
		items: [
			{ title: 'Plays audio with its own player', body: 'The app has a built-in audio player instead of opening a web page. You can jump to any point in a song, change the volume and quality, and pick up where you left off.' },
			{ title: 'The next song starts on its own', body: 'When a song ends, the app plays a similar one. You can see the upcoming list and pick from it, and the back button goes back through that list.' },
			{ title: 'Lyrics from 8 sources', body: 'Choose which sources to try first. Some songs highlight each word as it is sung, and you can write your own lyrics files with a tool inside the app.' },
			{ title: 'Your data stays on your computer', body: 'Playlists, liked songs and listening history are saved on your computer first. You can keep playlists for offline listening, and sync with your own server if you want to.' },
			{ title: 'Easy with a keyboard', body: 'Press ⌘K on Mac or Ctrl+K on Windows and Linux to search and run commands right away. You can set your own shortcuts.' },
			{ title: 'Login details are kept safe', body: 'Your YouTube login is stored in the password storage that comes with your system (Keychain on Mac, Credential Manager on Windows, GNOME Keyring or KWallet on Linux). It is never written to a file or sent to a server. If your computer has no such storage, login is turned off instead of being stored unsafely.' },
		],
	},
};
