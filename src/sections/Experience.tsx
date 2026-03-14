import { motion, AnimatePresence } from 'framer-motion';
import { FaTachometerAlt, FaCogs, FaSearch, FaGlobeAmericas } from 'react-icons/fa';
import { PiCaretDown } from 'react-icons/pi';
import { useState } from 'react';

const experiences = [
	{
		company: 'PT. Petrosea, Tbk – Jakarta',
		role: 'Senior Front End Engineer',
		period: 'May 2020 – Present',
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
		company: 'PT. Merdeka Copper Gold, Tbk – Jakarta',
		role: 'Front End Engineer',
		period: 'Jun 2019 – May 2020',
		techStack: ['React Native', 'JavaScript', 'Redux', 'Mobile Dev', 'Real-time Systems'],
		points: [
			'Developed React Native applications for procurement monitoring and approvals, improving efficiency by 35%.',
			'Built safety and risk monitoring systems for real-time incident, inspection, and observation reporting in mining areas.',
			'Improved leadership response time by 20% through UI clarity, performance optimization, and responsive design.',
		],
	},
	{
		company: 'PT. Mitra Integrasi Informatika – Jakarta',
		role: 'Front End Engineer',
		period: 'Jan 2018 – Jun 2019',
		techStack: ['React', 'Hybrid Apps', 'Geolocation', 'Banking Ecosystem'],
		points: [
			'Developed React-based and hybrid mobile applications for enterprise banking clients within the BNI ecosystem.',
			'Built BNI Digimap, a geolocation-based merchant clustering and analysis application.',
			'Revamped BNI e-Absensi Mobile, improving attendance tracking accuracy using time- and location-based validation.',
		],
	},
];

const ExperienceCard = ({ exp, index }: { exp: (typeof experiences)[0]; index: number }) => {
	const [isOpen, setIsOpen] = useState(false);
	const detailId = `exp-detail-${index}`;

	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className='relative pl-8 md:pl-12 py-2 will-change-[opacity,transform]'
		>
			{/* Timeline Dot */}
			<span
				aria-hidden='true'
				className='absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-primary ring-4 ring-base-100/50 shadow-lg shadow-primary/50 z-10 transition-transform duration-300 hover:scale-125'
			></span>

			{/* Connecting Line */}
			<span aria-hidden='true' className='absolute left-[-2px] top-[38px] w-8 md:w-12 h-[2px] bg-primary/30'></span>

			<button
				type='button'
				aria-expanded={isOpen}
				aria-controls={detailId}
				aria-label={`${exp.role} at ${exp.company} — ${isOpen ? 'collapse' : 'expand'} details`}
				className={`card bg-base-100/30 backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group overflow-hidden w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.05)] [html[data-theme=luxury]_&]:backdrop-blur-[10px] [html[data-theme=luxury]_&]:shadow-[0_4px_30px_rgba(0,0,0,0.1)] [html[data-theme=luxury]_&]:border-none ${
					isOpen
						? 'bg-base-100/50 shadow-xl ring-0'
						: 'hover:bg-base-100/40 [html[data-theme=luxury]_&]:hover:bg-[rgba(255,255,255,0.1)]'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='p-5 card-body md:p-6'>
					<div className='flex flex-col gap-2 md:flex-row md:items-center md:justify-between'>
						<div className='flex-1'>
							<h3 className='flex items-center gap-2 text-xl font-bold transition-colors md:text-2xl text-base-content group-hover:text-primary'>
								{exp.role}
								<PiCaretDown
									aria-hidden='true'
									className={`text-sm transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
								/>
							</h3>
							<h4 className='text-sm md:text-base text-base-content/70 font-medium mt-0.5'>{exp.company}</h4>
						</div>
						<div className='px-3 py-1 text-sm rounded-full text-primary/80 bg-primary/5 whitespace-nowrap w-fit'>
							{exp.period}
						</div>
					</div>

					<AnimatePresence>
						{isOpen && (
							<motion.div
								id={detailId}
								initial={{ height: 0, opacity: 0, marginTop: 0 }}
								animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
								exit={{ height: 0, opacity: 0, marginTop: 0 }}
								transition={{ duration: 0.3 }}
								className='overflow-hidden'
							>
								<ul className='space-y-2 text-sm list-none text-base-content/80 md:text-base'>
									{exp.points.map((point, idx) => (
										<li key={idx} className='relative pl-5 leading-relaxed'>
											<span
												aria-hidden='true'
												className='absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60'
											></span>
											{point}
										</li>
									))}
								</ul>

								{/* Tech Stack when Open */}
								<div className='flex flex-wrap gap-2 pt-4 mt-6'>
									{exp.techStack?.map((tech, idx) => (
										<span
											key={idx}
											className='px-3 py-1 text-xs font-semibold transition-colors rounded-full cursor-default bg-primary/10 text-primary hover:bg-primary hover:text-primary-content'
										>
											{tech}
										</span>
									))}
								</div>
							</motion.div>
						)}
					</AnimatePresence>

					{!isOpen && (
						<>
							{/* Tech Stack when Closed */}
							<div className='flex flex-wrap gap-2 mt-4 mb-2'>
								{exp.techStack?.map((tech, idx) => (
									<span
										key={idx}
										className='px-3 py-1 text-xs font-semibold transition-colors rounded-full cursor-default bg-primary/10 text-primary hover:bg-primary hover:text-primary-content'
									>
										{tech}
									</span>
								))}
							</div>
							<p className='mt-2 text-xs italic text-base-content/40'>Click to view details...</p>
						</>
					)}
				</div>
			</button>
		</motion.div>
	);
};

const statCards = [
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
		text: 'Optimizing Core Web Vitals, semantic markup, and meta tags to improve discoverability and search engine ranking.',
	},
	{
		icon: FaGlobeAmericas,
		label: 'This portfolio',
		text: 'Uses lazy-loaded 3D, code-splitting, WebP assets, SEO meta tags, and a PWA setup to mirror real-world practices.',
	},
];

const Experience = () => {
	return (
		<section id='experience' aria-label='Professional Experience' className='py-20'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='mb-10'
			>
				<h2 className='mb-2 text-3xl font-bold md:text-5xl'>
					<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient'>
						Professional Experience
					</span>
				</h2>
			</motion.div>

			<motion.div className='relative pb-12 ml-3 space-y-6 border-l-2 border-dashed border-primary/20 md:ml-6'>
				{experiences.map((exp, index) => (
					<ExperienceCard key={index} exp={exp} index={index} />
				))}
			</motion.div>

			<motion.div
				className='grid gap-4 mt-12 md:grid-cols-4'
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: { staggerChildren: 0.2 },
					},
				}}
			>
				{statCards.map((item) => {
					const Icon = item.icon;
					return (
						<motion.div
							key={item.label}
							variants={{
								hidden: { opacity: 0, y: 20 },
								show: { opacity: 1, y: 0 },
							}}
							className='h-full'
						>
							<div className='group card h-full bg-base-100/30 backdrop-blur-md shadow-sm hover:shadow-lg hover:-translate-y-1 hover:bg-base-100/40 transition-all duration-300 p-6 flex flex-col gap-3 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.05)] [html[data-theme=luxury]_&]:backdrop-blur-[10px] [html[data-theme=luxury]_&]:shadow-[0_4px_30px_rgba(0,0,0,0.1)] [html[data-theme=luxury]_&]:border-none [html[data-theme=luxury]_&]:hover:bg-[rgba(255,255,255,0.1)]'>
								<div className='flex items-center gap-3'>
									<span
										aria-hidden='true'
										className='inline-flex items-center justify-center w-8 h-8 transition-all duration-300 rounded-full bg-primary/10 text-primary group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-content'
									>
										<Icon size={16} />
									</span>
									<span className='text-xs font-semibold text-primary'>{item.label}</span>
								</div>
								<p className='text-sm text-base-content/80'>{item.text}</p>
							</div>
						</motion.div>
					);
				})}
			</motion.div>
		</section>
	);
};

export default Experience;
