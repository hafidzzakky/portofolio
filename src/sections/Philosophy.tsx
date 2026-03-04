import { motion } from 'framer-motion';
import { FaRocket, FaCode, FaUsers, FaShieldAlt } from 'react-icons/fa';

const philosophies = [
	{
		title: 'User-Centric & Accessible',
		description:
			'Creating inclusive digital experiences that prioritize intuitive navigation and WCAG compliance, ensuring every user feels welcome and empowered regardless of their ability or device.',
		icon: FaUsers,
		bgGradient: 'group-hover:from-blue-500/20 group-hover:to-cyan-500/10',
		iconColor: 'text-blue-500',
		iconBg: 'group-hover:bg-blue-500/10',
	},
	{
		title: 'Performance-Obsessed',
		description:
			'Delivering lightning-fast load times and buttery-smooth interactions by obsessively optimizing Core Web Vitals, minimizing bundle sizes, and leveraging modern rendering techniques.',
		icon: FaRocket,
		bgGradient: 'group-hover:from-purple-500/20 group-hover:to-pink-500/10',
		iconColor: 'text-purple-500',
		iconBg: 'group-hover:bg-purple-500/10',
	},
	{
		title: 'Scalable Architecture',
		description:
			'Architecting robust, future-proof systems using clean code principles, strict type safety, and modular patterns that allow applications to grow and evolve without accumulating technical debt.',
		icon: FaCode,
		bgGradient: 'group-hover:from-green-500/20 group-hover:to-emerald-500/10',
		iconColor: 'text-green-500',
		iconBg: 'group-hover:bg-green-500/10',
	},
	{
		title: 'Security & Quality First',
		description:
			'Embedding quality assurance and security best practices into the development lifecycle through automated testing pipelines, rigorous code reviews, and proactive vulnerability management.',
		icon: FaShieldAlt,
		bgGradient: 'group-hover:from-red-500/20 group-hover:to-orange-500/10',
		iconColor: 'text-red-500',
		iconBg: 'group-hover:bg-red-500/10',
	},
];

const Philosophy = () => {
	return (
		<section id='philosophy' className='py-32 relative overflow-hidden'>
			{/* Dynamic Background Elements */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2' />
				<div className='absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[100px] translate-y-1/2' />
			</div>

			<div className='container mx-auto px-4 relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, margin: '-100px' }}
					transition={{ duration: 0.8, ease: 'easeOut' }}
					className='text-center mb-20'
				>
					<h2 className='text-4xl md:text-6xl font-bold mb-6 tracking-tight'>
						<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary bg-300% animate-gradient'>
							Engineering Mindset
						</span>
					</h2>
					<p className='text-lg md:text-xl text-base-content/60 max-w-2xl mx-auto leading-relaxed'>
						Beyond code syntax, these are the core principles that drive my decision-making process.
					</p>
				</motion.div>

				<div className='flex flex-col md:flex-row gap-4 h-[750px] md:h-[240px]'>
					{philosophies.map((item, index) => {
						const Icon = item.icon;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
								className='group relative flex-1 hover:flex-[3] transition-[flex] duration-500 ease-in-out h-full overflow-hidden rounded-3xl'
							>
								<div
									className={`absolute inset-0 bg-base-100/30 backdrop-blur-sm group-hover:backdrop-blur-xl group-hover:bg-base-100/80 border border-base-content/5 transition-all duration-500 bg-gradient-to-br from-transparent to-transparent ${item.bgGradient} h-full w-full`}
								>
									{/* Content Container */}
									<div className='relative h-full p-6 flex flex-col justify-between overflow-hidden'>
										{/* Decorative Index Number */}
										<div
											className={`absolute -bottom-10 -right-6 text-9xl font-black opacity-5 ${item.iconColor} select-none transition-all duration-700 ease-in-out 
                        group-hover:opacity-10 group-hover:scale-75 group-hover:-translate-y-[220px] group-hover:-translate-x-4`}
										>
											0{index + 1}
										</div>

										{/* Title - Rotated initially on mobile/desktop based on design choice, but here keeping simple top alignment */}
										<div className='relative z-20'>
											<h3
												className={`text-lg md:text-2xl font-bold text-base-content/90 mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500 ease-out group-hover:translate-x-4 ${item.iconColor.replace(
													'text-',
													'group-hover:text-',
												)}`}
											>
												{item.title}
											</h3>
										</div>

										{/* Description & Read More - Visible only on hover/expand */}
										<div className='opacity-0 transition-opacity duration-200 ease-linear group-hover:opacity-100 group-hover:duration-500 group-hover:delay-200 absolute top-1/2 left-6 right-6 transform -translate-y-1/2'>
											<p className='text-base text-base-content/80 leading-relaxed font-medium min-w-[200px]'>
												{item.description}
											</p>
										</div>

										{/* Icon - Bottom Left initially, Moves to Bottom Right on Hover */}
										<div
											className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 p-3 md:p-4 rounded-2xl bg-base-100 shadow-sm ${item.iconColor} ${item.iconBg}
                        transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10
                        group-hover:scale-110
                        group-hover:left-[calc(100%-60px)] md:group-hover:left-[calc(100%-80px)]`}
										>
											<Icon size={24} className='md:w-6 md:h-6 w-5 h-5' />
										</div>

										{/* Decorative Background Blob on Hover */}
										<div
											className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 ${item.iconColor.replace('text-', 'bg-')}`}
										/>
									</div>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
};

export default Philosophy;
