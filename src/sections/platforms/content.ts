import type { Localized } from '../../i18n';

/** `code` keys are resolved to real commands in Platforms.astro. */
export type Step = { title: string; body: string; code?: 'install' | 'deb' | 'remove' | 'xattr'; releases?: boolean };
export type OS = { id: 'mac' | 'windows' | 'linux'; name: string; intro: string; steps: Step[]; note: string };

export const content: Localized<{
	kicker: string; title: string; intro: string; os: OS[];
	copy: string; copied: string; releases: string; checkTitle: string; checkBody: string; guide: string; tabsLabel: string;
}> = {
	th: {
		kicker: 'ดาวน์โหลดและติดตั้ง',
		title: 'ติดตั้งตามระบบที่คุณใช้',
		intro: 'เลือกระบบของคุณ แล้วทำตามทีละขั้น ตอนนี้แอปยังเป็นรุ่นทดลอง ทุกขั้นตอนเลยเขียนตามที่ผ่านการลองใช้จริง',
		tabsLabel: 'เลือกระบบปฏิบัติการ',
		os: [
			{
				id: 'mac', name: 'macOS', intro: 'ใช้ได้ทั้ง Mac ชิป Apple และ Intel',
				steps: [
					{ title: 'ดาวน์โหลดไฟล์ .dmg', body: 'เข้าหน้า Releases แล้วเลือกไฟล์ .dmg ให้ตรงกับเครื่องของคุณ (Apple หรือ Intel)', releases: true },
					{ title: 'ลากแอปไปใส่โฟลเดอร์ Applications', body: 'เปิดไฟล์ .dmg ที่ได้มา แล้วลาก LunoRX ไปวางในโฟลเดอร์ Applications' },
					{ title: 'เปิดแอปครั้งแรก', body: 'Mac จะขึ้นว่า "ตรวจสอบไม่ได้ว่า LunoRX ปลอดภัย" เพราะแอปยังไม่ผ่านการรับรองของ Apple ไม่ได้แปลว่าแอปเสีย ให้กด Done (อย่ากด Move to Trash)' },
					{ title: 'อนุญาตให้เปิด', body: 'ไปที่ ตั้งค่าระบบ > ความเป็นส่วนตัวและความปลอดภัย เลื่อนลงไปที่ส่วน Security แล้วกด Open Anyway จากนั้นใส่รหัสผ่านหรือใช้ Touch ID ทำครั้งเดียวก็พอ ถ้ายังไม่เห็นปุ่ม ให้ลองเปิดแอปอีกรอบก่อน' },
					{ title: 'อีกวิธี: ใช้คำสั่งเดียว', body: 'ถ้าไม่อยากกดตามขั้นตอนข้างบน เปิดแอป Terminal แล้ววางคำสั่งนี้ จากนั้นเปิดแอปตามปกติ', code: 'xattr' },
				],
				note: 'ตัวเล่นเสียงอยู่ในแอปแล้ว ถ้าเล่นเสียงไม่ได้ ให้ลองรัน brew install mpv ตัวติดตั้งนี้ยังไม่เคยทดสอบบน Mac เครื่องใหม่ ๆ ถ้าเจอปัญหาแจ้งเราได้',
			},
			{
				id: 'windows', name: 'Windows', intro: 'ใช้ได้กับคอมพิวเตอร์ Windows 64 บิต',
				steps: [
					{ title: 'ดาวน์โหลดตัวติดตั้ง', body: 'เข้าหน้า Releases แล้วเลือกไฟล์ที่ลงท้ายด้วย -setup.exe', releases: true },
					{ title: 'เปิดตัวติดตั้ง', body: 'Windows อาจขึ้นว่า "Windows protected your PC" เพราะตัวติดตั้งยังไม่มีลายเซ็นดิจิทัล ไม่ได้แปลว่าไฟล์เสีย ให้กด More info แล้วกด Run anyway' },
					{ title: 'ทำตามหน้าจอ แล้วเปิดแอป', body: 'กดไปตามขั้นตอนของตัวติดตั้งจนเสร็จ แล้วเปิด LunoRX ได้เลย ตัวเล่นเสียงติดมากับแอปแล้ว' },
				],
				note: 'รหัสล็อกอินจะถูกเก็บใน Credential Manager ของ Windows ตัวติดตั้งนี้ยังไม่ได้ทดสอบบนเครื่อง Windows จริงครบทุกแบบ ถ้าเจอปัญหาแจ้งเราได้',
			},
			{
				id: 'linux', name: 'Linux', intro: 'ใช้ได้กับเครื่อง x86_64 ที่มี glibc 2.39 ขึ้นไป เช่น Ubuntu 24.04, Debian 13, Fedora 40 และ Arch',
				steps: [
					{ title: 'วางคำสั่งนี้ใน Terminal', body: 'คำสั่งนี้ดาวน์โหลดและติดตั้งแอปให้เฉพาะผู้ใช้ของคุณ ไม่ต้องใช้สิทธิ์ root และจะตรวจไฟล์ก่อนติดตั้ง ถ้าไฟล์ไม่ตรงก็จะไม่ติดตั้ง', code: 'install' },
					{ title: 'เปิดแอป', body: 'เปิด LunoRX จากเมนูแอปของเครื่อง หรือพิมพ์ lunorx ใน Terminal' },
					{ title: 'ถ้าใช้ Debian หรือ Ubuntu และอยากได้แพ็กเกจ .deb', body: 'ใช้คำสั่งนี้แทนขั้นแรก', code: 'deb' },
					{ title: 'ถ้าอยากถอนการติดตั้ง', body: 'รันคำสั่งนี้ ข้อมูลเพลย์ลิสต์และการตั้งค่าของคุณจะยังอยู่', code: 'remove' },
				],
				note: 'ต้องมี GNOME Keyring หรือ KWallet เปิดอยู่ เพื่อเก็บรหัสล็อกอิน ตัวติดตั้งนี้ลองแล้วบน Arch Linux ส่วนระบบอื่นยังไม่ได้ลองจริง',
			},
		],
		copy: 'คัดลอกคำสั่ง', copied: 'คัดลอกแล้ว', releases: 'ไปที่หน้า Releases',
		checkTitle: 'ตรวจไฟล์ก่อนติดตั้งทุกครั้ง',
		checkBody: 'ดาวน์โหลดจากหน้า Releases ของโปรเจกต์เท่านั้น แล้วเทียบไฟล์กับ SHA256SUMS.txt ในหน้าเดียวกัน',
		guide: 'คู่มือติดตั้งและแก้ปัญหาฉบับเต็ม',
	},
	en: {
		kicker: 'Download and install',
		title: 'Install it on your system',
		intro: 'Pick your system and follow the steps. The app is still a test version, so every step is written from what we have actually tried.',
		tabsLabel: 'Choose your operating system',
		os: [
			{
				id: 'mac', name: 'macOS', intro: 'Works on Macs with Apple silicon or Intel chips',
				steps: [
					{ title: 'Download the .dmg file', body: 'Go to the Releases page and pick the .dmg that matches your Mac (Apple or Intel).', releases: true },
					{ title: 'Drag the app into Applications', body: 'Open the .dmg you downloaded and drag LunoRX into your Applications folder.' },
					{ title: 'Open the app for the first time', body: 'Your Mac will say it cannot verify that LunoRX is free of malware. That is because the app is not yet approved by Apple. It does not mean the app is damaged. Click Done (do not click Move to Trash).' },
					{ title: 'Allow it to open', body: 'Go to System Settings > Privacy & Security, scroll to the Security section and click Open Anyway. Then enter your password or use Touch ID. You only need to do this once. If you do not see the button, try opening the app once more first.' },
					{ title: 'Another way: one command', body: 'If you would rather skip the steps above, open the Terminal app, paste this command, then open the app as usual.', code: 'xattr' },
				],
				note: 'The audio player is already inside the app. If there is no sound, try running brew install mpv. This installer has not been tested on a fresh Mac yet, so tell us if you run into a problem.',
			},
			{
				id: 'windows', name: 'Windows', intro: 'Works on 64-bit Windows computers',
				steps: [
					{ title: 'Download the installer', body: 'Go to the Releases page and pick the file that ends in -setup.exe.', releases: true },
					{ title: 'Open the installer', body: 'Windows may say "Windows protected your PC" because the installer has no digital signature yet. It does not mean the file is damaged. Click More info, then Run anyway.' },
					{ title: 'Follow the screen, then open the app', body: 'Click through the installer until it finishes, then open LunoRX. The audio player comes with the app.' },
				],
				note: 'Your login is stored in Windows Credential Manager. This installer has not been tested on every kind of real Windows PC yet, so tell us if you run into a problem.',
			},
			{
				id: 'linux', name: 'Linux', intro: 'Works on x86_64 computers with glibc 2.39 or newer, such as Ubuntu 24.04, Debian 13, Fedora 40 and Arch',
				steps: [
					{ title: 'Paste this command into a terminal', body: 'It downloads the app and installs it for your user only. No root access is needed, and it checks the file first. If the file does not match, nothing is installed.', code: 'install' },
					{ title: 'Open the app', body: 'Open LunoRX from your app menu, or type lunorx in a terminal.' },
					{ title: 'On Debian or Ubuntu and want a .deb package?', body: 'Use this command instead of the first step.', code: 'deb' },
					{ title: 'To uninstall', body: 'Run this command. Your playlists and settings are kept.', code: 'remove' },
				],
				note: 'GNOME Keyring or KWallet must be running so your login can be stored. This installer has been tried on Arch Linux only; other systems are untested.',
			},
		],
		copy: 'Copy the command', copied: 'Copied', releases: 'Go to Releases',
		checkTitle: 'Always check the file before installing',
		checkBody: 'Download only from the project Releases page, then compare the file with SHA256SUMS.txt on the same page.',
		guide: 'Full install guide and troubleshooting',
	},
};
