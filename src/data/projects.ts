import digiPayroll from '../assets/image/portfolio/bni/digi-payroll/digipayroll.jpg';
import digiPayroll1 from '../assets/image/portfolio/bni/digi-payroll/digipayroll-detail.jpg';
import digiPayroll2 from '../assets/image/portfolio/bni/digi-payroll/digipayroll-detail2.jpg';
import digiPayroll3 from '../assets/image/portfolio/bni/digi-payroll/digipayroll-detail3.jpg';

import digimap from '../assets/image/portfolio/bni/digimap/digimap.jpg';
import digimap1 from '../assets/image/portfolio/bni/digimap/digimap-detail.jpg';
import digimap2 from '../assets/image/portfolio/bni/digimap/digimap-detail2.jpg';
import digimap3 from '../assets/image/portfolio/bni/digimap/digimap-detail3.jpg';

import digimudik from '../assets/image/portfolio/bni/digimudik/digimudik.jpg';
import digimudik1 from '../assets/image/portfolio/bni/digimudik/digimudik-detail.jpg';
import digimudik2 from '../assets/image/portfolio/bni/digimudik/digimudik-detail2.jpg';
import digimudik3 from '../assets/image/portfolio/bni/digimudik/digimudik-detail3.jpg';

import eAbsensi from '../assets/image/portfolio/bni/e-absensi/eabsensi.jpg';
import eAbsensi1 from '../assets/image/portfolio/bni/e-absensi/eabsensi-detail.jpg';
import eAbsensi2 from '../assets/image/portfolio/bni/e-absensi/eabsensi-detail2.jpg';
import eAbsensi3 from '../assets/image/portfolio/bni/e-absensi/eabsensi-detail3.jpg';

import myOffice from '../assets/image/portfolio/bni/my-office/myOffice.jpg';
import myOffice1 from '../assets/image/portfolio/bni/my-office/my-office-detail.jpg';
import myOffice2 from '../assets/image/portfolio/bni/my-office/my-office-detail2.jpg';
import myOffice3 from '../assets/image/portfolio/bni/my-office/my-office-detail3.jpg';

import merdekaSafety from '../assets/image/portfolio/merdeka/merdeka-safety/merdeka-safety.jpg';
import merdekaSafety1 from '../assets/image/portfolio/merdeka/merdeka-safety/merdeka-safety-detail.jpg';
import merdekaSafety2 from '../assets/image/portfolio/merdeka/merdeka-safety/merdeka-safety-detail2.jpg';
import merdekaSafety3 from '../assets/image/portfolio/merdeka/merdeka-safety/merdeka-safety-detail3.jpg';

import difaCare1 from '../assets/image/portfolio/difacare/1.png';
import difaCare2 from '../assets/image/portfolio/difacare/2.png';
import difaCare3 from '../assets/image/portfolio/difacare/3.png';
import difaCare4 from '../assets/image/portfolio/difacare/4.png';
import difaCare5 from '../assets/image/portfolio/difacare/5.png';
import difaCare6 from '../assets/image/portfolio/difacare/6.png';

import tukangkuV1_1 from '../assets/image/portfolio/tukangku/v1/tukangku-1.png';
import tukangkuV1_2 from '../assets/image/portfolio/tukangku/v1/tukangku-2.png';
import tukangkuV1_3 from '../assets/image/portfolio/tukangku/v1/tukangku-3.png';
import tukangkuV1_4 from '../assets/image/portfolio/tukangku/v1/tukangku-4.png';
import tukangkuV1_5 from '../assets/image/portfolio/tukangku/v1/tukangku-5.png';
import tukangkuV1_6 from '../assets/image/portfolio/tukangku/v1/tukangku-6.png';
import tukangkuV1_7 from '../assets/image/portfolio/tukangku/v1/tukangku-7.png';
import tukangkuV1_8 from '../assets/image/portfolio/tukangku/v1/tukangku-8.png';

import tukangkuV2_1 from '../assets/image/portfolio/tukangku/v2/1.png';
import tukangkuV2_2 from '../assets/image/portfolio/tukangku/v2/2.png';
import tukangkuV2_3 from '../assets/image/portfolio/tukangku/v2/3.png';
import tukangkuV2_4 from '../assets/image/portfolio/tukangku/v2/4.png';
import tukangkuV2_5 from '../assets/image/portfolio/tukangku/v2/5.png';
import tukangkuV2_6 from '../assets/image/portfolio/tukangku/v2/6.png';
import tukangkuV2_7 from '../assets/image/portfolio/tukangku/v2/7.png';
import tukangkuV2_8 from '../assets/image/portfolio/tukangku/v2/8.png';

import senjaCare1 from '../assets/image/portfolio/senjacare/img-senjacare-1.png';
import senjaCare2 from '../assets/image/portfolio/senjacare/img-senjacare-2.png';
import senjaCare3 from '../assets/image/portfolio/senjacare/img-senjacare-3.png';
import senjaCare4 from '../assets/image/portfolio/senjacare/img-senjacare-4.png';
import senjaCare5 from '../assets/image/portfolio/senjacare/img-senjacare-5.png';
import senjaCare6 from '../assets/image/portfolio/senjacare/img-senjacare-6.png';

// Keep unused imports for future use
export const unusedAssets = {
	difaCare: [difaCare1, difaCare2, difaCare3, difaCare4, difaCare5, difaCare6],
	tukangkuV1: [tukangkuV1_1, tukangkuV1_2, tukangkuV1_3, tukangkuV1_4, tukangkuV1_5, tukangkuV1_6, tukangkuV1_7, tukangkuV1_8],
	tukangkuV2: [tukangkuV2_1, tukangkuV2_2, tukangkuV2_3, tukangkuV2_4, tukangkuV2_5, tukangkuV2_6, tukangkuV2_7, tukangkuV2_8],
	senjaCare: [senjaCare1, senjaCare2, senjaCare3, senjaCare4, senjaCare5, senjaCare6],
};

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
			"An integrated ecosystem of three applications (EIS, Admin, JCS) for end-to-end invoice processing. Features dynamic approval workflows, barcode scanning, vendor management, and JCS tracking. Includes a unique 'Incognito' mode for seamless Vendor POV simulation.",
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x400/1a1a1a/ffffff?text=SAKA EIS',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=SAKA Admin',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=SAKA JCS',
		],
	},
	{
		id: 2,
		title: 'SAKA Vessel Tracker',
		tags: ['React', 'Next JS', 'Tailwind', 'Ant Design', 'Leaflet'],
		description:
			'A comprehensive maritime logistics dashboard for monitoring vessel movements, fuel consumption, and pipeline infrastructure. Features real-time tracking and analytics tailored for Saka Energi operations.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x800/1a1a1a/ffffff?text=VesselTracker',
			'https://placehold.co/600x800/2a2a2a/ffffff?text=AdminVessel',
			'https://placehold.co/600x800/3a3a3a/ffffff?text=ChartPerformance',
		],
	},
	{
		id: 3,
		title: 'Tukangku.co',
		tags: ['React', 'Next JS', 'Tailwind', 'Ant Design'],
		description:
			'The initial version of the platform focused exclusively on connecting homeowners with verified professional builders (Tukang). It established the core mission of simplifying renovations by providing reliable, skilled manpower, laying the groundwork for the comprehensive ecosystem in V2.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Tukangku+Home',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Service+List',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Order+Flow',
		],
	},
	{
		id: 4,
		title: 'Tukangku.co v2',
		tags: ['React', 'Vite', 'Tailwind', 'Ant Design'],
		description:
			"An integrated 'One Stop Solution' construction ecosystem (Tukangku.co & TokoMandor) simplifying home building and renovation. Connects homeowners with certified professionals and curated materials. V2 features include seamless WhatsApp consultation, a project portfolio showcase, material catalog, and educational resources for a transparent, hassle-free experience.",
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Tukangku+Home',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Consultation',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Material+Catalog',
		],
	},
	{
		id: 5,
		title: 'Senja Care App',
		tags: ['React Native', 'Figma', 'UI/UX', 'Native wind', 'Expo'],
		description:
			'A high-fidelity UI/UX implementation for a caregiver booking platform, translating Figma mockups into responsive React Native layouts. Features dual interfaces for Users and Partners (Mitra), covering booking flows, chat/video call simulation, and dashboard management.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x700/1a1a1a/ffffff?text=SenjaCare',
			'https://placehold.co/600x700/2a2a2a/ffffff?text=SenjaCarePartner',
			'https://placehold.co/600x700/3a3a3a/ffffff?text=SenjaCareChat',
		],
	},
	{
		id: 6,
		title: 'DifaCare',
		tags: ['React', 'Vite', 'Tailwind', 'Ant Design'],
		description:
			"A holistic digital ecosystem empowering families with Special Needs Children (ABK). Integrates professional consultation (psychologists, therapists), parental mental health support, a community forum, and educational resources. Acts as a comprehensive 'companion' platform addressing medical, psychological, and social challenges.",
		links: {
			github: '#',
			demo: '#',
		},
		images: [
			'https://placehold.co/600x400/1a1a1a/ffffff?text=DifaCare+Dashboard',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Consultation+Flow',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Community+Forum',
		],
	},
	{
		id: 7,
		title: 'BNI Digi Payroll',
		tags: ['React', 'Frontend', 'Enterprise'],
		description: 'A payroll management system designed for BNI to streamline salary processing and reporting.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [digiPayroll, digiPayroll1, digiPayroll2, digiPayroll3],
	},
	{
		id: 8,
		title: 'BNI Digimap',
		tags: ['React', 'Mapping', 'Visualization'],
		description: 'An interactive mapping solution for BNI, providing geospatial data visualization and analysis.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [digimap, digimap1, digimap2, digimap3],
	},
	{
		id: 9,
		title: 'BNI Digimudik',
		tags: ['React', 'Tracking', 'Event'],
		description: 'A platform for managing and tracking the annual "Mudik" event, facilitating logistics and participant management.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [digimudik, digimudik1, digimudik2, digimudik3],
	},
	{
		id: 10,
		title: 'BNI E-Absensi',
		tags: ['React', 'HR', 'Management'],
		description: 'An electronic attendance system for BNI employees, featuring real-time tracking and reporting capabilities.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [eAbsensi, eAbsensi1, eAbsensi2, eAbsensi3],
	},
	{
		id: 11,
		title: 'BNI My Office',
		tags: ['React', 'Office Management', 'Internal Tools'],
		description: 'An internal office management suite for BNI, optimizing daily operations and resource allocation.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [myOffice, myOffice1, myOffice2, myOffice3],
	},
	{
		id: 12,
		title: 'Merdeka Safety',
		tags: ['React', 'Safety', 'Industrial'],
		description: 'A safety management application for Merdeka Copper Gold, focusing on incident reporting and compliance tracking.',
		links: {
			github: '#',
			demo: '#',
		},
		images: [merdekaSafety, merdekaSafety1, merdekaSafety2, merdekaSafety3],
	},
	// {
	// 	id: 13,
	// 	title: 'Minerva Exploration',
	// 	tags: ['React', 'Mining', 'Dashboard'],
	// 	description: 'An exploration data dashboard for Petrosea, visualizing mining and geological data for strategic decision-making.',
	// 	links: {
	// 		github: '#',
	// 		demo: '#',
	// 	},
	// 	images: [minex1, minex2, minex3],
	// },
];
