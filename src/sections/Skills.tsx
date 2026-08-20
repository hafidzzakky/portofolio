import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { IconType } from 'react-icons';
import {
	FaBolt,
	FaCodeBranch,
	FaCogs,
	FaDatabase,
	FaDocker,
	FaFlask,
	FaGitlab,
	FaPalette,
	FaProjectDiagram,
	FaSearch,
	FaServer,
	FaShieldAlt,
	FaTachometerAlt,
	FaTools,
	FaUniversalAccess,
} from 'react-icons/fa';
import {
	SiCss3,
	SiHtml5,
	SiJavascript,
	SiReact,
	SiRedux,
	SiSass,
	SiTailwindcss,
	SiTypescript,
	SiDaisyui,
	SiMaterialdesign,
	SiWebpack,
	SiSonarqube,
	SiEslint,
	SiLighthouse,
	SiVuedotjs,
	SiNextdotjs,
	SiNuxtdotjs,
	SiIonic,
	SiLeaflet,
	SiStyledcomponents,
	SiFramer,
} from 'react-icons/si';
import { AiOutlineAntDesign } from 'react-icons/ai';
import SectionHeading from '../components/SectionHeading';

const skillCategories = [
	{
		title: 'Frontend',
		blurb: 'Languages and frameworks I write production code in every day.',
		skills: [
			'HTML5',
			'CSS3',
			'SCSS',
			'SASS',
			'JavaScript (ES6+)',
			'TypeScript',
			'React',
			'React Native',
			'Vue',
			'NextJS',
			'NuxtJS',
			'Ionic',
			'Redux Toolkit',
			'TanStack Query',
			'Leaflet',
		],
	},
	{
		title: 'UI Kits & Styling',
		blurb: 'Design-system layers I build on instead of restyling from scratch each project.',
		skills: ['Ant Design', 'Material UI (MUI)', 'DaisyUI', 'Framer Motion', 'Tailwind CSS', 'Styled-Components'],
	},
	{
		title: 'Performance & SEO',
		blurb: 'Keeping render fast and pages discoverable once the app is a SPA.',
		skills: ['Lighthouse', 'SSR/SSG', 'SEO for SPA', 'Server-rendered apps'],
	},
	{
		title: 'Tooling & Build',
		blurb: 'Local dev speed and builds that come out the same every time.',
		skills: ['Vite', 'Webpack', 'Git', 'Docker'],
	},
	{
		title: 'Testing & Accessibility',
		blurb: 'Guardrails so refactors stay safe and interfaces stay usable.',
		skills: ['Jest', 'Accessibility (a11y)'],
	},
	{
		title: 'Architecture & Design',
		blurb: 'How the codebase is organised so it survives more than one team.',
		skills: ['Component-based architecture', 'Reusable UI components', 'Design systems'],
	},
	{
		title: 'CI/CD & Security',
		blurb: 'The automated checks that sit between a merge request and production.',
		skills: ['GitLab CI/CD', 'ESLint', 'SonarQube', 'Aikido Security'],
	},
];

const categoryIconMap: Record<string, IconType> = {
	Frontend: FaCogs,
	'UI Kits & Styling': FaPalette,
	'Performance & SEO': FaTachometerAlt,
	'Tooling & Build': FaTools,
	'Testing & Accessibility': FaUniversalAccess,
	'Architecture & Design': FaProjectDiagram,
	'CI/CD & Security': FaShieldAlt,
};

const skillIconMap: Record<string, { icon: IconType; colorClass: string }> = {
	HTML5: { icon: SiHtml5, colorClass: 'text-[#E44D26]' },
	CSS3: { icon: SiCss3, colorClass: 'text-[#1572B6]' },
	'JavaScript (ES6+)': { icon: SiJavascript, colorClass: 'text-[#F7DF1E]' },
	TypeScript: { icon: SiTypescript, colorClass: 'text-[#3178C6]' },
	React: { icon: SiReact, colorClass: 'text-[#61DAFB]' },
	'React Native': { icon: SiReact, colorClass: 'text-[#61DAFB]' },
	'Redux Toolkit': { icon: SiRedux, colorClass: 'text-[#764ABC]' },
	SCSS: { icon: SiSass, colorClass: 'text-[#CC6699]' },
	SASS: { icon: SiSass, colorClass: 'text-[#CC6699]' },
	'Tailwind CSS': { icon: SiTailwindcss, colorClass: 'text-[#38BDF8]' },
	Vue: { icon: SiVuedotjs, colorClass: 'text-[#42b883]' },
	NextJS: { icon: SiNextdotjs, colorClass: 'text-[#61DAFB]' },
	NuxtJS: { icon: SiNuxtdotjs, colorClass: 'text-[#42b883]' },
	Ionic: { icon: SiIonic, colorClass: 'text-[#3b82f6]' },
	Leaflet: { icon: SiLeaflet, colorClass: 'text-[#42b883]' },
	'TanStack Query': { icon: FaDatabase, colorClass: 'text-[#FF4154]' },
	'Ant Design': { icon: AiOutlineAntDesign, colorClass: 'text-[#3b82f6]' },
	'Material UI (MUI)': { icon: SiMaterialdesign, colorClass: 'text-[#3b82f6]' },
	DaisyUI: { icon: SiDaisyui, colorClass: 'text-[#a855f7]' },
	'Styled-Components': { icon: SiStyledcomponents, colorClass: 'text-[#db7093]' },
	'Framer Motion': { icon: SiFramer, colorClass: 'text-[#a855f7]' },
	Lighthouse: { icon: SiLighthouse, colorClass: 'text-[#22c55e]' },
	'SSR/SSG': { icon: FaServer, colorClass: 'text-[#facc15]' },
	'SEO for SPA': { icon: FaSearch, colorClass: 'text-[#f97316]' },
	'Server-rendered apps': { icon: FaServer, colorClass: 'text-[#64748b]' },
	Jest: { icon: FaFlask, colorClass: 'text-[#ef4444]' },
	'Accessibility (a11y)': { icon: FaUniversalAccess, colorClass: 'text-[#3b82f6]' },
	'Component-based architecture': { icon: FaProjectDiagram, colorClass: 'text-[#22c55e]' },
	'Reusable UI components': { icon: FaProjectDiagram, colorClass: 'text-[#22c55e]' },
	'Design systems': { icon: FaProjectDiagram, colorClass: 'text-[#a855f7]' },
	Vite: { icon: FaBolt, colorClass: 'text-[#f59e0b]' },
	Webpack: { icon: SiWebpack, colorClass: 'text-[#60a5fa]' },
	Git: { icon: FaCodeBranch, colorClass: 'text-[#f97316]' },
	Docker: { icon: FaDocker, colorClass: 'text-[#0ea5e9]' },
	'GitLab CI/CD': { icon: FaGitlab, colorClass: 'text-[#f97316]' },
	ESLint: { icon: SiEslint, colorClass: 'text-[#6366f1]' },
	SonarQube: { icon: SiSonarqube, colorClass: 'text-[#22c55e]' },
	'Aikido Security': { icon: FaShieldAlt, colorClass: 'text-[#facc15]' },
};

const StackExplorer = () => {
	const [active, setActive] = useState(0);
	const current = skillCategories[active];

	return (
		<div className='mt-12'>
			{/* Categories run across the top so the panel below owns the full width.
			    A side rail forced the panel to match a 7-row column and left it half empty. */}
			<div
				role='tablist'
				aria-label='Skill categories'
				className='-mx-4 flex snap-x snap-mandatory gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:overflow-visible md:px-0 md:pb-0 scrollbar-hide'
			>
				{skillCategories.map((category, index) => {
					const Icon = categoryIconMap[category.title] ?? FaCogs;
					const isActive = index === active;
					return (
						<button
							key={category.title}
							role='tab'
							type='button'
							aria-selected={isActive}
							onClick={() => setActive(index)}
							onMouseEnter={() => setActive(index)}
							className={`group relative flex shrink-0 snap-start items-center gap-2.5 rounded-full px-4 py-2.5 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
								isActive ? 'text-base-content' : 'text-base-content/75 hover:text-base-content/85'
							}`}
						>
							{isActive && (
								<motion.span
									layoutId='stack-active'
									transition={{ type: 'spring', stiffness: 320, damping: 32 }}
									className='absolute inset-0 -z-10 rounded-full bg-primary/10 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.07)]'
								/>
							)}
							<Icon
								aria-hidden='true'
								className={`shrink-0 text-base transition-colors duration-300 ${isActive ? 'text-primary' : 'text-base-content/35'}`}
							/>
							<span className='whitespace-nowrap text-sm font-semibold'>{category.title}</span>
							<span className='text-xs tabular-nums text-base-content/65'>{category.skills.length}</span>
						</button>
					);
				})}
			</div>

			<div className='mt-8 min-h-[170px] border-t border-base-content/10 pt-8'>
				<AnimatePresence mode='wait'>
					<motion.div
						key={current.title}
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -8 }}
						transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
					>
						<p className='max-w-[62ch] leading-relaxed text-base-content/75'>{current.blurb}</p>
						<ul className='mt-6 flex flex-wrap gap-2'>
							{current.skills.map((skill, index) => {
								const mapped = skillIconMap[skill];
								const Icon = mapped?.icon ?? categoryIconMap[current.title] ?? FaCogs;
								return (
									<motion.li
										key={skill}
										initial={{ opacity: 0, y: 8 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.3, delay: index * 0.03, ease: [0.16, 1, 0.3, 1] }}
										className='group inline-flex items-center gap-2 rounded-full bg-base-200/70 px-4 py-2 text-sm font-medium text-base-content/80 transition-colors duration-300 hover:bg-base-200 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.06)] [html[data-theme=luxury]_&]:hover:bg-[rgba(255,255,255,0.12)]'
									>
										<span
											aria-hidden='true'
											className={`text-base transition-transform duration-300 group-hover:scale-125 ${
												mapped?.colorClass ?? 'text-primary'
											}`}
										>
											<Icon />
										</span>
										{skill}
									</motion.li>
								);
							})}
						</ul>
					</motion.div>
				</AnimatePresence>
			</div>
		</div>
	);
};

type SkillAxis = {
	label: string;
	shortLabel: string;
	value: number;
	description: string;
};

const skillAxes: SkillAxis[] = [
	{
		label: 'Frontend',
		shortLabel: 'Frontend',
		value: 9,
		description: 'React, React Native, TypeScript, modern tooling, and SPA/MPA architectures.',
	},
	{
		label: 'Architecture',
		shortLabel: 'Architecture',
		value: 8.5,
		description: 'Component-driven design, reusable patterns, and scalable frontend architecture.',
	},
	{
		label: 'Testing & Quality',
		shortLabel: 'Testing',
		value: 7.5,
		description: 'Jest, linting, code review, and CI pipelines for consistent quality.',
	},
	{
		label: 'Performance',
		shortLabel: 'Performance',
		value: 8.5,
		description: 'Web Vitals, Lighthouse, lazy loading, bundle optimization, and PWA patterns.',
	},
	{
		label: 'UI/UX',
		shortLabel: 'UI/UX',
		value: 8,
		description: 'Design systems, micro-interactions, and accessible, user-friendly interfaces.',
	},
];

// Fixed viewBox: the SVG scales with CSS, so no resize listener is needed.
const VB_W = 420;
const VB_H = 350;
const CX = 210;
const CY = 172;
const R = 110;
const LABEL_R = 132;
const STEP = (Math.PI * 2) / skillAxes.length;

const pointAt = (index: number, radius: number) => {
	const angle = STEP * index - Math.PI / 2;
	return { x: CX + radius * Math.cos(angle), y: CY + radius * Math.sin(angle) };
};

const ringPoints = (radius: number) =>
	skillAxes
		.map((_, index) => {
			const { x, y } = pointAt(index, radius);
			return `${x},${y}`;
		})
		.join(' ');

const valuePoints = skillAxes
	.map((axis, index) => {
		const { x, y } = pointAt(index, (axis.value / 10) * R);
		return `${x},${y}`;
	})
	.join(' ');

const SkillRadar = () => {
	const [active, setActive] = useState(0);
	const axis = skillAxes[active];

	return (
		<div className='mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14'>
			<motion.div
				initial={{ opacity: 0, scale: 0.94 }}
				whileInView={{ opacity: 1, scale: 1 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
				className='mx-auto w-full max-w-[560px] lg:col-span-7 lg:mx-0'
			>
				<svg
					viewBox={`0 0 ${VB_W} ${VB_H}`}
					className='w-full text-base-content'
					role='img'
					aria-label='Technical skills radar chart'
				>
					<title>
						Skills radar: Frontend 9/10, Architecture 8.5/10, Testing and Quality 7.5/10, Performance 8.5/10, UI/UX 8/10
					</title>

					{[0.4, 0.7, 1].map((level) => (
						<polygon
							key={level}
							points={ringPoints(R * level)}
							fill='none'
							className='stroke-base-content/12'
							strokeWidth={1}
						/>
					))}

					{skillAxes.map((item, index) => {
						const end = pointAt(index, R);
						return (
							<line
								key={item.label}
								x1={CX}
								y1={CY}
								x2={end.x}
								y2={end.y}
								strokeWidth={index === active ? 1.5 : 1}
								className={index === active ? 'stroke-primary/50' : 'stroke-base-content/15'}
							/>
						);
					})}

					<motion.polygon
						points={valuePoints}
						className='fill-primary/20 stroke-primary'
						strokeWidth={2}
						strokeLinejoin='round'
						initial={{ opacity: 0, scale: 0.4 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true, amount: 0.4 }}
						transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
						style={{ transformBox: 'fill-box', transformOrigin: 'center' }}
					/>

					{skillAxes.map((item, index) => {
						const vertex = pointAt(index, (item.value / 10) * R);
						const label = pointAt(index, LABEL_R);
						const isActive = index === active;
						const anchor = index === 0 ? 'middle' : label.x > CX ? 'start' : 'end';
						return (
							<g
								key={item.label}
								tabIndex={0}
								role='button'
								aria-label={`${item.label}, ${item.value} out of 10`}
								className='cursor-pointer outline-none focus-visible:opacity-70'
								onMouseEnter={() => setActive(index)}
								onFocus={() => setActive(index)}
								onClick={() => setActive(index)}
							>
								<circle
									cx={vertex.x}
									cy={vertex.y}
									r={isActive ? 15 : 0}
									className='fill-primary/15 transition-all duration-300 ease-out'
								/>
								<circle
									cx={vertex.x}
									cy={vertex.y}
									r={isActive ? 6.5 : 4}
									className={`transition-all duration-300 ease-out ${isActive ? 'fill-primary' : 'fill-primary/70'}`}
								/>
								<text
									x={label.x}
									y={label.y}
									dy={index === 0 ? -2 : 4}
									textAnchor={anchor}
									className={`text-[13px] font-semibold transition-colors duration-300 ${
										isActive ? 'fill-primary' : 'fill-base-content/50'
									}`}
								>
									{item.shortLabel}
								</text>
							</g>
						);
					})}
				</svg>
			</motion.div>

			{/* Readout beside the chart, plus every axis as a row so the numbers are
			    reachable without hovering the SVG. */}
			<div className='lg:col-span-5'>
				<div className='min-h-[150px]'>
					<AnimatePresence mode='wait'>
						<motion.div
							key={axis.label}
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
						>
							<div className='flex items-baseline gap-2'>
								<span className='text-5xl font-bold tabular-nums text-primary'>{axis.value.toFixed(1)}</span>
								<span className='text-base text-base-content/65'>/ 10</span>
							</div>
							<h4 className='mt-2 text-lg font-semibold text-base-content'>{axis.label}</h4>
							<p className='mt-2 max-w-[46ch] text-sm leading-relaxed text-base-content/75'>{axis.description}</p>
						</motion.div>
					</AnimatePresence>
				</div>

				<ul className='mt-6 border-t border-base-content/10'>
					{skillAxes.map((item, index) => {
						const isActive = index === active;
						return (
							<li key={item.label}>
								<button
									type='button'
									aria-pressed={isActive}
									onMouseEnter={() => setActive(index)}
									onFocus={() => setActive(index)}
									onClick={() => setActive(index)}
									className={`flex w-full items-center justify-between border-b border-base-content/10 py-2.5 text-left text-sm transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
										isActive ? 'text-primary' : 'text-base-content/75 hover:text-base-content'
									}`}
								>
									<span className='font-medium'>{item.label}</span>
									<span className='tabular-nums'>{item.value.toFixed(1)}</span>
								</button>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

const Skills = () => {
	return (
		<section id='skills' aria-label='Skills' className='py-20 md:py-28'>
			<SectionHeading
				title='Core Technical Skills'
				lead='The stack I reach for day to day, grouped by the job it does. Pick a category to see what is inside.'
			/>

			<StackExplorer />

			<div className='mt-20 md:mt-28'>
				<SectionHeading
					title='Skills Radar'
					level={3}
					lead='How I balance frontend, architecture, testing, performance, and UI/UX in practice.'
				/>
				<SkillRadar />
			</div>
		</section>
	);
};

export default Skills;
