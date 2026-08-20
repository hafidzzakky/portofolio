import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDownload, FaWhatsapp } from 'react-icons/fa';
import { PiCopy, PiCheck } from 'react-icons/pi';
import React, { useState } from 'react';
import cvFile from '../assets/file/Hafidz_Zakky_Senior_Front_End_Engineer.pdf';
import portrait from '../assets/image/me/portrait.jpg';
import { useAnalytics } from '../hooks/useAnalytics';
import SectionHeading from '../components/SectionHeading';

const Contact = () => {
	const { trackCvDownload, trackSocialClick, trackContactClick } = useAnalytics();
	const [copied, setCopied] = useState(false);

	const copyEmail = () => {
		navigator.clipboard.writeText('hafidzzakky@gmail.com').then(() => {
			setCopied(true);
			trackContactClick('Email Copy');
			setTimeout(() => setCopied(false), 2000);
		});
	};

	return (
		<section aria-label='Contact' className='relative flex min-h-[50vh] items-center justify-center py-20 md:py-28' id='contact'>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.2 }}
				transition={{ duration: 0.6, ease: 'easeOut' }}
				className='z-10 w-full text-center'
			>
				<SectionHeading
					title='Get In Touch'
					align='center'
					className='mb-12'
					lead="Open to senior frontend roles, freelance product work, and technical consulting. Share a bit about the role or context and I'll respond with relevant work examples."
				/>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-4'>
					<BentoCard
						href='https://www.linkedin.com/in/hafidzzakkyd/'
						ariaLabel='Connect on LinkedIn'
						className='col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between bg-[#0077b5] text-white hover:bg-[#006396] min-h-[250px]'
						onClick={() => trackSocialClick('LinkedIn')}
					>
						<div className='flex justify-between items-start w-full'>
							<span className='text-lg font-bold'>LinkedIn</span>
							<FaLinkedin aria-hidden='true' className='text-4xl' />
						</div>
						<div className='text-left mt-8'>
							<h3 className='text-3xl font-bold mb-2'>Connect with me</h3>
							<p className='opacity-90'>Let's grow our professional network.</p>
						</div>
						<div aria-hidden='true' className='absolute -bottom-10 -right-10 opacity-20 transform rotate-12'>
							<FaLinkedin className='text-9xl' />
						</div>
					</BentoCard>

					<motion.figure
						whileHover={{ scale: 1.02 }}
						className='group relative order-first aspect-square overflow-hidden rounded-2xl bg-base-300 shadow-lg sm:order-none'
					>
						<img
							src={portrait}
							alt='Hafidz Zakky D'
							loading='lazy'
							decoding='async'
							className='h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110'
						/>
						<figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 text-left'>
							<span className='block text-sm font-semibold text-white'>Hafidz Zakky D</span>
							<span className='block text-xs text-white/70'>Senior Front End Engineer</span>
						</figcaption>
					</motion.figure>

					<div className='aspect-square relative overflow-hidden rounded-2xl bg-red-500 text-white shadow-lg'>
						<motion.a
							href='mailto:hafidzzakky@gmail.com'
							aria-label='Send email to Hafidz'
							onClick={() => trackContactClick('Email')}
							whileHover={{ scale: 1.02 }}
							whileTap={{ scale: 0.98 }}
							className='flex flex-col justify-center items-center w-full h-full p-8 transition-all duration-300 hover:bg-red-600'
						>
							<FaEnvelope aria-hidden='true' className='text-5xl mb-4' />
							<span className='font-bold text-xl'>Email</span>
						</motion.a>
						<motion.button
							aria-label={copied ? 'Email copied!' : 'Copy email address'}
							onClick={copyEmail}
							whileTap={{ scale: 0.9 }}
							className='absolute top-3 right-3 p-2 rounded-xl bg-white/20 hover:bg-white/30 backdrop-blur-sm transition-colors'
						>
							{copied
								? <PiCheck aria-hidden='true' className='text-lg' />
								: <PiCopy aria-hidden='true' className='text-lg' />
							}
						</motion.button>
					</div>

					<BentoCard
						href='https://instagram.com/hafidzzakkyd'
						ariaLabel='Follow on Instagram'
						className='aspect-square flex flex-col justify-center items-center bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white'
						onClick={() => trackSocialClick('Instagram')}
					>
						<FaInstagram aria-hidden='true' className='text-5xl mb-4' />
						<span className='font-bold text-xl'>Instagram</span>
					</BentoCard>

					<BentoCard
						href='https://github.com/hafidzzakky'
						ariaLabel='View GitHub profile'
						className='aspect-square flex flex-col justify-center items-center bg-[#24292e] text-white hover:bg-[#1b1f23]'
						onClick={() => trackSocialClick('GitHub')}
					>
						<FaGithub aria-hidden='true' className='text-5xl mb-4' />
						<span className='font-bold text-xl'>Github</span>
					</BentoCard>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='max-w-5xl mx-auto mb-14'
				>
					<div className='border-t border-base-content/10 pt-10 text-center'>
						<h3 className='mb-4 text-2xl font-bold tracking-tight text-base-content md:text-3xl'>
							Preferred collaboration & availability
						</h3>
						<div className='flex flex-wrap justify-center gap-2 mb-4'>
							{['Full-time / Remote', 'Freelance / Contract', 'Consultation / Code Review'].map((label) => (
								<motion.span
									key={label}
									whileHover={{ scale: 1.05, y: -2 }}
									className='rounded-full bg-base-content/[0.06] px-3 py-1 text-xs font-semibold text-base-content/70 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.07)]'
								>
									{label}
								</motion.span>
							))}
						</div>
						<p className='text-sm text-base-content/80 max-w-2xl mx-auto'>
							Currently open to full-time, freelance, and remote roles. If you're hiring, feel free to share a short
							context, and I'll reply with the most relevant case studies first.
						</p>
						<p className='mt-3 text-xs text-base-content/75 flex flex-wrap items-center justify-center gap-2'>
							<span>Response time: fast. WhatsApp is usually the quickest way to reach me via</span>
							<motion.a
								whileHover={{ scale: 1.05, y: -1 }}
								href='https://wa.me/6285602577078'
								target='_blank'
								rel='noopener noreferrer'
								aria-label='Contact via WhatsApp'
								onClick={() => trackContactClick('WhatsApp')}
							className='inline-flex items-center gap-1 rounded-full bg-[#25D366] text-xs font-semibold text-white px-3 py-1 shadow-sm'
							>
								<FaWhatsapp aria-hidden='true' className='text-sm' />
								<span>WhatsApp</span>
							</motion.a>
						</p>
					</div>
				</motion.div>

				{/* Download CV Button */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, ease: 'easeOut' }}
					className='mb-16'
				>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href={cvFile}
						download='Hafidz_Zakky_CV.pdf'
						aria-label='Download CV as PDF'
						onClick={trackCvDownload}
						className='btn btn-primary btn-lg gap-2 rounded-full px-8 shadow-lg shadow-primary/30 transition-all hover:shadow-primary/50'
					>
						<FaDownload aria-hidden='true' /> Download CV
					</motion.a>
				</motion.div>

				<footer className='mt-16 text-base-content/65 text-sm'>
					<p>© {new Date().getFullYear()} Hafidz Zakky D. All rights reserved.</p>
					<p className='mt-2 flex items-center justify-center gap-2'>
						Made with <span aria-hidden='true' className='text-red-500 animate-pulse'>❤</span><span className='sr-only'>love</span> in Jakarta, Indonesia
					</p>
				</footer>
			</motion.div>
		</section>
	);
};

interface BentoCardProps {
	children: React.ReactNode;
	className?: string;
	href: string;
	ariaLabel: string;
	onClick?: () => void;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className, href, ariaLabel, onClick }) => (
	<motion.a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		aria-label={ariaLabel}
		onClick={onClick}
		whileHover={{ scale: 1.02 }}
		whileTap={{ scale: 0.98 }}
		className={`relative overflow-hidden rounded-2xl p-8 shadow-lg transition-all duration-300 ${className}`}
	>
		{children}
	</motion.a>
);

export default Contact;
