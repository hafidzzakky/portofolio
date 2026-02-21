import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaMapMarkerAlt, FaDownload } from 'react-icons/fa';
import { SiReact, SiTypescript, SiTailwindcss, SiNextdotjs, SiNodedotjs, SiVite, SiNuxtdotjs, SiVuedotjs } from 'react-icons/si';
import { useState, useEffect } from 'react';
import HeroParallax from '../components/HeroParallax';
import cvFile from '../assets/file/Hafidz_Zakky_Senior_Front_End_Engineer.pdf';

const Hero = ({ theme }: { theme: string }) => {
	const roles = [
		'Senior Front End Engineer',
		'React Specialist',
		'UI/UX Enthusiast',
		'Building Scalable Web Applications',
		'Building Scalable Mobile Applications',
	];
	const [roleIndex, setRoleIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setRoleIndex((prev) => (prev + 1) % roles.length);
		}, 3000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section id='hero' className='min-h-[100vh] flex items-start pt-[20px] lg:items-center lg:pt-0 relative'>
			<div className='grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full'>
				<motion.div
					initial={{ opacity: 0, x: -50 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.8 }}
					className='lg:col-span-7 flex flex-col items-start'
				>
					<h2 className='text-xl md:text-2xl font-medium text-primary mb-2 tracking-wide'>Hello, I am</h2>
					<h1 className='text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4 text-base-content leading-tight'>
						Hafidz <br /> Zakky D
					</h1>

					<div className='min-h-[8rem] md:min-h-[3rem] mb-6 overflow-hidden flex items-center lg:items-start'>
						<AnimatePresence mode='wait'>
							<motion.h3
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
							</motion.h3>
						</AnimatePresence>
					</div>

					<p className='text-lg md:text-xl text-base-content/80 max-w-2xl mb-8 leading-relaxed font-light'>
						Specializing in <span className='font-semibold text-primary'>React</span>,{' '}
						<span className='font-semibold text-primary'>TypeScript</span>, and{' '}
						<span className='font-semibold text-primary'>Frontend Architecture</span>. Building scalable enterprise applications
						with a focus on performance, design systems, and user experience.
					</p>

					<div className='flex flex-wrap gap-4'>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href='https://www.linkedin.com/in/hafidzzakkyd/'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-primary btn-lg gap-2 shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-all'
						>
							<FaLinkedin /> LinkedIn
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href='https://github.com/hafidzzakky'
							target='_blank'
							rel='noopener noreferrer'
							className='btn btn-outline btn-lg gap-2 backdrop-blur-sm hover:bg-base-content hover:text-base-100 transition-all'
						>
							<FaGithub /> GitHub
						</motion.a>
						<motion.a
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
							href={cvFile}
							download='Hafidz_Zakky_CV.pdf'
							className='btn btn-secondary btn-lg gap-2 shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all text-white'
						>
							<FaDownload /> Download CV
						</motion.a>
					</div>

					<div className='flex flex-wrap gap-6 mt-12 text-base-content/70 font-mono text-sm'>
						<motion.div
							whileHover={{ scale: 1.05, borderColor: 'rgba(var(--p), 0.8)', backgroundColor: 'rgba(var(--b2), 0.8)' }}
							className='flex items-center gap-2 px-3 py-1 rounded-full bg-base-200/50 backdrop-blur-sm border border-base-300 transition-all cursor-default'
						>
							<FaMapMarkerAlt className='text-primary' /> <span>Jakarta, Indonesia</span>
						</motion.div>
					</div>

					{/* Tech Stack Marquee */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ delay: 0.5, duration: 0.8 }}
						className='mt-12 w-full flex flex-col items-center lg:items-start'
					>
						<p className='text-sm text-base-content font-mono mb-4 uppercase tracking-widest text-center lg:text-left'>
							Tech Stack
						</p>
						<div className='flex gap-6 text-3xl text-base-content/40 justify-center lg:justify-start w-full lg:w-auto flex-wrap'>
							<motion.div
								whileHover={{ scale: 1.2, color: '#61DAFB', opacity: 1 }}
								className='transition-all cursor-pointer'
								title='React'
							>
								<SiReact />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, color: '#3178C6', opacity: 1 }}
								className='transition-all cursor-pointer'
								title='TypeScript'
							>
								<SiTypescript />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, color: '#000000', opacity: 1 }} // Next.js is black/white
								className='transition-all cursor-pointer dark:hover:text-white'
								title='Next.js'
							>
								<SiNextdotjs />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, color: '#06B6D4', opacity: 1 }}
								className='transition-all cursor-pointer'
								title='Tailwind CSS'
							>
								<SiTailwindcss />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, color: '#339933', opacity: 1 }}
								className='transition-all cursor-pointer'
								title='Node.js'
							>
								<SiNodedotjs />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, color: '#646CFF', opacity: 1 }}
								className='transition-all cursor-pointer'
								title='Vite'
							>
								<SiVite />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, color: '#4FC08D', opacity: 1 }}
								className='transition-all cursor-pointer'
								title='Vue.js'
							>
								<SiVuedotjs />
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.2, color: '#00DC82', opacity: 1 }}
								className='transition-all cursor-pointer'
								title='Nuxt.js'
							>
								<SiNuxtdotjs />
							</motion.div>
						</div>
					</motion.div>

					{/* Scroll Down Indicator - Mobile Only */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 1 }}
						className='lg:hidden mt-16 w-full flex flex-col items-center gap-2'
					>
						<span className='text-xs uppercase tracking-widest opacity-50'>Scroll Down</span>
						<div className='w-[30px] h-[50px] rounded-full border-2 border-base-content/30 flex justify-center p-2'>
							<motion.div
								animate={{ y: [0, 12, 0] }}
								transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
								className='w-1.5 h-1.5 rounded-full bg-primary mb-1'
							/>
						</div>
					</motion.div>
				</motion.div>

				<div className='hidden lg:block lg:col-span-5'>
					<HeroParallax />
				</div>
			</div>

			{/* Scroll Down Indicator - Desktop Only */}
			<motion.div
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 1, duration: 1 }}
				className='hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2'
			>
				<span className='text-xs uppercase tracking-widest opacity-50'>Scroll Down</span>
				<div className='w-[30px] h-[50px] rounded-full border-2 border-base-content/30 flex justify-center p-2'>
					<motion.div
						animate={{ y: [0, 12, 0] }}
						transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
						className='w-1.5 h-1.5 rounded-full bg-primary mb-1'
					/>
				</div>
			</motion.div>
		</section>
	);
};

export default Hero;
