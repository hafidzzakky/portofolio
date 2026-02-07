import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useTransform, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import Hero from './sections/Hero';
// import WorldMap from './sections/WorldMap';
import Summary from './sections/Summary';
import Skills from './sections/Skills';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import AbstractBackground from './sections/AbstractBackground';

function App() {
	const { scrollY, scrollYProgress } = useScroll();
	const y1 = useTransform(scrollY, [0, 500], [0, 200]);
	const y2 = useTransform(scrollY, [0, 500], [0, -150]);

	const [isHeaderVisible, setIsHeaderVisible] = useState(false);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		if (latest > 100) {
			setIsHeaderVisible(true);
		} else {
			setIsHeaderVisible(false);
		}
	});

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
							initial={{ y: -100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -100, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className='fixed top-4 left-4 z-50'
						>
							<div className='px-6 py-2 rounded-full bg-base-100/30 backdrop-blur-md border border-white/20 shadow-lg text-base-content font-bold text-lg flex items-center gap-2'>
								<div className='w-3 h-3 rounded-full bg-primary animate-pulse'></div>
								Hafidz Zakky D
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
				<div className='container mx-auto px-4 py-8 md:py-16 space-y-24 md:space-y-32'>
					<Hero />
					<Summary />
					<Skills />
					<Experience />
					<Education />
				</div>

				<Projects />
				
				<div className='container mx-auto px-4 py-8 md:py-16'>
					<Contact />
				</div>

				<footer className='footer footer-center p-10 bg-base-200/50 text-base-content rounded mt-20 backdrop-blur-sm'>
					<aside>
						<p>Copyright © {new Date().getFullYear()} - All right reserved by Hafidz Zakky D</p>
					</aside>
				</footer>
			</div>
		</div>
	);
}

export default App;
