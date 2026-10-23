import type { Localized } from '../../i18n';

export const content: Localized<{ kicker: string; title: string; body: string; read: string; ask: string; issues: string; back: string; updated: string }> = {
	th: { kicker: 'ข้อกฎหมาย', title: 'ข้อกฎหมายและเงื่อนไข', body: 'เราสรุปเอกสารของโปรเจกต์เป็นภาษาไทยที่อ่านง่าย ถ้าอยากอ่านฉบับเต็มของสัญญาอนุญาต MIT ดูได้ในรีโปบน GitHub', read: 'อ่านฉบับเต็ม', ask: 'มีคำถามหรืออยากแจ้งปัญหา:', issues: 'GitHub Issues', back: '← กลับหน้าแรก', updated: 'ปรับปรุงล่าสุด' },
	en: { kicker: 'Legal', title: 'Legal information and terms', body: 'We summarize the project documents in plain English. For the full text of the MIT license, see the repository on GitHub.', read: 'Read the full page', ask: 'Questions or problems to report:', issues: 'GitHub Issues', back: '← Back to home', updated: 'Last updated' },
};
