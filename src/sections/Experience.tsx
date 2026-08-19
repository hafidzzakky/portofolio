import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaTachometerAlt, FaCogs, FaSearch, FaGlobeAmericas } from 'react-icons/fa';
import { PiPlus } from 'react-icons/pi';
import { useRef, useState } from 'react';
import SectionHeading from '../components/SectionHeading';

const experiences = [
	{
		company: 'PT. Petrosea, Tbk - Jakarta',
		role: 'Senior Front End Engineer',
		period: 'May 2020 - Present',
		techStack: [
			'React',
			'React Native',
			'TypeScript',
			'JavaScript',
			'Next.js',
			'Nuxt.js',
			'Vue',
			'Vite',
			'Redux',
			'leaflet',
			'Tailwind CSS',
			'Ant Design',
			'Material UI',
			'DaisyUI',
			'Jest',
			'GitLab CI/CD',
			'Android',
			'IOS',
			'Aikido',
			'Real-time Systems',
		],
		points: [
			'Owned front-end architecture for enterprise-scale React applications supporting mining operations across multiple sites.',
			'Led development of the Minerva SaaS platform using React, TypeScript, and Next.js, delivering scalable dashboards with SSR/SSG and contributing to an estimated 30% increase in production efficiency.',
			'Implemented design-system-aligned UI components using Ant Design, Material UI, DaisyUI, and Tailwind CSS to ensure consistent, reusable, and accessible UI patterns across applications.',
			'Integrated UI components with Redux for state management, React Router for navigation, and Axios for API communication within scalable frontend architectures.',
			'Built and enhanced risk monitoring dashboards, improving management response time by 20%.',
			'Performed frontend performance analysis and optimization using Lighthouse and browser DevTools, improving Web Vitals (LCP, CLS, INP) and overall user experience.',
			'Conducted code reviews, enforced best practices, implemented Jest and maintained code quality using ESLint, SonarQube, and Aikido security scanning, integrated into GitLab CI/CD pipelines.',
		],
	},
	{
		company: 'PT. Merdeka Copper Gold, Tbk - Jakarta',
		role: 'Front End Engineer',
		period: 'Jun 2019 - May 2020',
		techStack: ['React Native', 'JavaScript', 'Redux', 'Mobile Dev', 'Real-time Systems'],
		points: [
			'Developed React Native applications for procurement monitoring and approvals, improving efficiency by 35%.',
			'Built safety and risk monitoring systems for real-time incident, inspection, and observation reporting in mining areas.',
			'Improved leadership response time by 20% through UI clarity, performance optimization, and responsive design.',
		],
	},
	{
		company: 'PT. Mitra Integrasi Informatika - Jakarta',
		role: 'Front End Engineer',
		period: 'Jan 2018 - Jun 2019',
		techStack: ['React', 'Hybrid Apps', 'Geolocation', 'Banking Ecosystem'],
		points: [
			'Developed React-based and hybrid mobile applications for enterprise banking clients within the BNI ecosystem.',
			'Built BNI Digimap, a geolocation-based merchant clustering and analysis application.',
			'Revamped BNI e-Absensi Mobile, improving attendance tracking accuracy using time- and location-based validation.',
		],
	},
];

const TechChip = ({ label }: { label: string }) => (
	<span className='rounded-full bg-base-content/[0.06] px-3 py-1 text-xs font-medium text-base-content/70 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.07)]'>
		{label}
	</span>
);

const ExperienceEntry = ({ exp, index }: { exp: (typeof experiences)[0]; index: number }) => {
	const [isOpen, setIsOpen] = useState(index === 0);
	const detailId = `exp-detail-${index}`;
	const preview = exp.techStack.slice(0, 6);
	const rest = exp.techStack.length - preview.length;

	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.25 }}
			transition={{ duration: 0.55, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
			className='relative pb-14 last:pb-0 will-change-[opacity,transform]'
		>
			{/* Node on the rail */}
			<motion.span
				aria-hidden='true'
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				viewport={{ once: true, amount: 0.5 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20, delay: 0.1 }}
				className='absolute -left-[calc(2rem+5px)] top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-base-100 md:-left-[calc(3.5rem+5px)]'
			/>

			<p className='text-sm font-medium tabular-nums text-primary'>{exp.period}</p>
			<h3 className='mt-1 text-2xl font-bold leading-tight tracking-tight text-base-content md:text-3xl'>{exp.role}</h3>
			<p className='mt-1 text-base text-base-content/75'>{exp.company}</p>

			<div className='mt-4 flex flex-wrap items-center gap-2'>
				{(isOpen ? exp.techStack : preview).map((tech) => (
					<TechChip key={tech} label={tech} />
				))}
				{!isOpen && rest > 0 && <span className='text-xs text-base-content/65'>+{rest} more</span>}
			</div>

			<button
				type='button'
				aria-expanded={isOpen}
				aria-controls={detailId}
				onClick={() => setIsOpen(!isOpen)}
				className='group mt-5 inline-flex items-center gap-2 rounded-full border border-base-content/15 px-4 py-2 text-sm font-semibold text-base-content/75 transition-colors duration-300 hover:border-primary/60 hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 active:scale-[0.98]'
			>
				<PiPlus
					aria-hidden='true'
					className={`text-base transition-transform duration-300 ${isOpen ? 'rotate-45' : 'group-hover:rotate-90'}`}
				/>
				{isOpen ? 'Hide details' : 'What I did here'}
			</button>

			<AnimatePresence initial={false}>
				{isOpen && (
					<motion.div
						id={detailId}
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: 'auto', opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
						className='overflow-hidden'
					>
						<ul className='mt-6 max-w-[68ch] space-y-3'>
							{exp.points.map((point) => (
								<li key={point} className='relative pl-5 text-sm leading-relaxed text-base-content/75 md:text-base'>
									<span aria-hidden='true' className='absolute left-0 top-[0.6em] h-1.5 w-1.5 rounded-full bg-primary/50' />
									{point}
								</li>
							))}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</motion.article>
	);
};

const highlights = [
	{
		icon: FaTachometerAlt,
		label: 'Performance lab',
		text: 'Regularly profiling applications using Lighthouse and Web Vitals to keep interactions fast and reliable.',
	},
	{
		icon: FaCogs,
		label: 'Frontend optimization',
		text: 'Focused on main-thread performance, lazy loading heavy features, and optimizing 3D, images, and bundles.',
	},
	{
		icon: FaSearch,
		label: 'SEO optimization',
		text: 'Optimizing Core Web Vitals, semantic markup, and meta tags to improve discoverability and search ranking.',
	},
	{
		icon: FaGlobeAmericas,
		label: 'This portfolio',
		text: 'Uses lazy-loaded assets, code-splitting, WebP images, SEO meta tags, and a PWA setup to mirror real practice.',
	},
];

const Experience = () => {
	const trackRef = useRef<HTMLDivElement | null>(null);
	const { scrollYProgress } = useScroll({
		target: trackRef,
		offset: ['start 80%', 'end 65%'],
	});
	// Rail fills as the reader moves through the career timeline.
	const railScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

	return (
		<section id='experience' aria-label='Professional Experience' className='py-20 md:py-28'>
			<SectionHeading
				title='Professional Experience'
				lead='Eight years building front ends for mining, banking, and enterprise operations teams.'
			/>

			<div ref={trackRef} className='relative mt-14 pl-8 md:pl-14'>
				<div aria-hidden='true' className='absolute left-0 top-2 bottom-0 w-px bg-base-content/10' />
				<motion.div
					aria-hidden='true'
					style={{ scaleY: railScale }}
					className='absolute left-0 top-2 bottom-0 w-px origin-top bg-primary/70'
				/>

				{experiences.map((exp, index) => (
					<ExperienceEntry key={exp.company} exp={exp} index={index} />
				))}
			</div>

			{/* How I work: dividers instead of card boxes */}
			<motion.dl
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.2 }}
				variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
				className='mt-20 grid divide-y divide-base-content/10 border-t border-base-content/10 md:grid-cols-4 md:divide-y-0 md:divide-x'
			>
				{highlights.map((item) => {
					const Icon = item.icon;
					return (
						<motion.div
							key={item.label}
							variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
							transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
							className='group px-0 py-7 md:px-7 md:first:pl-0 md:last:pr-0'
						>
							<dt className='flex items-center gap-3'>
								<span
									aria-hidden='true'
									className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110'
								>
									<Icon size={15} />
								</span>
								<span className='text-sm font-semibold text-base-content'>{item.label}</span>
							</dt>
							<dd className='mt-3 text-sm leading-relaxed text-base-content/75'>{item.text}</dd>
						</motion.div>
					);
				})}
			</motion.dl>
		</section>
	);
};

export default Experience;
