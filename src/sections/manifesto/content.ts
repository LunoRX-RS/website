import type { Localized } from '../../i18n';

export const content: Localized<{ label: string; text: string }> = {
	th: {
		label: 'สิ่งที่เรายึดถือ',
		text: 'เราจะบอกว่าแอปทำอะไรได้ ก็ต่อเมื่อลองแล้วใช้ได้จริง ถ้าอะไรยังทำไม่ได้ หน้าจอจะบอกตรง ๆ ไม่แกล้งทำเป็นใช้ได้ และเพลงจะนับว่ากำลังเล่น ก็ต่อเมื่อตัวเล่นเสียงยืนยันแล้ว',
	},
	en: {
		label: 'What we hold to',
		text: 'We only say the app can do something after we have tried it and it works. If something does not work yet, the screen tells you plainly. A song counts as playing only once the player confirms it.',
	},
};
