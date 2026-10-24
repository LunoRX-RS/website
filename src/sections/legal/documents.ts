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
					'บริการเนื้อเพลง: แอปส่งเฉพาะชื่อเพลง ชื่อศิลปิน ความยาวเพลง และชื่ออัลบั้ม (ถ้ามี) หรือคำที่คุณพิมพ์ค้นหาเนื้อเพลงเอง ไม่ส่งรหัสล็อกอินหรือข้อมูลบัญชี คุณปิดแต่ละแหล่งได้ที่ ตั้งค่า > เนื้อเพลง',
					'การซิงก์ (ไม่บังคับ): ถ้าคุณเชื่อมต่อเซิร์ฟเวอร์ LUNOR-X แอปจะส่งแค่บัญชีและเพลย์ลิสต์ เซิร์ฟเวอร์ไม่รับรหัสล็อกอิน YouTube หรือคำค้นหา คุณตั้งเซิร์ฟเวอร์เองได้ และแอปใช้งานได้โดยไม่ต้องมีเซิร์ฟเวอร์',
					'สถิติการฟัง (ไม่บังคับ ต้องเปิดเอง): ถ้าเปิดและเชื่อมต่อเซิร์ฟเวอร์ แอปจะส่งชื่อเพลง ชื่อศิลปิน รหัสเพลง จำนวนครั้งที่เล่น และเวลาที่เล่นล่าสุด ไปเก็บในบัญชีของคุณบนเซิร์ฟเวอร์ ถ้าไม่เปิด สถิติจะอยู่บนเครื่องเท่านั้น',
					'ข้อมูลการใช้งานแบบไม่ระบุตัวตน (ไม่บังคับ ปิดไว้ตั้งแต่แรก): ถ้าเปิด แอปจะส่งชื่อตัวนับและจำนวนครั้ง เช่น เปิดแอปกี่ครั้ง หรือเจอข้อผิดพลาดประเภทไหน พร้อมรหัสเครื่องแบบสุ่ม ไม่มีชื่อเพลง ศิลปิน คำค้นหา หรือข้อมูลบัญชี คุณดูได้ในแอปว่ารอบถัดไปจะส่งอะไร',
					'ลิงก์แชร์เพลย์ลิสต์: ถ้าคุณสร้างลิงก์แชร์ ใครที่มีลิงก์จะเห็นชื่อ คำอธิบาย และรายชื่อเพลงในเพลย์ลิสต์นั้นได้ โดยไม่ต้องล็อกอิน เพลย์ลิสต์หนึ่งมีลิงก์ที่ใช้งานได้หนึ่งลิงก์ เซิร์ฟเวอร์เก็บลิงก์นั้นไว้เพื่อให้เจ้าของเห็นลิงก์เดิมได้บนทุกเครื่อง ผู้ที่ได้สำเนาฐานข้อมูลของเซิร์ฟเวอร์จึงเปิดเพลย์ลิสต์ที่กำลังแชร์อยู่ได้ (อ่านอย่างเดียว) คุณยกเลิกลิงก์ได้ทุกเมื่อ',
					'การตรวจว่าเป็นคนจริง: ตอนสมัครและเข้าสู่ระบบบัญชี LunoRX เซิร์ฟเวอร์ใช้ Cloudflare Turnstile หน้าตรวจนี้โหลดจากเซิร์ฟเวอร์ LunoRX และ Cloudflare จะเห็นที่อยู่ IP และข้อมูลเบราว์เซอร์ของคุณตามนโยบายของ Cloudflare รหัสผ่านของคุณไม่ถูกส่งไปที่ Cloudflare',
				] },
				{ heading: 'สิทธิของคุณ', body: [
					'เพราะข้อมูลส่วนใหญ่อยู่บนเครื่องคุณ คุณดู สำรอง และลบได้เอง ถ้าข้อมูลบนเครื่องกับบนเซิร์ฟเวอร์ไม่ตรงกัน แอปจะให้คุณเลือกว่าจะเก็บฉบับไหน ไม่เขียนทับเงียบ ๆ',
					'ถ้าคุณใช้เซิร์ฟเวอร์ที่ใครสักคนตั้งไว้ ผู้ดูแลเซิร์ฟเวอร์นั้นเป็นผู้ควบคุมข้อมูลตามพระราชบัญญัติคุ้มครองข้อมูลส่วนบุคคล พ.ศ. 2562',
				] },
				{ heading: 'เว็บไซต์นี้', body: ['ดูรายละเอียดที่หน้า คุกกี้ของเว็บไซต์'] },
				{ heading: 'ติดต่อ', body: [`เปิด issue ที่ ${site.issues} (อย่าใส่ข้อมูลส่วนตัว) ถ้าเป็นเรื่องความปลอดภัย แจ้งแบบส่วนตัวที่ ${site.security}`] },
			],
		},
		terms: {
			title: 'ข้อกำหนดการใช้งาน',
			intro: 'ข้อกำหนดนี้ใช้กับแอป LunoRX และบัญชี LunoRX ที่ใช้ซิงก์เพลย์ลิสต์ การดาวน์โหลดหรือใช้งานถือว่าคุณยอมรับข้อกำหนดนี้ ถ้าไม่ยอมรับ โปรดอย่าใช้',
			sections: [
				{ heading: 'ซอฟต์แวร์และสัญญาอนุญาต', body: [
					'LunoRX เป็นซอฟต์แวร์เปิดซอร์สภายใต้สัญญาอนุญาต MIT คุณใช้ แก้ไข และแจกจ่ายต่อได้ตามสัญญานั้น ดูรายละเอียดที่หน้า สัญญาอนุญาตซอฟต์แวร์',
					'แอปใช้งานได้โดยไม่ต้องมีบัญชี เพลย์ลิสต์และข้อมูลส่วนใหญ่อยู่บนเครื่องของคุณ',
				] },
				{ heading: 'บัญชี LunoRX (ไม่บังคับ)', body: [
					'บัญชีใช้สำหรับซิงก์เพลย์ลิสต์ แชร์ลิงก์ และสำรองสถิติการฟัง ถ้าคุณเลือกใช้ ต้องให้อีเมลที่ใช้งานได้และรหัสผ่านยาว 12 ถึง 128 ไบต์',
					'คุณรับผิดชอบการเก็บรหัสผ่านและทุกอย่างที่ทำภายใต้บัญชีของคุณ ตอนสมัครและตอนเข้าสู่ระบบ เซิร์ฟเวอร์จะตรวจว่าเป็นคนจริงด้วย Cloudflare Turnstile',
					'บัญชีของคุณแยกจากบัญชี YouTube หรือบัญชีผู้ให้บริการเพลงใด ๆ และเซิร์ฟเวอร์ไม่รับรหัสล็อกอินของบริการเหล่านั้น',
					'เซิร์ฟเวอร์รองรับการลบบัญชี แต่ในแอปยังไม่มีปุ่มลบ ถ้าต้องการลบ แจ้งผู้ดูแลเซิร์ฟเวอร์ที่คุณใช้',
				] },
				{ heading: 'เพลย์ลิสต์และลิงก์แชร์', body: [
					'เพลย์ลิสต์ที่คุณสร้างเป็นของคุณ เพลงและภาพปกในนั้นเป็นสิทธิ์ของเจ้าของลิขสิทธิ์ เซิร์ฟเวอร์เก็บเฉพาะรายชื่อเพลงและข้อมูลอ้างอิง ไม่เก็บไฟล์เสียง',
					'ถ้าคุณสร้างลิงก์แชร์ ใครที่มีลิงก์เปิดอ่านเพลย์ลิสต์นั้นได้โดยไม่ต้องล็อกอิน เพลย์ลิสต์หนึ่งมีลิงก์ที่ใช้งานได้หนึ่งลิงก์ สร้างใหม่แล้วลิงก์เดิมจะใช้ไม่ได้ และคุณหยุดแชร์ได้ทุกเมื่อ อย่าแชร์สิ่งที่คุณไม่ต้องการให้คนอื่นเห็น',
					'คุณต้องไม่ใส่ชื่อหรือคำอธิบายที่ผิดกฎหมาย ละเมิดสิทธิผู้อื่น หรือหลอกลวง',
				] },
				{ heading: 'ใช้งานอย่างเหมาะสม', body: [
					'ห้ามใช้แอปหรือเซิร์ฟเวอร์เพื่อทำสิ่งผิดกฎหมาย ละเมิดลิขสิทธิ์ ก่อกวนหรือทำให้บริการล่ม พยายามเข้าถึงบัญชีของผู้อื่น เลี่ยงขีดจำกัดการใช้งานหรือระบบตรวจสอบความเป็นคนจริง หรือดึงข้อมูลจำนวนมากโดยอัตโนมัติ',
					'คุณต้องปฏิบัติตามข้อกำหนดของบริการที่แอปเชื่อมต่อ เช่น YouTube และ Google ตามที่ใช้กับคุณ ดูหน้า ข้อสงวนสิทธิ์และเงื่อนไขการใช้งาน',
				] },
				{ heading: 'ความพร้อมของบริการ', body: [
					'LunoRX ยังเป็นรุ่นทดลอง ฟีเจอร์อาจเปลี่ยนหรือหยุดได้ และเซิร์ฟเวอร์ซิงก์อาจหยุดทำงานหรือเปลี่ยนโดยไม่แจ้งล่วงหน้า ข้อมูลบนเครื่องของคุณไม่ขึ้นกับเซิร์ฟเวอร์',
					'ผู้ดูแลเซิร์ฟเวอร์อาจระงับหรือลบบัญชีที่ฝ่าฝืนข้อกำหนดนี้ แอปเก็บการแก้ไขที่ยังส่งไม่ได้ไว้บนเครื่อง และจะไม่เขียนทับของคุณโดยไม่ถามเมื่อเกิดความขัดแย้ง',
				] },
				{ heading: 'ไม่มีการรับประกันและข้อจำกัดความรับผิด', body: [
					'ซอฟต์แวร์และบริการให้ใช้ "ตามสภาพที่เป็นอยู่" โดยไม่มีการรับประกันใด ๆ เท่าที่กฎหมายอนุญาต ผู้พัฒนาและผู้ร่วมพัฒนาไม่รับผิดต่อความเสียหายที่เกิดจากการใช้งานหรือใช้ไม่ได้ ข้อนี้ไม่กระทบสิทธิที่กฎหมายไม่ให้สละ รายละเอียดอยู่ในหน้า ข้อสงวนสิทธิ์และเงื่อนไขการใช้งาน',
				] },
				{ heading: 'การเปลี่ยนแปลงและกฎหมายที่ใช้', body: [
					'เราอาจแก้ข้อกำหนดนี้ วันที่ปรับปรุงล่าสุดอยู่ด้านบนของหน้า การใช้งานต่อหลังแก้ไขถือว่ายอมรับฉบับใหม่',
					'ข้อกำหนดนี้อยู่ภายใต้กฎหมายไทย',
				] },
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
					'Lyrics services: the app sends only the song title, artist name, length and album name (when known), or the words you type when you search for lyrics yourself. It never sends your login or account details. You can turn each source off in Settings > Lyrics.',
					'Sync (optional): if you connect a LUNOR-X server, the app sends your account and playlists. The server does not receive your YouTube login or your searches. You can run your own server, and the app works without one.',
					'Listening stats (optional, off unless you turn it on): if you turn it on and connect a server, the app sends song titles, artist names, track ids, play counts and the time each song was last played, stored in your account on that server. If you leave it off, stats stay on your computer.',
					'Anonymous usage counts (optional, off by default): if you turn it on, the app sends counter names and counts, such as how often the app opened or which kind of error happened, with a random install id. It never sends song titles, artists, searches or account details. The app shows you exactly what the next upload will contain.',
					'Playlist share links: if you create a share link, anyone with the link can see that playlist\'s name, description and songs without signing in. A playlist has one working link. The server keeps the link so you can see the same one on every device, which means anyone who gets a copy of the server\'s database can open playlists that are currently shared (read only). You can revoke the link at any time.',
					'Human check: when you sign up or sign in to a LunoRX account, the server uses Cloudflare Turnstile. The check page is loaded from the LunoRX server, and Cloudflare sees your IP address and browser details under Cloudflare\'s own policy. Your password is not sent to Cloudflare.',
				] },
				{ heading: 'Your rights', body: [
					'Because most data is on your computer, you can view, back up and delete it yourself. If your computer and the server disagree, the app asks which version to keep. It never overwrites quietly.',
					'If you use a server that someone else runs, that server\'s operator controls the data under Thailand\'s Personal Data Protection Act B.E. 2562 (2019).',
				] },
				{ heading: 'This website', body: ['See the page on website cookies.'] },
				{ heading: 'Contact', body: [`Open an issue at ${site.issues} (do not post personal information). For security matters, report privately at ${site.security}`] },
			],
		},
		terms: {
			title: 'Terms of service',
			intro: 'These terms cover the LunoRX app and the LunoRX account used to sync playlists. By downloading or using it you accept them. If you do not accept them, please do not use it.',
			sections: [
				{ heading: 'The software and its license', body: [
					'LunoRX is open source software under the MIT License. You may use, change and share it under that license. See the Software license page.',
					'The app works without an account. Your playlists and most of your data stay on your computer.',
				] },
				{ heading: 'LunoRX account (optional)', body: [
					'An account is for syncing playlists, share links and backing up listening stats. If you choose to use one, you give a working email address and a password of 12 to 128 bytes.',
					'You are responsible for keeping your password safe and for everything done under your account. When you sign up and sign in, the server checks you are a person with Cloudflare Turnstile.',
					'Your account is separate from your YouTube or any other music service account, and the server never receives those logins.',
					'The server supports deleting an account, but the app has no delete button yet. To delete one, ask the operator of the server you use.',
				] },
				{ heading: 'Playlists and share links', body: [
					'Playlists you make are yours. The songs and cover art in them belong to their copyright owners. The server stores only song lists and references, never audio files.',
					'If you create a share link, anyone who has it can read that playlist without signing in. A playlist has one working link: making a new one stops the old one, and you can stop sharing at any time. Do not share anything you do not want others to see.',
					'Do not put names or descriptions in a playlist that are illegal, infringe other people\'s rights or are misleading.',
				] },
				{ heading: 'Acceptable use', body: [
					'Do not use the app or the server to break the law, infringe copyright, disrupt or overload the service, try to reach other people\'s accounts, get around usage limits or the human check, or collect data in bulk by automated means.',
					'You must follow the terms of the services the app connects to, such as YouTube and Google, as they apply to you. See the Disclaimer and terms of use page.',
				] },
				{ heading: 'Availability', body: [
					'LunoRX is still a test version. Features can change or stop, and a sync server can go down or change without notice. The data on your computer does not depend on the server.',
					'A server operator may suspend or delete an account that breaks these terms. The app keeps edits it cannot send yet on your computer, and it does not overwrite your version without asking when there is a conflict.',
				] },
				{ heading: 'No warranty and limit of liability', body: [
					'The software and service are provided "as is", with no warranty of any kind. To the extent the law allows, the authors and contributors are not liable for damage that comes from using or not being able to use them. This does not affect rights that the law does not let you give up. Details are on the Disclaimer and terms of use page.',
				] },
				{ heading: 'Changes and governing law', body: [
					'We may change these terms. The last update date is at the top of the page. If you keep using LunoRX after a change, you accept the new version.',
					'These terms are governed by the laws of Thailand.',
				] },
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
