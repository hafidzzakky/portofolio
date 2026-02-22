import { motion, AnimatePresence } from 'framer-motion';
import { FaTachometerAlt, FaCogs, FaSearch, FaGlobeAmericas } from 'react-icons/fa';
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

	return (
		<motion.div
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			viewport={{ once: true, amount: 0.2 }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className='relative pl-8 md:pl-12 py-2 will-change-[opacity,transform]'
		>
			{/* Timeline Dot */}
			<span className='absolute left-[-5px] top-8 w-3 h-3 rounded-full bg-primary ring-4 ring-base-100/50 shadow-lg shadow-primary/50 z-10 transition-transform duration-300 hover:scale-125'></span>

			{/* Connecting Line to Card (Subtle) */}
			<span className='absolute left-[-2px] top-[38px] w-8 md:w-12 h-[2px] bg-primary/30'></span>

			<button
				type='button'
				className={`card bg-base-100/30 backdrop-blur-md shadow-sm border border-white/10 hover:border-primary/30 transition-all duration-300 cursor-pointer group overflow-hidden w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 focus-visible:ring-offset-2 focus-visible:ring-offset-base-100 ${
					isOpen ? 'bg-base-100/50 shadow-xl ring-1 ring-primary/20' : 'hover:bg-base-100/40'
				}`}
				onClick={() => setIsOpen(!isOpen)}
			>
				<div className='card-body p-5 md:p-6'>
					<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2'>
						<div className='flex-1'>
							<h3 className='text-xl md:text-2xl font-bold text-base-content group-hover:text-primary transition-colors flex items-center gap-2'>
								{exp.role}
								<span className={`text-xs transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>▼</span>
							</h3>
							<h4 className='text-sm md:text-base text-base-content/70 font-medium mt-0.5'>{exp.company}</h4>
						</div>
						<div className='text-sm font-mono text-primary/80 bg-primary/5 px-3 py-1 rounded-full whitespace-nowrap border border-primary/10'>
							{exp.period}
						</div>
					</div>

					<AnimatePresence>
						{isOpen && (
							<motion.div
								initial={{ height: 0, opacity: 0, marginTop: 0 }}
								animate={{ height: 'auto', opacity: 1, marginTop: 16 }}
								exit={{ height: 0, opacity: 0, marginTop: 0 }}
								transition={{ duration: 0.3 }}
								className='overflow-hidden'
							>
								<ul className='list-none space-y-2 text-base-content/80 text-sm md:text-base'>
									{exp.points.map((point, idx) => (
										<li key={idx} className='pl-5 relative leading-relaxed'>
											<span className='absolute left-0 top-2 w-1.5 h-1.5 rounded-full bg-primary/60'></span>
											{point}
										</li>
									))}
								</ul>

								{/* Tech Stack when Open - at the bottom */}
								<div className='flex flex-wrap gap-2 mt-6 pt-4 border-t border-base-content/10'>
									{exp.techStack?.map((tech, idx) => (
										<span
											key={idx}
											className='px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-content transition-colors cursor-default'
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
							{/* Tech Stack when Closed - above click to view */}
							<div className='flex flex-wrap gap-2 mt-4 mb-2'>
								{exp.techStack?.map((tech, idx) => (
									<span
										key={idx}
										className='px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-primary-content transition-colors cursor-default'
									>
										{tech}
									</span>
								))}
							</div>
							<p className='text-xs text-base-content/40 mt-2 italic'>Click to view details...</p>
						</>
					)}
				</div>
			</button>
		</motion.div>
	);
};

const Experience = () => {
	return (
		<section id='experience' className='py-20'>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='mb-10'
			>
				<h2 className='text-3xl font-bold border-b-4 border-primary inline-block pb-1'>Professional Experience</h2>
			</motion.div>

			<div className='relative border-l-2 border-dashed border-primary/20 ml-3 md:ml-6 space-y-6 pb-12'>
				{experiences.map((exp, index) => (
					<ExperienceCard key={index} exp={exp} index={index} />
				))}
			</div>

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
				className='mt-12 grid gap-4 md:grid-cols-4'
			>
				{[
					{
						icon: <FaTachometerAlt size={16} />,
						label: 'Performance lab',
						text: 'Regularly profiling applications using Lighthouse and Web Vitals to keep interactions fast and reliable.',
					},
					{
						icon: <FaCogs size={16} />,
						label: 'Frontend optimization',
						text: 'Focused on main-thread performance, lazy loading heavy features, and optimizing 3D, images, and bundles.',
					},
					{
						icon: <FaSearch size={16} />,
						label: 'SEO optimization',
						text: 'Optimizing Core Web Vitals, semantic markup, and meta tags to improve discoverability and search engine ranking.',
					},
					{
						icon: <FaGlobeAmericas size={16} />,
						label: 'This portfolio',
						text: 'Uses lazy-loaded 3D, code-splitting, WebP assets, SEO meta tags, and a PWA setup to mirror real-world practices.',
					},
				].map((item) => (
					<div
						key={item.label}
						className='rounded-2xl bg-base-100/60 dark:bg-base-100/10 backdrop-blur-md border border-base-content/10 p-4 flex flex-col gap-2'
					>
						<div className='flex items-center gap-3'>
							<span className='inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary'>
								{item.icon}
							</span>
							<span className='text-xs font-mono uppercase tracking-[0.25em] text-primary'>{item.label}</span>
						</div>
						<p className='text-sm text-base-content/80'>{item.text}</p>
					</div>
				))}
			</motion.div>
		</section>
	);
};

export default Experience;
