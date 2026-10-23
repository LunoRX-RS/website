import type { Localized } from '../../i18n';

export const content: Localized<{
	home: string; menuLabel: string; download: string; theme: string;
	openMenu: string; menu: string; mobileMenu: string; downloadApp: string; switchLabel: string; switchTo: string;
}> = {
	th: { home: 'LunoRX หน้าแรก', menuLabel: 'เมนูหลัก', download: 'ดาวน์โหลด', theme: 'สลับธีมสว่าง/มืด', openMenu: 'เปิดเมนู', menu: 'เมนู', mobileMenu: 'เมนูมือถือ', downloadApp: 'ดาวน์โหลดแอป', switchLabel: 'EN', switchTo: 'Switch to English' },
	en: { home: 'LunoRX home', menuLabel: 'Main menu', download: 'Download', theme: 'Toggle light/dark theme', openMenu: 'Open menu', menu: 'Menu', mobileMenu: 'Mobile menu', downloadApp: 'Download the app', switchLabel: 'ไทย', switchTo: 'เปลี่ยนเป็นภาษาไทย' },
};
