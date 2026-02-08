export interface Project {
	id: number;
	title: string;
	tags: string[];
	description: string;
	links: {
		github: string;
		demo: string;
	};
	images: string[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: 'Saka EIS - Electronic Invoice SAKA',
		tags: ['React', 'Next JS', 'Tailwind', 'Ant Design'],
		description:
			'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x400/1a1a1a/ffffff?text=E-Commerce',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Analytics+View',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Inventory',
		],
	},
	{
		id: 2,
		title: 'SAKA Vessel Tracker',
		tags: ['React', 'Next JS', 'Tailwind', 'Ant Design', 'Leaflet'],
		description: 'A collaborative task management tool with drag-and-drop kanban boards, team assignments, and progress tracking.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x800/1a1a1a/ffffff?text=Task+App',
			'https://placehold.co/600x800/2a2a2a/ffffff?text=Kanban+Board',
			'https://placehold.co/600x800/3a3a3a/ffffff?text=Team+View',
		],
	},
	{
		id: 3,
		title: 'Tukangku.co',
		tags: ['React', 'Next JS', 'Tailwind', 'Ant Design'],
		description:
			'A beautiful weather application providing detailed forecasts, air quality index, and interactive maps using open weather APIs.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x600/1a1a1a/ffffff?text=Weather+App',
			'https://placehold.co/600x600/2a2a2a/ffffff?text=Forecast+Details',
			'https://placehold.co/600x600/3a3a3a/ffffff?text=Map+View',
		],
	},
	{
		id: 4,
		title: 'Tukangku.co v2',
		tags: ['React', 'Vite', 'Tailwind', 'Ant Design'],
		description: 'A responsive social media feed clone with infinite scrolling, image optimization, and real-time interactions.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x500/1a1a1a/ffffff?text=Social+Feed',
			'https://placehold.co/600x500/2a2a2a/ffffff?text=Post+Detail',
			'https://placehold.co/600x500/3a3a3a/ffffff?text=User+Profile',
		],
	},
	{
		id: 5,
		title: 'Senja Care App',
		tags: ['React Native', 'Native wind', 'Firebase', 'Expo', 'IOS', 'Android'],
		description: 'A cryptocurrency tracking application with live price updates, historical charts, and portfolio management.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x700/1a1a1a/ffffff?text=Senja+Care+1',
			'https://placehold.co/600x700/2a2a2a/ffffff?text=Senja+Care+2',
			'https://placehold.co/600x700/3a3a3a/ffffff?text=Senja+Care+3',
		],
	},
	{
		id: 6,
		title: 'DifaCare',
		tags: ['React', 'Vite', 'Tailwind', 'Ant Design'],
		description: 'A cryptocurrency tracking application with live price updates, historical charts, and portfolio management.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x450/1a1a1a/ffffff?text=Crypto+Tracker',
			'https://placehold.co/600x450/2a2a2a/ffffff?text=Price+Alerts',
			'https://placehold.co/600x450/3a3a3a/ffffff?text=Settings',
		],
	},
];
