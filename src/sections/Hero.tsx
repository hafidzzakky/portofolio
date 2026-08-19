import { motion, AnimatePresence } from 'framer-motion';
import { FaLinkedin, FaDownload } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import HeroParallax from '../components/HeroParallax';
import cvFile from '../assets/file/Hafidz_Zakky_Senior_Front_End_Engineer.pdf';
import { useAnalytics } from '../hooks/useAnalytics';

const roles = [
	'Senior Front End Engineer',
	'React Specialist',
	'UI/UX Enthusiast',
	'Building Scalable Web Applications',
	'Building Scalable Mobile Applications',
];

const Hero = ({ theme }: { theme: string }) => {
	const { trackHeroCta, trackCvDownload } = useAnalytics();
	const [roleIndex, setRoleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRoleIndex((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section
			id='hero'
			aria-label='Hero'
			className='relative flex min-h-[100dvh] items-start pt-[20px] lg:items-center lg:pt-0'
		>
			<div className='grid items-center w-full grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='lg:col-span-7 flex flex-col items-start will-change-[opacity,transform]'
				>
					<h1 className='mb-4 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl text-base-content'>
						Hafidz <br /> Zakky D
					</h1>

					<div className='mb-6 flex min-h-[4rem] items-center overflow-hidden md:min-h-[3rem] lg:items-start'>
						<AnimatePresence mode='wait'>
							<motion.p
								key={roleIndex}
								initial={{ y: 20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								exit={{ y: -20, opacity: 0 }}
								transition={{ duration: 0.5 }}
								className={`text-2xl md:text-3xl font-semibold inline-block ${
									theme === 'luxury' ? 'text-primary' : 'text-secondary'
								}`}
							>
								{roles[roleIndex]}
							</motion.p>
						</AnimatePresence>
					</div>

					<p className='max-w-2xl mb-8 text-lg font-light leading-relaxed md:text-xl text-base-content/80'>
						Based in Jakarta. Specializing in <span className='font-semibold text-primary'>React</span>,{' '}
						<span className='font-semibold text-primary'>TypeScript</span>, and{' '}
						<span className='font-semibold text-primary'>frontend architecture</span> for enterprise applications, with a
						focus on performance and design systems.
					</p>

					<div className='flex flex-wrap gap-4'>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href={cvFile}
							download='Hafidz_Zakky_CV.pdf'
							aria-label='Download CV as PDF'
							onClick={trackCvDownload}
							className='gap-2 transition-all shadow-lg btn btn-primary btn-lg shadow-primary/30 hover:shadow-primary/50'
						>
							<FaDownload aria-hidden='true' /> Download CV
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href='https://www.linkedin.com/in/hafidzzakkyd/'
							target='_blank'
							rel='noopener noreferrer'
							aria-label='Visit LinkedIn profile'
							onClick={() => trackHeroCta('LinkedIn')}
							className='gap-2 transition-all btn btn-outline btn-lg backdrop-blur-sm hover:bg-base-content hover:text-base-100'
						>
							<FaLinkedin aria-hidden='true' /> LinkedIn
						</motion.a>
					</div>
				</motion.div>

				{/* Scaled down rather than dropped on small screens: this is the page's signature asset. */}
				<div className='flex h-[280px] w-full justify-center overflow-hidden sm:h-[420px] lg:col-span-5 lg:h-auto lg:overflow-visible'>
					<div className='w-full origin-top scale-[0.55] sm:scale-[0.8] lg:scale-100'>
						<HeroParallax />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
