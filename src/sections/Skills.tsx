import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import type { IconType } from 'react-icons';
import {
	FaBolt,
	FaCodeBranch,
	FaCogs,
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
// import { HiOutlineSparkles } from 'react-icons/hi2';

const skillCategories = [
	{
		title: 'Frontend',
		skills: ['React', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'SASS'],
	},
	{
		title: 'UI Kits & Styling',
		skills: ['Ant Design', 'Material UI (MUI)', 'DaisyUI', 'Framer Motion', 'Tailwind CSS', 'Styled-Components'],
	},
	{
		title: 'Architecture & Design',
		skills: ['Component-based architecture', 'Reusable UI components', 'Design systems'],
	},
	{
		title: 'Performance, Rendering & SEO',
		skills: ['Lighthouse', 'SSR/SSG', 'SEO for SPA', 'Server-rendered apps'],
	},
	{
		title: 'Testing & Accessibility',
		skills: ['Jest', 'Accessibility (a11y)'],
	},
	{
		title: 'Frontend Tooling & Build',
		skills: ['Vite', 'Webpack', 'Git', 'Docker'],
	},
	{
		title: 'CI/CD, Quality & Security',
		skills: ['GitLab CI/CD', 'ESLint', 'SonarQube', 'Aikido Security'],
	},
];

type SkillAxis = {
	label: string;
	value: number;
	description: string;
};

const skillAxes: SkillAxis[] = [
	{
		label: 'Frontend',
		value: 9,
		description: 'React, React Native, TypeScript, modern tooling, and SPA/MPA architectures.',
	},
	{
		label: 'Architecture',
		value: 8.5,
		description: 'Component-driven design, reusable patterns, and scalable frontend architecture.',
	},
	{
		label: 'Testing & Quality',
		value: 7.5,
		description: 'Jest, linting, code review, and CI pipelines for consistent quality.',
	},
	{
		label: 'Performance',
		value: 8.5,
		description: 'Web Vitals, Lighthouse, lazy loading, bundle optimization, and PWA patterns.',
	},
	{
		label: 'UI/UX',
		value: 8,
		description: 'Design systems, micro-interactions, and accessible, user-friendly interfaces.',
	},
];

const axisIconMap: Record<string, IconType> = {
	Frontend: FaCogs,
	Architecture: FaProjectDiagram,
	'Testing & Quality': FaFlask,
	Performance: FaTachometerAlt,
	'UI/UX': FaPalette,
};

type FrontendStackItem = {
	label: string;
	icon?: IconType;
	colorClass?: string;
};

const frontendIconMap: Record<string, { icon: IconType; colorClass: string }> = {
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
};

const categoryIconMap: Record<string, IconType> = {
	'UI Kits & Styling': FaPalette,
	'Performance, Rendering & SEO': FaTachometerAlt,
	'Frontend Tooling & Build': FaTools,
	'Testing & Accessibility': FaUniversalAccess,
	'Architecture & Design': FaProjectDiagram,
	'CI/CD, Quality & Security': FaShieldAlt,
};

const skillIconMap: Record<string, { icon: IconType; colorClass: string }> = {
	// UI Kits & Styling
	'Ant Design': { icon: AiOutlineAntDesign, colorClass: 'text-[#3b82f6]' },
	'Material UI (MUI)': { icon: SiMaterialdesign, colorClass: 'text-[#3b82f6]' },
	DaisyUI: { icon: SiDaisyui, colorClass: 'text-[#a855f7]' },
	'Tailwind CSS': { icon: SiTailwindcss, colorClass: 'text-[#38BDF8]' },
	'Styled-Components': { icon: SiStyledcomponents, colorClass: 'text-[#db7093]' },
	'Framer Motion': { icon: SiFramer, colorClass: 'text-[#a855f7]' },

	// Performance, Rendering & SEO
	Lighthouse: { icon: SiLighthouse, colorClass: 'text-[#22c55e]' },
	'SSR/SSG': { icon: FaServer, colorClass: 'text-[#facc15]' },
	'SEO for SPA': { icon: FaSearch, colorClass: 'text-[#f97316]' },
	'Server-rendered apps': { icon: FaServer, colorClass: 'text-[#64748b]' },

	// Testing & Accessibility
	Jest: { icon: FaFlask, colorClass: 'text-[#ef4444]' },
	'Accessibility (a11y)': { icon: FaUniversalAccess, colorClass: 'text-[#3b82f6]' },

	// Architecture & Design
	'Component-based architecture': { icon: FaProjectDiagram, colorClass: 'text-[#22c55e]' },
	'Reusable UI components': { icon: FaProjectDiagram, colorClass: 'text-[#22c55e]' },
	'Design systems': { icon: FaProjectDiagram, colorClass: 'text-[#a855f7]' },

	// Frontend Tooling & Build
	Vite: { icon: FaBolt, colorClass: 'text-[#f59e0b]' },
	Webpack: { icon: SiWebpack, colorClass: 'text-[#60a5fa]' },
	Git: { icon: FaCodeBranch, colorClass: 'text-[#f97316]' },
	Docker: { icon: FaDocker, colorClass: 'text-[#0ea5e9]' },

	// CI/CD, Quality & Security
	'GitLab CI/CD': { icon: FaGitlab, colorClass: 'text-[#f97316]' },
	ESLint: { icon: SiEslint, colorClass: 'text-[#6366f1]' },
	SonarQube: { icon: SiSonarqube, colorClass: 'text-[#22c55e]' },
	'Aikido Security': { icon: FaShieldAlt, colorClass: 'text-[#facc15]' },
};

const frontendStack: FrontendStackItem[] = [
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
	'Leaflet',
].map((label) => {
	const mapped = frontendIconMap[label];
	return {
		label,
		icon: mapped?.icon,
		colorClass: mapped?.colorClass ?? 'text-base-content',
	};
});

const SkillRadar = () => {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);
	const textRef = useRef<HTMLDivElement | null>(null);
	const [dynamicSize, setDynamicSize] = useState(260);
	const [tooltipPos, setTooltipPos] = useState<{ x: number; y: number } | null>(null);

	useEffect(() => {
		const updateSize = () => {
			if (typeof window === 'undefined') return;
			if (window.innerWidth < 768) {
				setDynamicSize(240);
				return;
			}
			if (!textRef.current) return;
			const textHeight = textRef.current.offsetHeight;
			const target = Math.max(260, Math.min(textHeight, 450));
			setDynamicSize(target);
		};

		updateSize();
		window.addEventListener('resize', updateSize);
		return () => {
			window.removeEventListener('resize', updateSize);
		};
	}, []);

	const size = dynamicSize;
	const center = size / 2;
	const radius = size * 0.46;
	const angleStep = (Math.PI * 2) / skillAxes.length;

	const buildPoints = (getRadius: (axis: SkillAxis, index: number) => number) =>
		skillAxes
			.map((axis, index) => {
				const angle = angleStep * index - Math.PI / 2;
				const r = getRadius(axis, index);
				const x = center + r * Math.cos(angle);
				const y = center + r * Math.sin(angle);
				return `${x},${y}`;
			})
			.join(' ');

	const valuePoints = buildPoints((axis) => (axis.value / 10) * radius);
	const levels = [0.35, 0.7, 1];
	const levelPolygons = levels.map((level) => buildPoints(() => radius * level));

	const vertices = skillAxes.map((axis, index) => {
		const angle = angleStep * index - Math.PI / 2;
		const r = (axis.value / 10) * radius;
		const x = center + r * Math.cos(angle);
		const y = center + r * Math.sin(angle);
		return { x, y };
	});

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='mb-10 flex flex-col md:flex-row gap-4 md:gap-2 items-stretch'
		>
			<div className='relative flex h-full w-full md:flex-1 md:mr-2'>
				<motion.div
					transition={{ type: 'spring', stiffness: 200, damping: 20 }}
					className='relative h-full w-full flex items-center justify-center rounded-3xl bg-base-100/40 dark:bg-base-100/10 backdrop-blur-md border border-base-content/10 shadow-lg p-4'
				>
					<svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className='text-base-content/30'>
						<g>
							{levelPolygons.map((points, index) => (
								<polygon key={index} points={points} fill='none' className='stroke-base-content/15' strokeWidth={1} />
							))}

							{skillAxes.map((axis, index) => {
								const angle = angleStep * index - Math.PI / 2;
								const x = center + radius * Math.cos(angle);
								const y = center + radius * Math.sin(angle);
								return (
									<line
										key={axis.label}
										x1={center}
										y1={center}
										x2={x}
										y2={y}
										className='stroke-base-content/20'
										strokeWidth={1}
									/>
								);
							})}

							<polygon points={valuePoints} className='fill-primary/20 stroke-primary/80' strokeWidth={2} />

							{vertices.map((vertex, index) => (
								<circle
									key={skillAxes[index].label}
									cx={vertex.x}
									cy={vertex.y}
									r={activeIndex === index ? 8 : 3}
									className={activeIndex === index ? 'fill-primary cursor-pointer' : 'fill-primary/80 cursor-pointer'}
									onMouseEnter={() => {
										setActiveIndex(index);
										setTooltipPos({ x: vertex.x, y: vertex.y });
									}}
									onMouseLeave={() => {
										setActiveIndex(null);
										setTooltipPos(null);
									}}
									onClick={() => {
										if (activeIndex === index) {
											setActiveIndex(null);
											setTooltipPos(null);
										} else {
											setActiveIndex(index);
											setTooltipPos({ x: vertex.x, y: vertex.y });
										}
									}}
								/>
							))}
						</g>
					</svg>

					<AnimatePresence>
						{activeIndex !== null && tooltipPos && (
							<motion.div
								key={skillAxes[activeIndex].label}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.18 }}
								className='pointer-events-none absolute z-10 max-w-[260px] rounded-2xl bg-base-100/95 dark:bg-base-100/30 border border-base-content/15 px-3 py-1.5 shadow-lg text-[11px] text-left overflow-hidden'
								style={{
									left: tooltipPos.x + 16,
									top: tooltipPos.y + 16,
									transform: 'translate(-50%, -110%)',
								}}
							>
								<div className='absolute -right-2 -top-2 text-base-content/10'>
									<FaTachometerAlt className='w-6 h-6' />
								</div>
								<div className='flex items-center justify-between gap-2 mb-0.5 relative'>
									<span className='font-semibold'>{skillAxes[activeIndex].label}</span>
									<span className='font-mono text-[10px] text-base-content/60'>
										{skillAxes[activeIndex].value.toFixed(1)}/10
									</span>
								</div>
								<p className='text-[10px] text-base-content/70 leading-snug relative'>
									{skillAxes[activeIndex].description}
								</p>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>

			{/* Content Section */}
			<div ref={textRef} className='space-y-5 w-full md:flex-1 '>
				<p className='text-base text-base-content/70 mb-2'>
					A quick snapshot of how I balance frontend, architecture, testing, performance, and UI/UX in day-to-day work.
				</p>
				<div className='space-y-4'>
					{skillAxes.map((axis, index) => (
						<button
							key={axis.label}
							type='button'
							onMouseEnter={() => {
								setActiveIndex(index);
								setTooltipPos(vertices[index]);
							}}
							onMouseLeave={() => {
								setActiveIndex(null);
								setTooltipPos(null);
							}}
							onClick={() => {
								if (activeIndex === index) {
									setActiveIndex(null);
									setTooltipPos(null);
								} else {
									setActiveIndex(index);
									setTooltipPos(vertices[index]);
								}
							}}
							className={`relative w-full text-left pl-4 pr-3 py-2 rounded-2xl border text-sm transition-all overflow-hidden ${
								activeIndex === index
									? 'bg-primary/10 border-primary/40 text-base-content'
									: 'bg-base-100/40 border-base-content/10 text-base-content/80 hover:bg-base-100/70'
							}`}
						>
							{activeIndex === index && <span className='absolute left-0 top-0 bottom-0 w-1 bg-primary/70' />}
							{axisIconMap[axis.label] && (
								<div className='pointer-events-none absolute -right-1 -bottom-1 text-base-content/10'>
									{(() => {
										const Icon = axisIconMap[axis.label];
										return <Icon className='w-10 h-10 -rotate-45' />;
									})()}
								</div>
							)}
							<div className='flex items-center justify-between mb-1'>
								<span className='text-lg font-semibold'>{axis.label}</span>
								<span className='text-[14px] font-semibold text-base-content/60'>{axis.value.toFixed(1)}/10</span>
							</div>
							<p className='text-[12px] text-base-content/70'>{axis.description}</p>
						</button>
					))}
				</div>
			</div>
		</motion.div>
	);
};

const FrontendStack = () => {
	const orderedTitles = [
		'UI Kits & Styling',
		'Performance, Rendering & SEO',
		'Frontend Tooling & Build',
		'Testing & Accessibility',
		'Architecture & Design',
		'CI/CD, Quality & Security',
	];

	const orderedCategories = orderedTitles
		.map((title) => skillCategories.find((category) => category.title === title))
		.filter((category): category is (typeof skillCategories)[0] => Boolean(category));

	const sections = [
		{
			title: 'Frontend',
			items: frontendStack,
		},
		...orderedCategories.map((category) => ({
			title: category.title,
			items: category.skills.map((skill) => {
				const specific = skillIconMap[skill];
				if (specific) {
					return {
						label: skill,
						icon: specific.icon,
						colorClass: specific.colorClass,
					};
				}

				const CategoryIcon = categoryIconMap[category.title] ?? FaCogs;
				return {
					label: skill,
					icon: CategoryIcon,
					colorClass: 'text-primary',
				};
			}),
		})),
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.3 }}
			transition={{ duration: 0.6, ease: 'easeOut' }}
			className='mb-16 rounded-3xl bg-base-100/10 border border-base-content/10 backdrop-blur-md px-6 py-8 md:px-10 md:py-10'
		>
			{/* <div className='flex items-center gap-2 text-xl font-semibold tracking-[0.25em] text-primary mb-4 uppercase'>
				<span className='inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/20 text-primary'>
					<HiOutlineSparkles size={14} />
				</span>
				<span className='font-bold'>My Stack</span>
			</div> */}

			<div className='space-y-8 md:space-y-12'>
				{sections.map((section) => (
					<div key={section.title} className='flex flex-col md:flex-row md:items-start gap-4 md:gap-8'>
						<div className='md:w-1/3'>
							<p className='text-xl md:text-xl font-bold text-base-content/80'>{section.title}</p>
						</div>
						<div className='md:flex-1 flex flex-wrap gap-3'>
							{section.items.map((item) => {
								const Icon = item.icon;
								return (
									<span
										key={item.label}
										className='inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm md:text-base font-medium leading-tight bg-base-100/70 dark:bg-base-100/10 text-base-content/80'
									>
										{Icon && (
											<span className={`text-base ${item.colorClass ?? 'text-primary'}`}>
												<Icon />
											</span>
										)}
										<span>{item.label}</span>
									</span>
								);
							})}
						</div>
					</div>
				))}
			</div>
		</motion.div>
	);
};

const Skills = () => {
	// const container = {
	// 	hidden: { opacity: 0 },
	// 	show: {
	// 		opacity: 1,
	// 		transition: {
	// 			staggerChildren: 0.1,
	// 		},
	// 	},
	// };

	// const item = {
	// 	hidden: { opacity: 0, y: 20 },
	// 	show: { opacity: 1, y: 0 },
	// };

	return (
		<section id='skills' className='py-20'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='mb-8 will-change-[opacity,transform]'
			>
				<h2 className='text-3xl font-bold border-b-4 border-primary inline-block pb-1'>Core Technical Skills</h2>
			</motion.div>

			<FrontendStack />

			{/* <motion.div
				variants={container}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.1 }}
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 will-change-[opacity] mb-8'
			>
				{skillCategories.map((category, index) => (
					<motion.div
						key={index}
						variants={item}
						whileHover={{ y: -5, transition: { duration: 0.3 } }}
						className='card bg-base-100/30 backdrop-blur-md shadow-xl border border-white/20 hover:bg-base-100/40 transition-colors duration-300'
					>
						<div className='card-body p-5'>
							<h3 className='card-title text-lg text-primary mb-3'>{category.title}</h3>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill, idx) => (
									<div
										key={idx}
										className='group relative bg-primary/10 hover:bg-primary backdrop-blur-sm border border-primary/10 hover:border-primary rounded-lg px-3 py-2 transition-all duration-300 flex items-center gap-2 cursor-default'
									>
										<div className='w-1.5 h-1.5 rounded-full bg-primary/80 group-hover:bg-primary-content group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all'></div>
										<span className='font-medium text-primary group-hover:text-primary-content transition-colors'>
											{skill}
										</span>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div> */}

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='mb-8 will-change-[opacity,transform]'
			>
				<h2 className='text-3xl font-bold border-b-4 border-primary inline-block pb-1'>Technical Skills Radar</h2>
			</motion.div>
			<SkillRadar />
		</section>
	);
};

export default Skills;
