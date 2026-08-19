import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { projects as showcaseProjects, type Project } from '../data/projects';
import { PiX, PiCaretLeft, PiCaretRight, PiArrowUpRight } from 'react-icons/pi';
import { useAnalytics } from '../hooks/useAnalytics';
import SectionHeading from '../components/SectionHeading';

type SplideInstance = { go: (index: number | '<' | '>') => void };

const ProjectModal = ({ project, onClose }: { project: Project; onClose: () => void }) => {
	const [currentImage, setCurrentImage] = useState(0);
	const [isHovered, setIsHovered] = useState(false);
	const splideRef = useRef<SplideInstance | null>(null);
	const closeButtonRef = useRef<HTMLButtonElement | null>(null);
	const modalRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		document.body.style.overflow = 'hidden';
		closeButtonRef.current?.focus();

		const handleKeyDown = (event: KeyboardEvent) => {
			if (event.key === 'Escape') {
				onClose();
			}
			if (event.key === 'ArrowLeft' && splideRef.current) {
				splideRef.current.go('<');
			}
			if (event.key === 'ArrowRight' && splideRef.current) {
				splideRef.current.go('>');
			}
			if (event.key === 'Tab' && modalRef.current) {
				const focusable = modalRef.current.querySelectorAll<HTMLElement>(
					'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
				);
				const first = focusable[0];
				const last = focusable[focusable.length - 1];
				if (event.shiftKey) {
					if (document.activeElement === first) {
						event.preventDefault();
						last.focus();
					}
				} else {
					if (document.activeElement === last) {
						event.preventDefault();
						first.focus();
					}
				}
			}
		};

		window.addEventListener('keydown', handleKeyDown);

		return () => {
			document.body.style.overflow = 'unset';
			window.removeEventListener('keydown', handleKeyDown);
		};
	}, [onClose]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className='fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm md:p-8'
			onClick={onClose}
			role='dialog'
			aria-modal='true'
			aria-label={`${project.title} project details`}
		>
			<motion.div
				ref={modalRef}
				initial={{ scale: 0.94, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				exit={{ scale: 0.94, opacity: 0 }}
				transition={{ type: 'spring', damping: 25, stiffness: 300 }}
				className='relative flex max-h-[90vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-base-100 shadow-2xl md:flex-row md:items-stretch'
				onClick={(e) => e.stopPropagation()}
			>
				{/* Close Button */}
				<button
					ref={closeButtonRef}
					onClick={onClose}
					className='btn btn-circle btn-sm absolute right-4 top-4 z-20 border-none bg-base-100/50 text-base-content backdrop-blur-md hover:bg-base-100 md:btn-md'
					aria-label='Close project details'
				>
					<PiX aria-hidden='true' className='text-lg' />
				</button>

				{/* Image Section */}
				<div
					className='group relative flex h-auto min-h-[300px] w-full items-center justify-center overflow-hidden md:max-h-[80vh] md:w-7/12'
					onMouseEnter={() => setIsHovered(true)}
					onMouseLeave={() => setIsHovered(false)}
				>
					<Splide
						options={{
							type: 'slide',
							rewind: true,
							start: 0,
							perPage: 1,
							gap: '1rem',
							arrows: false,
							pagination: false,
							autoplay: true,
							interval: 3000,
							pauseOnHover: true,
							pauseOnFocus: true,
							speed: 600,
							drag: 'free',
						}}
						onMounted={(splide) => {
							splide.go(0);
						}}
						onMoved={(_, newIndex: number) => setCurrentImage(newIndex)}
						ref={(splide) => {
							splideRef.current = splide as unknown as SplideInstance;
						}}
						className='h-full w-full'
					>
						{project.images.map((src, idx) => (
							<SplideSlide key={idx} className='flex items-center justify-center'>
								<div className='flex h-full w-full items-center justify-center overflow-hidden rounded-2xl bg-base-100/5'>
									<img
										src={src}
										alt={`${project.title} screenshot ${idx + 1} of ${project.images.length}`}
										loading='lazy'
										className='block h-full w-full object-cover'
									/>
								</div>
							</SplideSlide>
						))}
					</Splide>

					{/* Navigation Arrows */}
					<button
						aria-label='Previous image'
						onClick={(e) => {
							e.stopPropagation();
							splideRef.current?.go('<');
						}}
						className='absolute left-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white opacity-0 outline-none backdrop-blur-md transition-all hover:bg-black/50 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white/50 group-hover:opacity-100 md:flex'
					>
						<PiCaretLeft aria-hidden='true' className='text-xl' />
					</button>
					<button
						aria-label='Next image'
						onClick={(e) => {
							e.stopPropagation();
							splideRef.current?.go('>');
						}}
						className='absolute right-4 top-1/2 z-20 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/20 text-white opacity-0 outline-none backdrop-blur-md transition-all hover:bg-black/50 focus-visible:opacity-100 focus-visible:ring-2 focus-visible:ring-white/50 group-hover:opacity-100 md:flex'
					>
						<PiCaretRight aria-hidden='true' className='text-xl' />
					</button>

					{/* Progress Indicator */}
					<div
						className='absolute bottom-4 left-0 right-0 z-20 flex items-center justify-center gap-2 px-4'
						role='group'
						aria-label='Image navigation'
					>
						{project.images.map((_, idx) => (
							<motion.button
								key={idx}
								layout
								initial={false}
								animate={{ width: currentImage === idx ? 32 : 8 }}
								aria-label={`Go to image ${idx + 1}`}
								aria-pressed={currentImage === idx}
								className={`relative h-2 cursor-pointer overflow-hidden rounded-full outline-none backdrop-blur-sm transition-colors duration-300 focus-visible:ring-2 focus-visible:ring-white/70 ${
									currentImage === idx ? 'bg-primary/10' : 'bg-base-content/80 hover:bg-base-content/30'
								}`}
								onClick={(e) => {
									e.stopPropagation();
									if (splideRef.current) {
										splideRef.current.go(idx);
									}
								}}
							>
								{currentImage === idx && !isHovered && (
									<motion.div
										className='absolute left-0 top-0 h-full bg-secondary/90'
										initial={{ width: '0%' }}
										animate={{ width: '100%' }}
										transition={{ duration: 3, ease: 'linear' }}
									/>
								)}
							</motion.button>
						))}
					</div>
				</div>

				{/* Content Section */}
				<div className='flex w-full flex-col overflow-y-auto bg-base-100 p-6 md:h-full md:max-h-[80vh] md:w-5/12 md:p-8'>
					<div className='flex h-full flex-col'>
						<div className='mb-6'>
							<h3 className='mb-2 text-2xl font-bold tracking-tight text-base-content md:text-3xl'>{project.title}</h3>
							{(project.role || project.context) && (
								<div className='mb-3 flex flex-wrap items-center gap-2'>
									{project.role && (
										<span className='inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary'>
											{project.role}
										</span>
									)}
									{project.context && <span className='text-[11px] text-base-content/60'>{project.context}</span>}
								</div>
							)}
							<div className='mb-4 flex flex-wrap gap-2'>
								{project.tags.map((tag) => (
									<span
										key={tag}
										className='rounded-full bg-base-content/[0.06] px-3 py-1 text-xs font-medium text-base-content/70'
									>
										{tag}
									</span>
								))}
							</div>
						</div>

						<div className='prose prose-sm flex-grow overflow-y-auto pr-2 md:prose-base'>
							<p className='whitespace-pre-line text-base-content/80'>{project.description}</p>
						</div>
					</div>
				</div>
			</motion.div>
		</motion.div>
	);
};

/** Cycles a project's screenshots inside the hover preview. */
const PreviewFrames = ({ images }: { images: string[] }) => {
	const [frame, setFrame] = useState(0);

	useEffect(() => {
		if (images.length <= 1) return;
		const id = setInterval(() => setFrame((prev) => (prev + 1) % images.length), 1200);
		return () => clearInterval(id);
	}, [images]);

	return (
		<div className='relative aspect-[16/10] w-full bg-base-300'>
			<AnimatePresence mode='popLayout'>
				<motion.img
					key={frame}
					src={images[frame]}
					alt=''
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.35 }}
					className='absolute inset-0 h-full w-full object-cover'
				/>
			</AnimatePresence>
		</div>
	);
};

/** Cursor-tracked preview shown while browsing the desktop project index. */
const IndexPreview = ({ project }: { project: Project | null }) => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const springX = useSpring(x, { stiffness: 220, damping: 26, mass: 0.4 });
	const springY = useSpring(y, { stiffness: 220, damping: 26, mass: 0.4 });

	useEffect(() => {
		// Writes motion values only, so tracking the pointer costs no re-renders.
		const move = (event: PointerEvent) => {
			x.set(event.clientX + 40);
			y.set(event.clientY);
		};
		window.addEventListener('pointermove', move, { passive: true });
		return () => window.removeEventListener('pointermove', move);
	}, [x, y]);

	useEffect(() => {
		// Appear at the cursor instead of springing in from the page corner.
		if (!project) return;
		springX.jump(x.get());
		springY.jump(y.get());
	}, [project, springX, springY, x, y]);

	return (
		<AnimatePresence>
			{project && (
				<motion.div
					aria-hidden='true'
					initial={{ opacity: 0, scale: 0.92 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0, scale: 0.92 }}
					transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
					style={{ x: springX, y: springY, translateY: '-50%' }}
					className='pointer-events-none fixed left-0 top-0 z-40 hidden w-[360px] overflow-hidden rounded-2xl shadow-2xl lg:block'
				>
					{/* Keyed by project so the cycle restarts on each new hover. */}
					<PreviewFrames key={project.id} images={project.images} />
				</motion.div>
			)}
		</AnimatePresence>
	);
};

const ProjectRow = ({ project, onOpen, onHover }: { project: Project; onOpen: () => void; onHover: (p: Project | null) => void }) => (
	<motion.li
		layout
		initial={{ opacity: 0, y: 16 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -8 }}
		transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
		className='border-b border-base-content/10'
	>
		<button
			type='button'
			onClick={onOpen}
			onMouseEnter={() => onHover(project)}
			onMouseLeave={() => onHover(null)}
			onFocus={() => onHover(project)}
			onBlur={() => onHover(null)}
			aria-label={`View ${project.title} project details`}
			className='group flex w-full items-center gap-6 py-6 text-left transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 md:py-7'
		>
			<span className='min-w-0 flex-1'>
				<span className='block text-xl font-semibold tracking-tight text-base-content/85 transition-all duration-300 group-hover:translate-x-2 group-hover:text-primary md:text-3xl'>
					{project.title}
				</span>
				{project.role && <span className='mt-1 block text-sm text-base-content/45'>{project.role}</span>}
			</span>

			<span className='hidden shrink-0 items-center gap-2 lg:flex'>
				{project.tags.slice(0, 3).map((tag) => (
					<span
						key={tag}
						className='rounded-full bg-base-content/[0.06] px-3 py-1 text-xs font-medium text-base-content/60 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.07)]'
					>
						{tag}
					</span>
				))}
			</span>

			<PiArrowUpRight
				aria-hidden='true'
				className='shrink-0 text-xl text-base-content/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary md:text-2xl'
			/>
		</button>
	</motion.li>
);

const ProjectCard = ({ project, onOpen }: { project: Project; onOpen: () => void }) => (
	<motion.button
		type='button'
		layout
		initial={{ opacity: 0, y: 16 }}
		animate={{ opacity: 1, y: 0 }}
		exit={{ opacity: 0, y: -8 }}
		transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
		onClick={onOpen}
		aria-label={`View ${project.title} project details`}
		className='w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
	>
		<div className='aspect-[4/3] w-full overflow-hidden rounded-2xl bg-base-300'>
			<img
				src={project.images[0]}
				alt={`${project.title} preview`}
				loading='lazy'
				className='h-full w-full object-cover transition-transform duration-500 active:scale-[1.03]'
			/>
		</div>
		<h3 className='mt-3 text-lg font-semibold tracking-tight text-base-content'>{project.title}</h3>
		<p className='mt-1 text-sm text-base-content/50'>{project.tags.slice(0, 3).join(' / ')}</p>
	</motion.button>
);

const Showcase = () => {
	const [selectedCategory, setSelectedCategory] = useState('All');
	const [selectedProject, setSelectedProject] = useState<Project | null>(null);
	const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.1, margin: '-10% 0px -10% 0px' });
	const { trackProjectView } = useAnalytics();

	const categories = ['All', ...Array.from(new Set(showcaseProjects.flatMap((project) => project.tags)))];

	const filteredProjects =
		selectedCategory === 'All'
			? showcaseProjects
			: showcaseProjects.filter((project) => project.tags.includes(selectedCategory));

	const openProject = (project: Project) => {
		setSelectedProject(project);
		setHoveredProject(null);
		trackProjectView(project.title);
	};

	return (
		<section ref={sectionRef} aria-label='Project Showcase' className='relative py-20 md:py-28' id='projects'>
			<AnimatePresence>
				{selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
			</AnimatePresence>

			<IndexPreview project={selectedProject ? null : hoveredProject} />

			<div className='container mx-auto px-4'>
			<SectionHeading
				title='Project Showcase'
				lead='Twelve products shipped for mining, banking, healthcare, and marketplace teams. Open one to see the screens.'
			/>

			{/* Category filter - desktop */}
			<div className='mt-10 hidden flex-wrap gap-x-6 gap-y-3 md:flex' role='group' aria-label='Filter projects by category'>
				{categories.map((category) => {
					const isActive = selectedCategory === category;
					return (
						<button
							key={category}
							type='button'
							aria-pressed={isActive}
							onClick={() => setSelectedCategory(category)}
							className={`relative pb-1 text-sm font-semibold transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 ${
								isActive ? 'text-primary' : 'text-base-content/45 hover:text-base-content/80'
							}`}
						>
							{category}
							{isActive && (
								<motion.span
									layoutId='filter-underline'
									transition={{ type: 'spring', stiffness: 320, damping: 30 }}
									className='absolute inset-x-0 -bottom-px h-[2px] rounded-full bg-primary'
								/>
							)}
						</button>
					);
				})}
			</div>

			{/* Desktop: work index with cursor preview */}
			<ul className='mt-8 hidden border-t border-base-content/10 md:block'>
				<AnimatePresence mode='popLayout'>
					{filteredProjects.map((project) => (
						<ProjectRow
							key={project.id}
							project={project}
							onOpen={() => openProject(project)}
							onHover={setHoveredProject}
						/>
					))}
				</AnimatePresence>
			</ul>

			{/* Mobile: image-led cards */}
			<div className='mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:hidden'>
				<AnimatePresence mode='popLayout'>
					{filteredProjects.map((project) => (
						<ProjectCard key={project.id} project={project} onOpen={() => openProject(project)} />
					))}
				</AnimatePresence>
			</div>

			{filteredProjects.length === 0 && (
				<p className='mt-10 text-base-content/50'>No projects tagged {selectedCategory} yet.</p>
			)}
			</div>

			{/* Mobile floating filter */}
			<AnimatePresence>
				{isInView && (
					<motion.div
						initial={{ y: 50, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						exit={{ y: 50, opacity: 0 }}
						transition={{ duration: 0.3 }}
						role='group'
						aria-label='Filter projects by category'
						className='scrollbar-hide fixed bottom-24 left-4 right-4 z-40 flex gap-2 overflow-x-auto rounded-2xl border border-base-content/10 bg-base-100/90 p-2 shadow-xl backdrop-blur-md md:hidden'
					>
						{categories.map((category) => (
							<button
								key={category}
								type='button'
								aria-pressed={selectedCategory === category}
								onClick={() => setSelectedCategory(category)}
								className={`shrink-0 whitespace-nowrap rounded-xl px-4 py-2 text-xs font-bold transition-all duration-200 ${
									selectedCategory === category
										? 'bg-primary text-primary-content shadow-md'
										: 'bg-base-200/50 text-base-content/70 hover:bg-base-200'
								}`}
							>
								{category}
							</button>
						))}
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
};

export default Showcase;
