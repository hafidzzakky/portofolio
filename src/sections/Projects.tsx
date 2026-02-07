import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { SiReact, SiTailwindcss, SiTypescript, SiNodedotjs, SiVuedotjs, SiFirebase, SiExpo } from 'react-icons/si';
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Helper to get icon based on tag name
const getTechIcon = (tag: string) => {
	const iconClass = 'text-2xl transition-colors duration-300';
	switch (tag) {
		case 'React':
		case 'React Native':
			return <SiReact className={`${iconClass} text-[#61DAFB]`} />;
		case 'TypeScript':
			return <SiTypescript className={`${iconClass} text-[#3178C6]`} />;
		case 'Tailwind':
			return <SiTailwindcss className={`${iconClass} text-[#06B6D4]`} />;
		case 'Node.js':
			return <SiNodedotjs className={`${iconClass} text-[#339933]`} />;
		case 'Vue.js':
			return <SiVuedotjs className={`${iconClass} text-[#4FC08D]`} />;
		case 'Firebase':
			return <SiFirebase className={`${iconClass} text-[#FFCA28]`} />;
		case 'Expo':
			return <SiExpo className={`${iconClass} text-white`} />;
		default:
			return <FaCode className={`${iconClass} text-gray-400`} />;
	}
};

// Placeholder data - Replace with actual project details
const projects = [
	{
		title: 'E-Commerce Dashboard',
		description:
			'A comprehensive dashboard for managing online stores, featuring real-time analytics, inventory management, and order tracking.',
		tags: ['React', 'TypeScript', 'Tailwind', 'Node.js'],
		links: {
			github: '#',
			demo: '#',
		},
		image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=E-Commerce',
	},
	{
		title: 'Task Management App',
		description: 'A collaborative task management tool with drag-and-drop kanban boards, team assignments, and progress tracking.',
		tags: ['Vue.js', 'Firebase', 'Pinia'],
		links: {
			github: '#',
			demo: '#',
		},
		image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Task+App',
	},
	{
		title: 'Weather Forecast',
		description:
			'A beautiful weather application providing detailed forecasts, air quality index, and interactive maps using open weather APIs.',
		tags: ['React Native', 'Expo', 'WeatherAPI'],
		links: {
			github: '#',
			demo: '#',
		},
		image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Weather+App',
	},
	{
		title: 'Social Media Feed',
		description: 'A responsive social media feed clone with infinite scrolling, image optimization, and real-time interactions.',
		tags: ['React', 'Tailwind', 'Node.js'],
		links: {
			github: '#',
			demo: '#',
		},
		image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Social+Feed',
	},
	{
		title: 'Crypto Tracker',
		description: 'A cryptocurrency tracking application with live price updates, historical charts, and portfolio management.',
		tags: ['React', 'TypeScript', 'Firebase'],
		links: {
			github: '#',
			demo: '#',
		},
		image: 'https://placehold.co/600x400/1a1a1a/ffffff?text=Crypto+Tracker',
	},
];

const Projects = () => {
	return (
		<section id='projects' className='min-h-[50vh] py-20 overflow-hidden relative group/section'>
			<div className='container mx-auto px-4 mb-8 flex justify-between items-end'>
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className='text-4xl font-bold border-b-4 border-primary inline-block pb-2'
				>
					Portfolio
				</motion.h2>
			</div>

			{/* Full Width Splide Carousel */}
			<div className='w-full'>
				<Splide
					options={{
						type: 'loop',
						autoWidth: true,
						focus: 0, // Keep focus at start
						gap: '1rem',
						pagination: false,
						arrows: true,
						drag: 'free', // Enable free dragging for smoother interaction
					}}
					hasTrack={false}
				>
					<div className='relative'>
						<div className='w-full [mask-image:linear-gradient(to_right,transparent_0,transparent_0px,black_40px,black_calc(100%_-_40px),transparent_calc(100%_-_0px),transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0px,transparent_50px,black_175px,black_calc(100%_-_175px),transparent_calc(100%_-_50px),transparent_100%)]'>
							<SplideTrack className='!overflow-visible relative z-10'>
								{projects.map((project, index) => (
									<SplideSlide key={index} className='w-[85vw] md:w-[400px]'>
										<div className='relative w-full h-64 md:h-[400px] overflow-hidden shadow-xl group cursor-pointer rounded-xl'>
											{/* Background Image */}
											<img
												src={project.image}
												alt={project.title}
												className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
											/>

											{/* Initial State: Gradient & Tech Stack Icons at Bottom */}
											<div className='absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent z-10 transition-opacity duration-300 group-hover:opacity-0'>
												<div className='flex gap-4 justify-start items-center'>
													{project.tags.map((tag, i) => (
														<div
															key={i}
															className='p-2 bg-base-100/10 backdrop-blur-md rounded-full border border-white/10 shadow-lg'
															title={tag}
														>
															{getTechIcon(tag)}
														</div>
													))}
												</div>
											</div>

											{/* Hover State: Overlay with Details */}
											<div className='absolute inset-0 bg-base-100 flex flex-col justify-center items-center p-4 md:p-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 rounded-xl border-2 border-base-100'>
												<h3 className='text-xl md:text-3xl font-bold text-primary mb-2 md:mb-4 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 ease-out'>
													{project.title}
												</h3>
												<p className='text-base-content/80 mb-4 md:mb-8 text-sm md:text-base leading-relaxed translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-100 ease-out line-clamp-3 md:line-clamp-none'>
													{project.description}
												</p>

												<div className='flex gap-3 md:gap-6 translate-y-8 group-hover:translate-y-0 transition-transform duration-500 delay-200 ease-out'>
													<a
														href={project.links.github}
														target='_blank'
														rel='noopener noreferrer'
														className='btn btn-sm md:btn-md btn-outline gap-2 hover:bg-primary hover:text-primary-content hover:border-primary'
													>
														<FaGithub /> Code
													</a>
													<a
														href={project.links.demo}
														target='_blank'
														rel='noopener noreferrer'
														className='btn btn-sm md:btn-md btn-primary gap-2 shadow-lg shadow-primary/30'
													>
														<FaExternalLinkAlt /> Demo
													</a>
												</div>
											</div>
										</div>
									</SplideSlide>
								))}
							</SplideTrack>
						</div>

						{/* Custom Arrows */}
						<div className='splide__arrows pointer-events-none'>
							<button
								className='splide__arrow splide__arrow--prev !bg-transparent !border-0 !w-auto !h-auto !flex !items-center !justify-center !absolute !left-1 md:!left-2 !top-1/2 !-translate-y-1/2 !z-50 text-base-content hover:text-primary transition-all duration-300 hover:scale-125 [&>svg]:!transform-none pointer-events-auto'
								type='button'
								aria-label='Previous slide'
							>
								<FaChevronLeft className='text-3xl md:text-4xl' />
							</button>
							<button
								className='splide__arrow splide__arrow--next !bg-transparent !border-0 !w-auto !h-auto !flex !items-center !justify-center !absolute !right-1 md:!right-2 !top-1/2 !-translate-y-1/2 !z-50 text-base-content hover:text-primary transition-all duration-300 hover:scale-125 pointer-events-auto'
								type='button'
								aria-label='Next slide'
							>
								<FaChevronRight className='text-3xl md:text-4xl' />
							</button>
						</div>
					</div>
				</Splide>
			</div>
		</section>
	);
};

export default Projects;
