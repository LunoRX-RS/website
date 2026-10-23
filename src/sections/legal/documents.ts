import type { Lang } from '../../i18n';
import { site } from '../site';

export type LegalDoc = {
	title: string;
	intro: string;
	sections: { heading: string; body: string[] }[];
};

// Summarised from the LunoRX repository docs (README, SECURITY, THIRD_PARTY_NOTICES, LICENSE).
// This is not legal advice.
export const legalDocs: Record<Lang, Record<string, LegalDoc>> = {
	th: {
		disclaimer: {
			title: 'ข้อสงวนสิทธิ์และเงื่อนไขการใช้งาน',
			intro: 'LunoRX เป็นโปรเจกต์เปิดซอร์สที่เป็นอิสระและไม่เป็นทางการ โปรดอ่านข้อความด้านล่างก่อนดาวน์โหลดหรือใช้งาน',
			sections: [
				{ heading: 'ไม่ได้เกี่ยวข้องกับบริษัทอื่น', body: [
					'LunoRX และผู้ร่วมพัฒนาไม่มีความเกี่ยวข้อง ไม่ได้รับอนุญาต และไม่ได้รับการรับรองจาก Google LLC, YouTube, YouTube Music, Spotify AB หรือบริษัทในเครือ',
					'เช่นเดียวกับบริการเนื้อเพลงที่แอปเรียกใช้ได้ ได้แก่ LRCLIB, LyricsPlus, Netease Cloud Music, QQ Music, Kugou และ Boidu',
				] },
				{ heading: 'เครื่องหมายการค้า', body: [
					'"Google", "YouTube", "YouTube Music", "Spotify" รวมถึงชื่อ โลโก้ และเครื่องหมายอื่นที่เกี่ยวข้อง เป็นเครื่องหมายการค้าของเจ้าของแต่ละราย',
					'เราใช้ชื่อเหล่านี้เพื่อบอกว่าแอปทำงานกับบริการไหนเท่านั้น ไม่ได้หมายความว่าเจ้าของรับรองเรา และเราไม่มีเจตนาละเมิดเครื่องหมายการค้าของใคร',
				] },
				{ heading: 'บริการของบุคคลที่สาม', body: [
					'แอปเชื่อมต่อกับ YouTube Music โดยตรง และเรียกใช้บริการเนื้อเพลงที่ไม่เป็นทางการหลายแห่ง บริการเหล่านี้มีข้อกำหนดของตัวเอง และอาจเปลี่ยนแปลง จำกัด หรือหยุดทำงานได้โดยไม่แจ้งล่วงหน้า',
					'คุณต้องใช้แอปให้เป็นไปตามข้อกำหนดที่ใช้กับคุณ รวมถึงข้อกำหนดของ YouTube และ Google',
					'วิธีที่แอปดึงเสียงจาก YouTube และวิธีล็อกอินด้วยบัญชี Google เป็นการตัดสินใจของเจ้าของโปรเจกต์เอง ทาง YouTube และ Google ไม่ได้อนุมัติ ส่วน Spotify แอปยังไม่รองรับ',
				] },
				{ heading: 'ยังเป็นรุ่นทดลอง', body: [
					'LunoRX อยู่ในช่วงทดลอง (1.0.0-rc) ตัวติดตั้ง Windows และ Linux ยังทดสอบบนเครื่องจริงไม่ครบทุกแบบ ตัวติดตั้ง macOS ยังไม่ผ่านการรับรองของ Apple และตัวติดตั้ง Windows ยังไม่มีลายเซ็นดิจิทัล ระบบจึงอาจเตือนตอนเปิดครั้งแรก',
					'ดาวน์โหลดจากหน้า Releases ของโปรเจกต์เท่านั้น และเทียบไฟล์กับ SHA256SUMS.txt ก่อนติดตั้ง',
				] },
				{ heading: 'ข้อจำกัดความรับผิด', body: [
					'ซอฟต์แวร์นี้ให้ใช้ "ตามสภาพที่เป็นอยู่" โดยไม่มีการรับประกันใด ๆ และคุณใช้ด้วยความเสี่ยงของตัวเอง',
					'ผู้พัฒนาและผู้ร่วมพัฒนาไม่รับผิดต่อข้อเรียกร้อง ความเสียหาย หรือผลทางกฎหมายใด ๆ ที่เกิดจากซอฟต์แวร์หรือการใช้งาน ไม่ว่าจะตามสัญญา การละเมิด หรืออย่างอื่น เท่าที่กฎหมายอนุญาต ข้อนี้ไม่กระทบสิทธิที่กฎหมายไม่ให้สละ',
				] },
				{ heading: 'ลิขสิทธิ์ของเพลงและเนื้อเพลง', body: [
					'แอปนี้ไม่ใช่บริการแจกจ่ายเสียงโดยไม่ได้รับอนุญาต การเล่นเป็นไปตามสิทธิ์และนโยบายของผู้ให้บริการแต่ละราย สิ่งที่แอปทำไม่ได้ จะมีข้อความอธิบายบนหน้าจอ',
					'เพลง ภาพปก และเนื้อเพลงเป็นสิทธิ์ของเจ้าของลิขสิทธิ์ตามพระราชบัญญัติลิขสิทธิ์ พ.ศ. 2537 โปรดใช้เพื่อการฟังส่วนตัว',
				] },
			],
		},
		privacy: {
			title: 'ความเป็นส่วนตัว',
			intro: 'LunoRX ออกแบบให้ข้อมูลอยู่บนเครื่องของคุณเป็นหลัก หน้านี้สรุปว่าแอปทำงานอย่างไรจริง ตามเอกสารของโปรเจกต์',
			sections: [
				{ heading: 'ข้อมูลที่เก็บบนเครื่องของคุณ', body: [
					'เพลย์ลิสต์ เพลงที่กดใจ ประวัติการฟัง การตั้งค่า และไฟล์ที่เก็บไว้ฟังตอนไม่มีเน็ต อยู่ในเครื่องของคุณ บน Linux อยู่ที่ ~/.local/share/io.lunorx.desktop และยังอยู่ต่อหลังถอนการติดตั้ง',
					'ไฟล์เนื้อเพลงที่คุณสร้างด้วยเครื่องมือ Lyric Maker เป็นไฟล์ข้อความ เก็บที่ ~/Documents/LunoRX Lyrics/',
					'คุณลบประวัติการฟังได้จากในแอป',
				] },
				{ heading: 'รหัสล็อกอิน', body: [
					'ข้อมูลล็อกอิน YouTube และโทเคนซิงก์เก็บในที่เก็บรหัสผ่านของระบบ (Keychain, Credential Manager, Secret Service)',
					'แอปไม่เขียนข้อมูลเหล่านี้ลงไฟล์ ไม่บันทึกใน log ไม่ส่งไปที่เซิร์ฟเวอร์ และไม่แสดงบนหน้าจอ',
					'บน Linux ที่ไม่มี GNOME Keyring หรือ KWallet ระบบล็อกอินจะไม่ทำงาน แอปไม่เก็บรหัสแบบไม่ปลอดภัยแทน',
				] },
				{ heading: 'ข้อมูลที่ส่งออกจากเครื่อง', body: [
					'YouTube Music: แอปค้นหาและเล่นเพลงโดยติดต่อ YouTube Music โดยตรง จึงเป็นไปตามข้อมูลที่บริการนั้นเก็บ',
					'บริการเนื้อเพลง: แอปส่งเฉพาะชื่อเพลง ชื่อศิลปิน ความยาวเพลง และชื่ออัลบั้ม (ถ้ามี) หรือคำที่คุณพิมพ์ค้นหาเนื้อเพลงเอง ไม่ส่งรหัสล็อกอินหรือข้อมูลบัญชี คุณปิดแต่ละแหล่งได้ที่ ตั้งค่า > การเล่นและเสียง',
					'การซิงก์ (ไม่บังคับ): ถ้าคุณเชื่อมต่อเซิร์ฟเวอร์ LUNOR-X แอปจะส่งแค่บัญชีและเพลย์ลิสต์ เซิร์ฟเวอร์ไม่รับรหัสล็อกอิน YouTube หรือคำค้นหา คุณตั้งเซิร์ฟเวอร์เองได้ และแอปใช้งานได้โดยไม่ต้องมีเซิร์ฟเวอร์',
					'สถิติการฟัง (ไม่บังคับ ต้องเปิดเอง): ถ้าเปิดและเชื่อมต่อเซิร์ฟเวอร์ แอปจะส่งชื่อเพลง ชื่อศิลปิน รหัสเพลง จำนวนครั้งที่เล่น และเวลาที่เล่นล่าสุด ไปเก็บในบัญชีของคุณบนเซิร์ฟเวอร์ ถ้าไม่เปิด สถิติจะอยู่บนเครื่องเท่านั้น',
					'ข้อมูลการใช้งานแบบไม่ระบุตัวตน (ไม่บังคับ ปิดไว้ตั้งแต่แรก): ถ้าเปิด แอปจะส่งชื่อตัวนับและจำนวนครั้ง เช่น เปิดแอปกี่ครั้ง หรือเจอข้อผิดพลาดประเภทไหน พร้อมรหัสเครื่องแบบสุ่ม ไม่มีชื่อเพลง ศิลปิน คำค้นหา หรือข้อมูลบัญชี คุณดูได้ในแอปว่ารอบถัดไปจะส่งอะไร',
					'ลิงก์แชร์เพลย์ลิสต์: ถ้าคุณสร้างลิงก์แชร์ ใครที่มีลิงก์จะเห็นชื่อ คำอธิบาย และรายชื่อเพลงในเพลย์ลิสต์นั้นได้ โดยไม่ต้องล็อกอิน คุณยกเลิกลิงก์ได้ทุกเมื่อ',
				] },
				{ heading: 'สิทธิของคุณ', body: [
					'เพราะข้อมูลส่วนใหญ่อยู่บนเครื่องคุณ คุณดู สำรอง และลบได้เอง ถ้าข้อมูลบนเครื่องกับบนเซิร์ฟเวอร์ไม่ตรงกัน แอปจะให้คุณเลือกว่าจะเก็บฉบับไหน ไม่เขียนทับเงียบ ๆ',
					'ถ้าคุณใช้เซิร์ฟเวอร์ที่ใครสักคนตั้งไว้ ผู้ดูแลเซิร์ฟเวอร์นั้นเป็นผู้ควบคุมข้อมูลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562',
				] },
				{ heading: 'เว็บไซต์นี้', body: ['ดูรายละเอียดที่หน้า คุกกี้ของเว็บไซต์'] },
				{ heading: 'ติดต่อ', body: [`เปิด issue ที่ ${site.issues} (อย่าใส่ข้อมูลส่วนตัว) ถ้าเป็นเรื่องความปลอดภัย แจ้งแบบส่วนตัวที่ ${site.security}`] },
			],
		},
		license: {
			title: 'สัญญาอนุญาตซอฟต์แวร์',
			intro: 'LunoRX ใช้สัญญาอนุญาต MIT ลิขสิทธิ์ © 2026 EvarinthoSec และผู้ร่วมพัฒนา',
			sections: [
				{ heading: 'MIT ในภาษาง่าย ๆ', body: [
					'คุณใช้ ศึกษา แก้ไข แจกจ่ายต่อ และนำไปใช้ในงานเชิงพาณิชย์ได้ ขอแค่เก็บข้อความลิขสิทธิ์และสัญญาอนุญาตไว้ด้วย โปรแกรมนี้ไม่มีการรับประกันใด ๆ',
					`ซอร์สโค้ดและไฟล์ LICENSE ฉบับเต็ม: ${site.repo}`,
				] },
				{ heading: 'โปรแกรมของคนอื่นที่แอปใช้', body: [
					'innerlight (MIT): ตัวเชื่อมต่อ YouTube ของแอป อยู่ในรีโป innerlight แยกต่างหาก',
					'libmpv (LGPL-2.1 ขึ้นไป หรือ GPL-2.0 ขึ้นไป ขึ้นกับวิธีสร้างแต่ละชุด): ตัวเล่นเสียงที่แอปโหลดมาใช้ และรวมอยู่ในตัวติดตั้ง macOS และ Windows ซอร์สอยู่ที่ https://github.com/mpv-player/mpv',
					'libmpv2 และ libmpv2-sys (LGPL-2.1): ตัวเชื่อมระหว่างภาษา Rust กับ libmpv',
					'ไลบรารี 5 ตัวภายใต้ MPL-2.0: เก็บไฟล์สัญญาไว้ครบ และไม่ได้แก้ไข',
				] },
				{ heading: 'รายการทั้งหมด', body: ['รายชื่อและสัญญาอนุญาตของทุกส่วนประกอบอยู่ในไฟล์ THIRD_PARTY_NOTICES.md ในรีโป เป็นรายการสำรวจ ไม่ใช่คำปรึกษาทางกฎหมาย'] },
			],
		},
		security: {
			title: 'ความปลอดภัย',
			intro: 'ถ้าคุณพบช่องโหว่ กรุณาแจ้งแบบส่วนตัว อย่าเปิด issue หรือ pull request สาธารณะ',
			sections: [
				{ heading: 'วิธีแจ้ง', body: [
					`เปิดแท็บ Security ของรีโป (${site.security}) แล้วเลือก Report a vulnerability เฉพาะผู้ดูแลที่เห็นรายงาน`,
					'บอกส่วนที่ได้รับผลกระทบ เวอร์ชันหรือ commit ที่ทดสอบ ขั้นตอนที่ทำให้เกิดซ้ำได้ และผลกระทบที่คิดว่าเกิดขึ้น',
					'อย่าแนบรหัสล็อกอิน โทเคน หรือข้อมูลผู้ใช้จริง ให้ปิดบังก่อนส่ง',
				] },
				{ heading: 'เวอร์ชันที่ดูแล', body: ['ตอนนี้เป็นรุ่นทดลอง (1.0.0-rc.x) ดูแลเฉพาะ release candidate ล่าสุดและสาขา main'] },
				{ heading: 'หลักที่ใช้', body: [
					'รหัสล็อกอินและโทเคนต้องไม่ปรากฏใน log หรือข้อความที่ส่งระหว่างส่วนต่าง ๆ ของแอป และต้องอยู่ในที่เก็บที่ระบบปกป้อง',
					'สิทธิ์ระดับเครื่องของแอปถูกจำกัด และไม่เปิดให้เนื้อหาจากเว็บภายนอก',
					'หน้าต่างล็อกอิน YouTube เปิดได้เฉพาะหน้าของ Google และ YouTube',
					'ทุกคำสั่งภายในแอปถูกประกาศและตรวจสอบข้อมูลที่รับเข้ามา ข้อผิดพลาดที่แสดงเป็นหมวดหมู่ทั่วไป ไม่มีข้อความดิบหรือรายละเอียดภายใน',
				] },
			],
		},
		cookies: {
			title: 'คุกกี้ของเว็บไซต์',
			intro: 'เว็บไซต์นี้จำข้อมูลในเบราว์เซอร์ของคุณเท่าที่จำเป็นเท่านั้น',
			sections: [
				{ heading: 'สิ่งที่จำไว้', body: ['ค่า "theme" ใน localStorage ใช้จำว่าคุณเลือกธีมสว่างหรือมืด เก็บในเบราว์เซอร์ของคุณเท่านั้น ไม่ถูกส่งไปที่เซิร์ฟเวอร์', 'เว็บไซต์ไม่ใช้คุกกี้โฆษณา ไม่ติดตามข้ามเว็บไซต์ และไม่ใช้เครื่องมือวิเคราะห์'] },
				{ heading: 'ฟอนต์', body: ['ฟอนต์ทั้งหมดโฮสต์บนเว็บไซต์นี้เอง ไม่มีการโหลดจากบริษัทอื่น จึงไม่มีการส่งที่อยู่ IP ของคุณไปที่ผู้ให้บริการฟอนต์'] },
				{ heading: 'การลบ', body: ['ลบได้ทุกเมื่อในการตั้งค่าเบราว์เซอร์ ธีมจะกลับไปตามค่าของระบบ'] },
			],
		},
	},
	en: {
		disclaimer: {
			title: 'Disclaimer and terms of use',
			intro: 'LunoRX is an independent, unofficial open source project. Please read this before you download or use it.',
			sections: [
				{ heading: 'Not connected to other companies', body: [
					'LunoRX and its contributors are not affiliated with, authorized by, or endorsed by Google LLC, YouTube, YouTube Music, Spotify AB or any of their affiliates.',
					'The same goes for the lyrics services the app can use: LRCLIB, LyricsPlus, Netease Cloud Music, QQ Music, Kugou and Boidu.',
				] },
				{ heading: 'Trademarks', body: [
					'"Google", "YouTube", "YouTube Music", "Spotify" and related names and logos are trademarks of their owners.',
					'We use these names only to say which services the app works with. It does not mean the owners endorse us, and we do not intend to infringe anyone\'s trademarks.',
				] },
				{ heading: 'Third-party services', body: [
					'The app connects directly to YouTube Music and uses several unofficial lyrics services. These services have their own terms, and they can change, restrict or stop working without notice.',
					'You must use the app in line with the terms that apply to you, including those of YouTube and Google.',
					'The way the app fetches audio from YouTube and signs in with a Google account was decided by the project owner. YouTube and Google have not approved it. Spotify is not supported.',
				] },
				{ heading: 'Still a test version', body: [
					'LunoRX is in a test phase (1.0.0-rc). The Windows and Linux installers have not been tested on every kind of real machine. The macOS installer is not yet approved by Apple, and the Windows installer has no digital signature, so your system may warn you the first time you open it.',
					'Download only from the project Releases page, and compare the file with SHA256SUMS.txt before installing.',
				] },
				{ heading: 'Limitation of liability', body: [
					'The software is provided "as is", with no warranty of any kind, and you use it at your own risk.',
					'To the extent the law allows, the authors and contributors are not liable for any claim, damage or legal consequence that comes from the software or its use, whether in contract, tort or otherwise. This does not affect rights that the law does not let you give up.',
				] },
				{ heading: 'Copyright of music and lyrics', body: [
					'This app is not a service for sharing audio without permission. Playback follows the rights and policies of each service. If the app cannot do something, it says so on screen.',
					'Songs, cover art and lyrics belong to their copyright owners. Please use them for personal listening.',
				] },
			],
		},
		privacy: {
			title: 'Privacy',
			intro: 'LunoRX is built so your data stays on your computer first. This page summarizes how the app really works, based on the project documents.',
			sections: [
				{ heading: 'What is stored on your computer', body: [
					'Playlists, liked songs, listening history, settings and files kept for offline listening are stored on your computer. On Linux they are in ~/.local/share/io.lunorx.desktop and stay there after you uninstall.',
					'Lyrics files you create with the Lyric Maker tool are plain text files in ~/Documents/LunoRX Lyrics/.',
					'You can delete your listening history from inside the app.',
				] },
				{ heading: 'Login details', body: [
					'Your YouTube login and the sync token are stored in your system password storage (Keychain, Credential Manager or Secret Service).',
					'The app does not write them to a file, put them in logs, send them to a server or show them on screen.',
					'On Linux without GNOME Keyring or KWallet, login does not work. The app does not store them unsafely instead.',
				] },
				{ heading: 'What leaves your computer', body: [
					'YouTube Music: the app searches and plays music by talking to YouTube Music directly, so what that service collects applies.',
					'Lyrics services: the app sends only the song title, artist name, length and album name (when known), or the words you type when you search for lyrics yourself. It never sends your login or account details. You can turn each source off in Settings > Playback & audio.',
					'Sync (optional): if you connect a LUNOR-X server, the app sends your account and playlists. The server does not receive your YouTube login or your searches. You can run your own server, and the app works without one.',
					'Listening stats (optional, off unless you turn it on): if you turn it on and connect a server, the app sends song titles, artist names, track ids, play counts and the time each song was last played, stored in your account on that server. If you leave it off, stats stay on your computer.',
					'Anonymous usage counts (optional, off by default): if you turn it on, the app sends counter names and counts, such as how often the app opened or which kind of error happened, with a random install id. It never sends song titles, artists, searches or account details. The app shows you exactly what the next upload will contain.',
					'Playlist share links: if you create a share link, anyone with the link can see that playlist\'s name, description and songs without signing in. You can revoke the link at any time.',
				] },
				{ heading: 'Your rights', body: [
					'Because most data is on your computer, you can view, back up and delete it yourself. If your computer and the server disagree, the app asks which version to keep. It never overwrites quietly.',
					'If you use a server that someone else runs, that server\'s operator controls the data under Thailand\'s Personal Data Protection Act B.E. 2562 (2019).',
				] },
				{ heading: 'This website', body: ['See the page on website cookies.'] },
				{ heading: 'Contact', body: [`Open an issue at ${site.issues} (do not post personal information). For security matters, report privately at ${site.security}`] },
			],
		},
		license: {
			title: 'Software license',
			intro: 'LunoRX is released under the MIT License. Copyright © 2026 EvarinthoSec and contributors.',
			sections: [
				{ heading: 'MIT in plain words', body: [
					'You may use, study, change, share and sell the software, as long as you keep the copyright notice and license text. There is no warranty.',
					`Source code and the full LICENSE file: ${site.repo}`,
				] },
				{ heading: 'Other people\'s software the app uses', body: [
					'innerlight (MIT): the app\'s YouTube connection, kept in its own innerlight repository.',
					'libmpv (LGPL-2.1 or later, or GPL-2.0 or later, depending on how each build is made): the audio player the app loads, included in the macOS and Windows installers. Source: https://github.com/mpv-player/mpv',
					'libmpv2 and libmpv2-sys (LGPL-2.1): the link between the Rust language and libmpv.',
					'Five libraries under MPL-2.0: their license files are kept and they are not modified.',
				] },
				{ heading: 'Full list', body: ['The names and licenses of every component are in THIRD_PARTY_NOTICES.md in the repository. It is an inventory, not legal advice.'] },
			],
		},
		security: {
			title: 'Security',
			intro: 'If you find a security problem, please report it privately. Do not open a public issue or pull request.',
			sections: [
				{ heading: 'How to report', body: [
					`Open the Security tab of the repository (${site.security}) and choose Report a vulnerability. Only the maintainers can see the report.`,
					'Tell us which part is affected, which version or commit you tested, the steps to repeat the problem, and the impact you expect.',
					'Do not attach real logins, tokens or user data. Hide them first.',
				] },
				{ heading: 'Supported versions', body: ['The app is in a test phase (1.0.0-rc.x). Only the latest release candidate and the main branch are maintained.'] },
				{ heading: 'Principles', body: [
					'Logins and tokens must never appear in logs or in messages passed between parts of the app, and must stay in protected system storage.',
					'The app\'s device-level permissions are limited and never exposed to outside web content.',
					'The YouTube sign-in window can only open Google and YouTube pages.',
					'Every command inside the app is declared and its input is checked. Errors are shown as general categories, with no raw messages or internal details.',
				] },
			],
		},
		cookies: {
			title: 'Website cookies',
			intro: 'This website remembers things in your browser only when it has to.',
			sections: [
				{ heading: 'What it remembers', body: ['A "theme" value in localStorage remembers whether you chose the light or dark theme. It stays in your browser and is not sent to a server.', 'The website uses no advertising cookies, no cross-site tracking and no analytics tools.'] },
				{ heading: 'Fonts', body: ['All fonts are hosted on this website itself. Nothing is loaded from other companies, so your IP address is not sent to a font provider.'] },
				{ heading: 'Deleting it', body: ['You can delete it at any time in your browser settings. The theme then follows your system setting.'] },
			],
		},
	},
};
