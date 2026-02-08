import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects as showcaseProjects } from '../data/projects';

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
			layout
			initial={{ opacity: 0, scale: 0.9 }}
			animate={{ opacity: 1, scale: 1 }}
			exit={{ opacity: 0, scale: 0.9 }}
			transition={{ duration: 0.3 }}
			whileHover={{ y: -5, transition: { duration: 0.3 } }}
			className='break-inside-avoid mb-6 rounded-2xl overflow-hidden relative group bg-base-200 shadow-lg hover:shadow-2xl transition-shadow duration-300'
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
					{/* <div className='flex gap-4 mt-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-150'>
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
					</div> */}

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
	const [selectedCategory, setSelectedCategory] = useState('All');
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1, margin: '-10% 0px -10% 0px' });

	// Extract unique categories from all projects
	const categories = ['All', ...Array.from(new Set(showcaseProjects.flatMap((project) => project.tags)))];

	// Filter projects based on selected category
	const filteredProjects =
		selectedCategory === 'All' ? showcaseProjects : showcaseProjects.filter((project) => project.tags.includes(selectedCategory));

	return (
		<section ref={sectionRef} className='py-20 relative' id='projects'>
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

				{/* Category Filter - Desktop */}
				<div className='hidden md:flex flex-wrap justify-center gap-2 mb-12'>
					{categories.map((category) => (
						<button
							key={category}
							onClick={() => setSelectedCategory(category)}
							className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
								selectedCategory === category
									? 'bg-primary text-primary-content shadow-lg scale-105'
									: 'bg-base-200 text-base-content/70 hover:bg-base-300 hover:text-base-content'
							}`}
						>
							{category}
						</button>
					))}
				</div>

				{/* Mobile Horizontal Filter - Above Navbar */}
				<AnimatePresence>
					{isInView && (
						<motion.div
							initial={{ y: 50, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 50, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className='md:hidden fixed left-4 right-4 bottom-24 z-40 flex gap-2 p-2 bg-base-100/90 backdrop-blur-md rounded-2xl border border-base-content/10 shadow-xl overflow-x-auto scrollbar-hide'
						>
							{categories.map((category) => (
								<button
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`flex-shrink-0 px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all duration-200 ${
										selectedCategory === category
											? 'bg-primary text-primary-content shadow-md'
											: 'hover:bg-base-200 text-base-content/70 bg-base-200/50'
									}`}
								>
									{category}
								</button>
							))}
						</motion.div>
					)}
				</AnimatePresence>

				{/* Masonry Layout using CSS Columns */}
				<div className='columns-1 sm:columns-2 lg:columns-3 gap-6'>
					<AnimatePresence mode='popLayout'>
						{filteredProjects.map((project) => (
							<ShowcaseCard key={project.id} project={project} />
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
