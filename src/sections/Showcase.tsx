import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder data - replace with actual project screenshots
const showcaseProjects = [
	{
		id: 1,
		title: 'E-Commerce Dashboard',
		category: 'Web Application',
		images: [
			'https://placehold.co/600x400/1a1a1a/ffffff?text=Dashboard+View+1',
			'https://placehold.co/600x400/2a2a2a/ffffff?text=Analytics+Chart',
			'https://placehold.co/600x400/3a3a3a/ffffff?text=User+Management',
		],
	},
	{
		id: 2,
		title: 'Travel Booking App',
		category: 'Mobile App',
		images: [
			'https://placehold.co/400x800/0f4c81/ffffff?text=Home+Screen',
			'https://placehold.co/400x800/1f5c91/ffffff?text=Search+Result',
			'https://placehold.co/400x800/2f6ca1/ffffff?text=Booking+Detail',
		],
	},
	{
		id: 3,
		title: 'Finance Landing Page',
		category: 'Website',
		images: [
			'https://placehold.co/600x800/004d40/ffffff?text=Hero+Section',
			'https://placehold.co/600x800/00695c/ffffff?text=Features+Grid',
			'https://placehold.co/600x800/00796b/ffffff?text=Testimonials',
		],
	},
	{
		id: 4,
		title: 'Social Media Analytics',
		category: 'SaaS Platform',
		images: [
			'https://placehold.co/800x600/4a148c/ffffff?text=Overview',
			'https://placehold.co/800x600/6a1b9a/ffffff?text=Report+Generator',
			'https://placehold.co/800x600/7b1fa2/ffffff?text=Settings',
		],
	},
	{
		id: 5,
		title: 'Healthcare Portal',
		category: 'Web System',
		images: [
			'https://placehold.co/600x500/b71c1c/ffffff?text=Patient+List',
			'https://placehold.co/600x500/c62828/ffffff?text=Medical+Records',
			'https://placehold.co/600x500/d32f2f/ffffff?text=Appointments',
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
				{/* Aspect Ratio Maintainer based on first image (simplified here as auto height) */}
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
				<div className='absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6'>
					<h3 className='text-white text-xl font-bold translate-y-4 group-hover:translate-y-0 transition-transform duration-300'>
						{project.title}
					</h3>
					<p className='text-white/80 text-sm translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75'>
						{project.category}
					</p>
					{/* Progress Indicator */}
					<div className='flex gap-1 mt-3 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100'>
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
		<section className='py-20 relative' id='showcase'>
			<div className='container mx-auto px-4'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-center mb-12'
				>
					<h2 className='text-3xl md:text-5xl font-bold mb-4'>
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Project Gallery</span>
					</h2>
					<p className='text-base-content/60 max-w-2xl mx-auto'>
						A visual collection of my latest works. Hover over any project to explore more details.
					</p>
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
