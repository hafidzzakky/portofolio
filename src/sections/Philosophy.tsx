import { motion } from 'framer-motion';
import { useState } from 'react';
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
	// activeIndex hanya berlaku di mobile (max-md:) — desktop pakai hover CSS
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	// Desktop (md+): hover CSS handles everything, ignore clicks
	// Mobile (<md): click to toggle
	const handleToggle = (index: number) => {
		if (window.innerWidth >= 768) return;
		setActiveIndex((prev) => (prev === index ? null : index));
	};

	return (
		<section id='philosophy' aria-label='Engineering Mindset' className='py-32 relative overflow-hidden'>
			{/* Dynamic Background Elements */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none' aria-hidden='true'>
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
						const isActive = activeIndex === index;
						return (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true, margin: '-50px' }}
								transition={{ delay: index * 0.1, duration: 0.5, ease: 'easeOut' }}
								// Mobile: click to toggle. Desktop: hover CSS handles everything.
								role='button'
								tabIndex={0}
								aria-expanded={isActive}
								aria-label={item.title}
								onClick={() => handleToggle(index)}
								onKeyDown={(e) => {
									if (e.key === 'Enter' || e.key === ' ') {
										e.preventDefault();
										handleToggle(index);
									}
								}}
								className={`group relative shadow-sm flex-1 transition-[flex] duration-500 ease-in-out h-full overflow-hidden rounded-3xl cursor-pointer
									hover:flex-[3] focus-visible:flex-[3]
									${isActive ? 'max-md:flex-[3]' : ''}
									focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-primary/60`}
							>
								<div
									className={`absolute inset-0 transition-all duration-500 bg-gradient-to-br from-transparent to-transparent
										${item.bgGradient} h-full w-full bg-base-100/30 backdrop-blur-md
										group-hover:bg-base-100/80 group-hover:backdrop-blur-xl
										group-focus-visible:bg-base-100/80 group-focus-visible:backdrop-blur-xl
										${isActive ? 'max-md:bg-base-100/80 max-md:backdrop-blur-xl' : ''}
										[html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.05)]
										[html[data-theme=luxury]_&]:backdrop-blur-[10px]
										[html[data-theme=luxury]_&]:shadow-[0_4px_30px_rgba(0,0,0,0.1)]
										[html[data-theme=luxury]_&]:border-none
										[html[data-theme=luxury]_&]:group-hover:bg-[rgba(255,255,255,0.1)]
										[html[data-theme=luxury]_&]:group-focus-visible:bg-[rgba(255,255,255,0.1)]`}
								>
									{/* Content Container */}
									<div className='relative h-full p-6 flex flex-col justify-between overflow-hidden'>
										{/* Decorative Index Number */}
										<div
											aria-hidden='true'
											className={`absolute -bottom-10 -right-6 text-9xl font-black opacity-5 ${item.iconColor} select-none transition-all duration-700 ease-in-out
												group-hover:opacity-10 group-hover:scale-75 group-hover:-translate-y-[220px] group-hover:-translate-x-4
												group-focus-visible:opacity-10 group-focus-visible:scale-75 group-focus-visible:-translate-y-[220px] group-focus-visible:-translate-x-4
												${isActive ? 'max-md:opacity-10 max-md:scale-75 max-md:-translate-y-[220px] max-md:-translate-x-4' : ''}`}
										>
											0{index + 1}
										</div>

										{/* Title */}
										<div className='relative z-20'>
											<h3
												className={`text-lg md:text-2xl font-bold text-base-content/90 mb-2 leading-tight whitespace-nowrap overflow-hidden text-ellipsis transition-all duration-500 ease-out
													group-hover:translate-x-4 group-focus-visible:translate-x-4
													${item.iconColor.replace('text-', 'group-hover:text-')}
													${item.iconColor.replace('text-', 'group-focus-visible:text-')}
													${isActive ? `max-md:translate-x-4 ${item.iconColor.replace('text-', 'max-md:text-')}` : ''}`}
											>
												{item.title}
											</h3>
										</div>

										{/* Description
										  Desktop: opacity-0 default → group-hover:opacity-100
										  Mobile:  opacity-0 default → max-md:opacity-100 when isActive
										  Keyboard: group-focus-visible:opacity-100 on all screens
										*/}
										<div
											className={`transition-opacity duration-200 ease-linear absolute top-1/2 left-6 right-6 transform -translate-y-1/2
												opacity-0
												group-hover:opacity-100 group-hover:duration-500 group-hover:delay-200
												group-focus-visible:opacity-100 group-focus-visible:duration-500 group-focus-visible:delay-200
												${isActive ? 'max-md:opacity-100' : ''}`}
										>
											<p className='text-base text-base-content/80 leading-relaxed font-medium min-w-[200px]'>
												{item.description}
											</p>
										</div>

										{/* Icon - Bottom Left → Bottom Right on expand */}
										<div
											aria-hidden='true'
											className={`absolute bottom-4 left-4 md:bottom-6 md:left-6 p-3 md:p-4 rounded-2xl bg-base-100 shadow-sm ${item.iconColor} ${item.iconBg}
												transform transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] z-10
												group-hover:scale-110 group-hover:left-[calc(100%-60px)] md:group-hover:left-[calc(100%-80px)]
												group-focus-visible:scale-110 group-focus-visible:left-[calc(100%-60px)] md:group-focus-visible:left-[calc(100%-80px)]
												${isActive ? 'max-md:scale-110 max-md:!left-[calc(100%-60px)]' : ''}`}
										>
											<Icon size={24} aria-hidden='true' className='md:w-6 md:h-6 w-5 h-5' />
										</div>

										{/* Decorative Background Blob */}
										<div
											aria-hidden='true'
											className={`absolute -right-20 -bottom-20 w-64 h-64 rounded-full transition-opacity duration-500
												opacity-0
												group-hover:opacity-10 group-focus-visible:opacity-10
												${item.iconColor.replace('text-', 'bg-')}
												${isActive ? 'max-md:opacity-10' : ''}`}
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
