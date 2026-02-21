import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const skillCategories = [
	{
		title: 'Frontend',
		skills: ['React', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'SASS'],
	},
	{
		title: 'UI Kits & Styling',
		skills: ['Ant Design', 'Material UI (MUI)', 'DaisyUI', 'Tailwind CSS'],
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
			const target = Math.max(260, Math.min(textHeight - 32, 380));
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
			transition={{ duration: 0.6 }}
			className='mb-10 flex flex-col md:flex-row gap-4 md:gap-2 items-stretch'
		>
			<div className='relative flex h-full shrink-0 md:mr-2'>
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
									className={activeIndex === index ? 'fill-primary' : 'fill-primary/80'}
									onMouseEnter={() => {
										setActiveIndex(index);
										setTooltipPos({ x: vertex.x, y: vertex.y });
									}}
									onMouseLeave={() => {
										setActiveIndex(null);
										setTooltipPos(null);
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
								className='pointer-events-none absolute z-10 max-w-[260px] rounded-2xl bg-base-100/95 dark:bg-base-100/30 border border-base-content/15 px-3 py-1.5 shadow-lg text-[11px] text-left'
								style={{
									left: tooltipPos.x + 16,
									top: tooltipPos.y + 16,
									transform: 'translate(-50%, -110%)',
								}}
							>
								<div className='flex items-center justify-between gap-2 mb-0.5'>
									<span className='font-semibold'>{skillAxes[activeIndex].label}</span>
									<span className='font-mono text-[10px] text-base-content/60'>
										{skillAxes[activeIndex].value.toFixed(1)}/10
									</span>
								</div>
								<p className='text-[10px] text-base-content/70 leading-snug'>{skillAxes[activeIndex].description}</p>
							</motion.div>
						)}
					</AnimatePresence>
				</motion.div>
			</div>

			<div ref={textRef} className='space-y-4 w-full md:flex-1 '>
				<p className='text-base text-base-content/70 mb-2'>
					A quick snapshot of how I balance frontend, architecture, testing, performance, and UI/UX in day-to-day work.
				</p>
				<div className='space-y-3'>
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
							className={`w-full text-left px-3 py-2 rounded-2xl border text-sm transition-all ${
								activeIndex === index
									? 'bg-primary/10 border-primary/40 text-base-content'
									: 'bg-base-100/40 border-base-content/10 text-base-content/80 hover:bg-base-100/70'
							}`}
						>
							<div className='flex items-center justify-between mb-1'>
								<span className='font-semibold'>{axis.label}</span>
								<span className='text-[14px] font-mono text-base-content/60'>{axis.value.toFixed(1)}/10</span>
							</div>
							<p className='text-xs text-base-content/70'>{axis.description}</p>
						</button>
					))}
				</div>
			</div>
		</motion.div>
	);
};

const Skills = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section id='skills' className='py-20'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
				className='mb-8 will-change-[opacity,transform]'
			>
				<h2 className='text-3xl font-bold border-b-4 border-primary inline-block pb-1'>Core Technical Skills</h2>
			</motion.div>

			<motion.div
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
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
				className='mb-8 will-change-[opacity,transform]'
			>
				<h2 className='text-3xl font-bold border-b-4 border-primary inline-block pb-1'>Technical Skills Radar</h2>
			</motion.div>
			<SkillRadar />
		</section>
	);
};

export default Skills;
