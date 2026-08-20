import { useEffect, useRef, useState } from 'react';
import Lenis from 'lenis';
import { motion, useScroll, useMotionValueEvent, AnimatePresence, MotionConfig } from 'framer-motion';
import { useAnalytics } from './hooks/useAnalytics';
import { PiCode, PiBriefcase, PiGraduationCap, PiRocketLaunch, PiEnvelopeSimple, PiMoonStars, PiSunDim } from 'react-icons/pi';
import Hero from './sections/Hero';
import Skills from './sections/Skills';
import Philosophy from './sections/Philosophy';
import Experience from './sections/Experience';
import Education from './sections/Education';
import Showcase from './sections/Showcase';
import Contact from './sections/Contact';
import Preloader from './components/Preloader';
import StaticAbstractBackground from './sections/StaticAbstractBackground';

const DARK = 'luxury';
const LIGHT = 'mytheme';

function App() {
	const { scrollY, scrollYProgress } = useScroll();

	const [isLoading, setIsLoading] = useState(true);
	const [isHeaderVisible, setIsHeaderVisible] = useState(false);
	const [activeSection, setActiveSection] = useState('hero');
	// Two themes only: luxury (dark) and mytheme (light). Anything else in
	// localStorage is from the old multi-theme picker and falls back to dark.
	const [theme, setTheme] = useState(() => (localStorage.getItem('theme') === LIGHT ? LIGHT : DARK));
	const isDark = theme === DARK;
	const { trackScrollDepth } = useAnalytics();
	const trackedDepths = useRef(new Set<number>());

	useEffect(() => {
		localStorage.setItem('theme', theme);
		document.documentElement.setAttribute('data-theme', theme);

		const color = theme === DARK ? '#09090b' : '#ffffff';
		let metaTheme = document.querySelector('meta[name="theme-color"]');
		if (!metaTheme) {
			metaTheme = document.createElement('meta');
			metaTheme.setAttribute('name', 'theme-color');
			document.head.appendChild(metaTheme);
		}
		metaTheme.setAttribute('content', color);
	}, [theme]);

	useEffect(() => {
		const minDelay = 800;
		const start = Date.now();

		const dismiss = () => {
			const elapsed = Date.now() - start;
			const remaining = Math.max(0, minDelay - elapsed);
			setTimeout(() => setIsLoading(false), remaining);
		};

		if (document.readyState === 'complete') {
			dismiss();
		} else {
			window.addEventListener('load', dismiss, { once: true });
			return () => window.removeEventListener('load', dismiss);
		}
	}, []);

	useMotionValueEvent(scrollY, 'change', (latest) => {
		setIsHeaderVisible(latest > 100);
	});

	useMotionValueEvent(scrollYProgress, 'change', (latest) => {
		[25, 50, 75, 100].forEach((depth) => {
			if (latest * 100 >= depth && !trackedDepths.current.has(depth)) {
				trackedDepths.current.add(depth);
				trackScrollDepth(depth);
			}
		});
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

		const sections = ['hero', 'skills', 'philosophy', 'experience', 'education', 'projects', 'contact'];
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
		// Lenis replaces native scrolling; that is the motion reduced-motion users opt out of.
		if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

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
		<MotionConfig reducedMotion='user'>
		<div className='min-h-screen text-base-content font-sans antialiased selection:bg-primary selection:text-primary-content overflow-x-hidden relative'>
			<a
				href='#main'
				className='sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-primary focus:px-4 focus:py-2 focus:font-semibold focus:text-primary-content'
			>
				Skip to content
			</a>

			<AnimatePresence mode='wait'>{isLoading && <Preloader />}</AnimatePresence>

			{/* Scroll Progress Bar */}
			<motion.div className='fixed top-0 left-0 right-0 h-1 bg-primary origin-left z-[100]' style={{ scaleX: scrollYProgress }} />

			{/* Fixed soft background spots like DaisyUI hero */}
			<div
				className='fixed inset-0 -z-10 pointer-events-none'
				style={{
					background:
						'radial-gradient(circle at 40% 35%, var(--bg-spot-1) -200%, transparent 45%), radial-gradient(circle at 60% 40%, var(--bg-spot-2) -200%, transparent 40%)',
				}}
			/>

			{/* Static abstract background clone (no motion, fixed to viewport) */}
			<StaticAbstractBackground isLuxury={theme === 'luxury'} />


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
							<div className='px-6 py-2 rounded-full bg-base-100 [html[data-theme=luxury]_&]:bg-base-200 shadow-lg flex items-center gap-6 md:gap-8'>
								<div
									className='flex items-center gap-2 cursor-pointer'
									onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
								>
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
													: 'text-base-content/75 hover:text-primary hover:bg-base-200/30'
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
					<motion.button
						type='button'
						role='switch'
						aria-checked={isDark}
						aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
						title={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
						onClick={() => setTheme(isDark ? LIGHT : DARK)}
						whileTap={{ scale: 0.95 }}
						className='relative h-10 w-[76px] rounded-full border border-base-content/10 bg-base-100/60 shadow-lg backdrop-blur-md focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
					>
						<motion.span
							aria-hidden='true'
							animate={{ x: isDark ? 0 : 34 }}
							transition={{ type: 'spring', stiffness: 420, damping: 34 }}
							className='absolute left-1 top-[3px] h-8 w-8 rounded-full bg-primary shadow'
						/>
						<span
							aria-hidden='true'
							className='absolute left-1 top-[3px] z-10 flex h-8 w-8 items-center justify-center'
						>
							<PiMoonStars className={`text-lg ${isDark ? 'text-primary-content' : 'text-base-content/65'}`} />
						</span>
						<span
							aria-hidden='true'
							className='absolute left-1 top-[3px] z-10 flex h-8 w-8 translate-x-[34px] items-center justify-center'
						>
							<PiSunDim className={`text-lg ${isDark ? 'text-base-content/65' : 'text-primary-content'}`} />
						</span>
					</motion.button>
				</div>
				<main id='main' tabIndex={-1}>
					<div className='container mx-auto px-4'>
						<Hero />
						<Skills />
						<Philosophy />
						<Experience />
						<Education />
					</div>

					<Showcase />

					<div className='container mx-auto px-4 pb-20'>
						<Contact />
					</div>
				</main>
			</div>
		</div>
		</MotionConfig>
	);
}

export default App;
