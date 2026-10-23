export type Part = { d: string; soft?: boolean; w?: number };

// Line illustrations, one per feature. `soft` paths use the muted tone, the rest the foreground.
export const art: Part[][] = [
	[{ d: 'M48 14a34 34 0 1 0 0.01 0' }, { d: 'M48 6A42 42 0 0 1 90 48', soft: true }, { d: 'M41 35l21 13-21 13z' }],
	[{ d: 'M18 20h60a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H18a5 5 0 0 1-5-5v-5a5 5 0 0 1 5-5z' }, { d: 'M26 43h44a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H26a5 5 0 0 1-5-5v-5a5 5 0 0 1 5-5z', soft: true }, { d: 'M34 66h28a5 5 0 0 1 5 5v5a5 5 0 0 1-5 5H34a5 5 0 0 1-5-5v-5a5 5 0 0 1 5-5z', soft: true }],
	[{ d: 'M14 24h38', soft: true }, { d: 'M14 42h68', w: 4 }, { d: 'M14 60h54', soft: true }, { d: 'M14 78h26', soft: true }],
	[{ d: 'M16 22h64a6 6 0 0 1 6 6v36a6 6 0 0 1-6 6H16a6 6 0 0 1-6-6V28a6 6 0 0 1 6-6z' }, { d: 'M4 82h88', soft: true }, { d: 'M34 46l9 9 19-19' }],
	[{ d: 'M26 14h44a14 14 0 0 1 14 14v40a14 14 0 0 1-14 14H26A14 14 0 0 1 12 68V28a14 14 0 0 1 14-14z' }, { d: 'M38 34v28' }, { d: 'M38 48l22-14', soft: true }, { d: 'M44 46l16 16', soft: true }],
	[{ d: 'M22 46h52a6 6 0 0 1 6 6v26a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6V52a6 6 0 0 1 6-6z' }, { d: 'M30 46V34a18 18 0 0 1 36 0v12', soft: true }, { d: 'M48 60v10' }],
];
