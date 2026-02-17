import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { projects as showcaseProjects, type Project } from '../data/projects';
import { PiX, PiCaretLeft, PiCaretRight } from 'react-icons/pi';

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
	const [currentImage, setCurrentImage] = useState(0);

	// Auto-slide logic
	useEffect(() => {
		// Reset progress bar animation when slide changes
		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % project.images.length);
		}, 3000); // 3 seconds per slide

		return () => clearInterval(interval);
	}, [project.images.length, currentImage]); // Add currentImage dependency to reset timer on manual change

	// Lock body scroll when modal is open
	useEffect(() => {
		document.body.style.overflow = 'hidden';
		return () => {
			document.body.style.overflow = 'unset';
		};
	}, []);

	const nextImage = () => setCurrentImage((prev) => (prev + 1) % project.images.length);
	const prevImage = () => setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-8'
			onClick={onClose}
		>
			<motion.div
				initial={{ scale: 0.9, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.9, opacity: 0 }}
				transition={{ type: 'spring', damping: 25, stiffness: 300 }}
				className='relative w-full max-w-5xl bg-base-100 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					onClick={onClose}
					className='absolute top-4 right-4 z-20 btn btn-circle btn-sm md:btn-md bg-base-100/50 backdrop-blur-md border-none hover:bg-base-100 text-base-content'
				>
					<PiX className='text-lg' />
				</button>

				{/* Image Section */}
				<div className='w-full md:w-2/3 relative bg-base-200 flex items-center justify-center overflow-hidden h-auto min-h-[300px] group'>
					<AnimatePresence mode='popLayout'>
						<motion.img
							key={currentImage}
							src={project.images[currentImage]}
							alt={`${project.title} view ${currentImage + 1}`}
							initial={{ opacity: 0, x: 100 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: -100 }}
							transition={{ duration: 0.5 }}
							className='w-full h-auto max-h-[80vh] object-contain block'
						/>
					</AnimatePresence>

					{/* Navigation Arrows */}
					<button
						onClick={(e) => {
							e.stopPropagation();
							prevImage();
						}}
						className='absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100'
					>
						<PiCaretLeft className='text-xl' />
					</button>
					<button
						onClick={(e) => {
							e.stopPropagation();
							nextImage();
						}}
						className='absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/50 transition-all opacity-0 group-hover:opacity-100'
					>
						<PiCaretRight className='text-xl' />
					</button>

					{/* Progress Indicator Overlay */}
					<div className='absolute bottom-4 left-0 right-0 flex justify-center items-center gap-2 px-4 z-20'>
						{project.images.map((_, idx) => (
							<motion.div
								key={idx}
								layout
								initial={false}
								animate={{
									width: currentImage === idx ? 32 : 8,
								}}
								className={`relative h-2 rounded-full overflow-hidden cursor-pointer backdrop-blur-sm transition-colors duration-300 ${
									currentImage === idx ? 'bg-primary/10' : 'bg-base-content/80 hover:bg-base-content/30'
								}`}
								onClick={(e) => {
									e.stopPropagation();
									setCurrentImage(idx);
								}}
							>
								{currentImage === idx && (
									<motion.div
										className='absolute top-0 left-0 h-full bg-secondary/90'
										initial={{ width: '0%' }}
										animate={{ width: '100%' }}
										transition={{ duration: 3, ease: 'linear' }}
									/>
								)}
							</motion.div>
						))}
					</div>
				</div>

				{/* Content Section */}
				<div className='w-full md:w-1/3 p-6 md:p-8 overflow-y-auto bg-base-100'>
					<div className='flex flex-col h-full'>
						<div className='mb-6'>
							<h3 className='text-2xl md:text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>
								{project.title}
							</h3>
							<div className='flex flex-wrap gap-2 mb-4'>
								{project.tags.map((tag) => (
									<span key={tag} className='badge badge-outline badge-sm md:badge-md border-primary/20 text-primary'>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className='prose prose-sm md:prose-base overflow-y-auto flex-grow pr-2'>
							<p className='text-base-content/80 whitespace-pre-line'>{project.description}</p>
						</div>

						{/* Links (if available) */}
						<div className='mt-8 pt-6 border-t border-base-content/10 flex gap-4'>
							{/* Add links here if needed based on project data structure */}
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

const ShowcaseCard = ({ project, onClick }: { project: (typeof showcaseProjects)[0]; onClick: () => void }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isHovered, setIsHovered] = useState(false);

	useEffect(() => {
		if (!isHovered || project.images.length <= 1) {
			return;
		}

		const interval = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % project.images.length);
		}, 1500);

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
			className='break-inside-avoid mb-6 rounded-2xl overflow-hidden relative group bg-base-200 shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => {
				setIsHovered(false);
				setCurrentImage(0);
			}}
			onClick={onClick}
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
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1, margin: '-10% 0px -10% 0px' });

	// Extract unique categories from all projects
	const categories = ['All', ...Array.from(new Set(showcaseProjects.flatMap((project) => project.tags)))];

	// Filter projects based on selected category
	const filteredProjects =
		selectedCategory === 'All' ? showcaseProjects : showcaseProjects.filter((project) => project.tags.includes(selectedCategory));

	return (
		<section ref={sectionRef} className='py-20 relative' id='projects'>
			{/* Project Modal */}
			<AnimatePresence>
				{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
			</AnimatePresence>

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
					<p className='text-base-content/60 max-w-2xl mx-auto'>A collection of my work. Click to view details.</p>
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
							<ShowcaseCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
						))}
					</AnimatePresence>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
