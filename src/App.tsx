import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { PiCode, PiBriefcase, PiGraduationCap, PiRocketLaunch, PiEnvelopeSimple } from 'react-icons/pi';
import Hero from './sections/Hero';
// import WorldMap from './sections/WorldMap';
// import Summary from './sections/Summary';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
// import Projects from './sections/Projects';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';
import AbstractBackground from './sections/AbstractBackground';
import Preloader from './components/Preloader';

function App() {
	const { scrollY, scrollYProgress } = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 200]);
	const y2 = useTransform(scrollY, [0, 500], [0, -150]);

	const [isLoading, setIsLoading] = useState(true);
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');

	useEffect(() => {
		// Simulate initial loading time for assets/3D models
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 2000);

		return () => clearTimeout(timer);
	}, []);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 100) {
			setIsHeaderVisible(true);
		} else {
			setIsHeaderVisible(false);
		}
	});

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
					}
				});
			},
			{
				rootMargin: '-40% 0px -40% 0px', // Triggers when the section is in the middle 20% of the viewport
				threshold: 0,
			},
		);

		const sections = ['hero', 'skills', 'experience', 'education', 'projects', 'contact'];
		sections.forEach((section) => {
			const element = document.getElementById(section);
			if (element) {
				observer.observe(element);
			}
		});

		return () => observer.disconnect();
	}, []);

	const scrollToSection = (id: string) => {
		const element = document.getElementById(id);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			// direction: 'vertical', // Default is vertical
			// gestureDirection: 'vertical',
			// smooth: true, // Default is true
			// mouseMultiplier: 1,
			// smoothTouch: false,
			touchMultiplier: 2,
		});

		function raf(time: number) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}

		requestAnimationFrame(raf);

		return () => {
			lenis.destroy();
		};
	}, []);

	return (
		<div className='min-h-screen text-base-content font-sans antialiased selection:bg-primary selection:text-primary-content overflow-hidden relative'>
			<AnimatePresence mode='wait'>{isLoading && <Preloader />}</AnimatePresence>

			{/* Scroll Progress Bar */}
			<motion.div className='fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]' style={{ scaleX: scrollYProgress }} />

			{/* Parallax Background Elements */}
			<motion.div
				style={{ y: y1 }}
				className='fixed top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -z-10 pointer-events-none translate-x-1/3 -translate-y-1/4'
			/>
			<motion.div
				style={{ y: y2 }}
				className='fixed bottom-0 left-0 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] -z-10 pointer-events-none -translate-x-1/3 translate-y-1/4'
			/>

			{/* Abstract Background */}
			<AbstractBackground scrollY={scrollY} />

			{/* World Map Background with Zoom Effect - Disabled for now */}
			{/* <WorldMap scrollY={scrollY} /> */}

			<div className='relative z-10'>
				{/* Sticky Header */}
				<AnimatePresence>
					{isHeaderVisible && (
						<motion.div
							initial={{ opacity: 0, scale: 0.9 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.3 }}
							className='fixed z-50 flex justify-center px-4 left-0 right-0 top-auto bottom-6 md:top-4 md:bottom-auto'
						>
							<div className='px-6 py-2 rounded-full bg-base-100/80 backdrop-blur-md border border-white/20 shadow-lg flex items-center gap-6 md:gap-8'>
								<div
									className='flex items-center gap-2 cursor-pointer'
									onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
								>
									<div className='w-3 h-3 rounded-full bg-primary animate-pulse'></div>
									<span className='text-base-content font-bold text-lg hidden md:block'>Hafidz Zakky D</span>
									<span className='text-base-content font-bold text-lg md:hidden'>HZD</span>
								</div>

								<nav className='flex items-center gap-2 md:gap-4 text-sm font-medium'>
									{[
										{ id: 'skills', icon: PiCode, label: 'Skills' },
										{ id: 'experience', icon: PiBriefcase, label: 'Experience' },
										{ id: 'education', icon: PiGraduationCap, label: 'Education' },
										{ id: 'projects', icon: PiRocketLaunch, label: 'Projects' },
										{ id: 'contact', icon: PiEnvelopeSimple, label: 'Contact' },
									].map((item) => (
										<button
											key={item.id}
											onClick={() => scrollToSection(item.id)}
											className={`relative flex items-center justify-center p-2.5 md:px-4 md:py-2 rounded-full transition-all duration-300 ${
												activeSection === item.id
													? 'bg-primary text-primary-content shadow-lg shadow-primary/25 scale-105'
													: 'text-base-content/60 hover:text-primary hover:bg-base-200/30'
											}`}
											title={item.label}
										>
											<span className='hidden md:inline'>{item.label}</span>
											<span className='md:hidden'>
												<item.icon size={22} />
											</span>
										</button>
									))}
								</nav>
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				<div className='fixed top-4 right-4 z-50'>
					<div className='dropdown dropdown-end'>
						<motion.div
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							tabIndex={0}
							role='button'
							className='btn btn-ghost m-1 bg-base-100/30 backdrop-blur-sm border border-white/10 shadow-lg'
						>
							Theme
							<svg
								width='12px'
								height='12px'
								className='h-2 w-2 fill-current opacity-60 inline-block'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 2048 2048'
							>
								<path d='M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z'></path>
							</svg>
						</motion.div>
						<ul
							tabIndex={0}
							className='dropdown-content z-[1] p-2 shadow-2xl bg-base-300 rounded-box w-52 max-h-96 overflow-y-auto'
						>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Professional'
									value='mytheme'
									defaultChecked
								/>
							</li>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Light'
									value='light'
								/>
							</li>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Dark'
									value='dark'
								/>
							</li>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Cyberpunk'
									value='cyberpunk'
								/>
							</li>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Retro'
									value='retro'
								/>
							</li>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Synthwave'
									value='synthwave'
								/>
							</li>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Luxury'
									value='luxury'
								/>
							</li>
							<li>
								<input
									type='radio'
									name='theme-dropdown'
									className='theme-controller btn btn-sm btn-block btn-ghost justify-start'
									aria-label='Dracula'
									value='dracula'
								/>
							</li>
						</ul>
					</div>
				</div>
				<div className='container mx-auto px-4'>
					<Hero />
					{/* <Summary /> */}
					<Skills />
					<Experience />
					<Education />
				</div>

				{/* <Projects /> */}
				<Showcase />

				<div className='container mx-auto px-4 pb-20'>
					<Contact />
				</div>
			</div>
		</div>
	);
}

export default App;
