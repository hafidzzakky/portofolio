import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const showcaseProjects = [
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
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Task+App',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Kanban+Board',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Team+View',
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
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Weather+App',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Forecast+Details',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Map+View',
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
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Social+Feed',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Post+Detail',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=User+Profile',
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
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Crypto+Tracker',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Market+Chart',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Portfolio',
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
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Crypto+Tracker',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Price+Alerts',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=Settings',
		],
	},
];

const ShowcaseCard = ({ project }: { project: (typeof showcaseProjects)[0] }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		let interval: ReturnType<typeof setInterval>;
		if (isHovered && project.images.length > 1) {
			interval = setInterval(() => {
				setCurrentImage((prev) => (prev + 1) % project.images.length);
			}, 1500); // Switch image every 1.5 seconds
		} else {
			setCurrentImage(0); // Reset to first image when not hovered
		}
		return () => clearInterval(interval);
	}, [isHovered, project.images.length]);

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			className='break-inside-avoid mb-6 rounded-2xl overflow-hidden relative group bg-base-200 shadow-lg hover:shadow-2xl transition-all duration-300'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			{/* Image Container */}
			<div className='relative w-full overflow-hidden bg-base-300'>
				{/* Aspect Ratio Maintainer based on first image */}
				<div className='relative'>
					<img
						src={project.images[0]}
						alt={project.title}
						className='w-full h-auto object-cover opacity-0' // Invisible spacer
					/>
					<AnimatePresence mode='popLayout'>
						<motion.img
							key={currentImage}
							src={project.images[currentImage]}
							alt={`${project.title} view ${currentImage + 1}`}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ duration: 0.5 }}
							className='absolute inset-0 w-full h-full object-cover'
						/>
					</AnimatePresence>
				</div>

				{/* Overlay Gradient */}
				<div className='absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
					<h3 className='text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
						{project.title}
					</h3>
					<p className='text-white/80 text-xs mt-1 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>
						{project.tags.join(', ')}
					</p>
					<p className='text-white/70 text-sm mt-3 line-clamp-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
						{project.description}
					</p>

					{/* Links */}
					<div className='flex gap-4 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150'>
						<a
							href={project.links.github}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-sm btn-circle btn-ghost text-white hover:bg-white/20'
							title='View Code'
						>
							<FaGithub className='text-lg' />
						</a>
						<a
							href={project.links.demo}
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-sm btn-circle btn-ghost text-white hover:bg-white/20'
							title='View Demo'
						>
							<FaExternalLinkAlt className='text-base' />
						</a>
					</div>

					{/* Progress Indicator */}
					<div className='flex gap-1 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-200'>
						{project.images.map((_, idx) => (
							<div
								key={idx}
								className={`h-1 rounded-full transition-all duration-300 ${
									currentImage === idx ? 'w-4 bg-primary' : 'w-1 bg-white/30'
								}`}
							/>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

const Showcase = () => {
	return (
		<section className='py-20 relative' id='projects'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-5xl font-bold mb-4'>
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Project Showcase</span>
					</h2>
					<p className='text-base-content/60 max-w-2xl mx-auto'>A collection of my work. Hover to see details and slideshow.</p>
				</motion.div>

				{/* Masonry Layout using CSS Columns */}
				<div className='columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6'>
					{showcaseProjects.map((project) => (
						<ShowcaseCard key={project.id} project={project} />
					))}
				</div>
			</div>
		</section>
	);
};

export default Showcase;
