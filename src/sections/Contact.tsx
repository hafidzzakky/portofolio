import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram, FaDownload, FaWhatsapp } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { PiCopy, PiCheck } from 'react-icons/pi';
import React, { useState } from 'react';
import cvFile from '../assets/file/Hafidz_Zakky_Senior_Front_End_Engineer-2.pdf';
import portrait from '../assets/image/me/portrait.jpg';
import { useAnalytics } from '../hooks/useAnalytics';
import SectionHeading from '../components/SectionHeading';

const availability = ['Full-time / Remote', 'Freelance / Contract', 'Consultation / Code Review'];

// One accent for the whole section. Brand colours (LinkedIn blue, the Instagram
// gradient, GitHub black) put four foreign hues into a page whose identity is a
// single warm primary, and made the closing section the loudest thing on it.
const tile =
	'group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-base-content/10 bg-base-content/[0.045] p-5 transition-colors duration-300 hover:border-primary/45 hover:bg-base-content/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60';

const tileIcon = 'text-2xl text-base-content/55 transition-colors duration-300 group-hover:text-primary';

const lift = { y: -3 };

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
		<section aria-label='Contact' className='relative py-20 md:py-28' id='contact'>
			<SectionHeading
				title='Get In Touch'
				lead="Open to senior frontend roles, freelance product work, and technical consulting. Share a bit about the role or context and I'll respond with relevant work examples."
			/>

			<ul className='mt-7 flex flex-wrap gap-2'>
				{availability.map((label, index) => (
					<motion.li
						key={label}
						initial={{ opacity: 0, y: 8 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.07 }}
						className='rounded-full border border-base-content/10 px-3 py-1 text-xs font-semibold text-base-content/70'
					>
						{label}
					</motion.li>
				))}
			</ul>

			{/* 6 tiles, 8 slots, no empty cells: portrait holds column 1 across both rows. */}
			<motion.div
				initial='hidden'
				whileInView='shown'
				viewport={{ once: true, amount: 0.2 }}
				transition={{ staggerChildren: 0.07 }}
				className='mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:auto-rows-[170px]'
			>
				<Cell className='col-span-2 lg:col-span-1 lg:row-span-2'>
					<figure className='group relative h-full overflow-hidden rounded-2xl bg-base-300 max-lg:aspect-square'>
						<img
							src={portrait}
							alt='Hafidz Zakky D'
							loading='lazy'
							decoding='async'
							className='h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105'
						/>
						<figcaption className='absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 text-left'>
							<span className='block text-sm font-semibold text-white'>Hafidz Zakky D</span>
							<span className='block text-xs text-white/75'>Senior Front End Engineer</span>
						</figcaption>
					</figure>
				</Cell>

				<Cell className='col-span-2'>
					<motion.a
						whileHover={lift}
						href='https://www.linkedin.com/in/hafidzzakkyd/'
						target='_blank'
						rel='noopener noreferrer'
						aria-label='Connect on LinkedIn'
						onClick={() => trackSocialClick('LinkedIn')}
						className={`${tile} h-full bg-gradient-to-br from-primary/[0.14] via-transparent to-transparent max-lg:min-h-[170px]`}
					>
						<FaLinkedin aria-hidden='true' className={tileIcon} />
						<div>
							<h3 className='text-xl font-bold tracking-tight text-base-content md:text-2xl'>LinkedIn</h3>
							<p className='mt-1 max-w-[34ch] text-sm leading-relaxed text-base-content/70'>
								The fastest place to see my full track record and reach out about a role.
							</p>
						</div>
					</motion.a>
				</Cell>

				<Cell>
					<motion.div whileHover={lift} className={`${tile} h-full max-lg:min-h-[150px]`}>
						{/* The copy button is a sibling, not a child of the link: a <button>
						    inside an <a> is invalid and breaks keyboard order. */}
						<a
							href='mailto:hafidzzakky@gmail.com'
							aria-label='Send email to Hafidz'
							onClick={() => trackContactClick('Email')}
							className='absolute inset-0 z-0'
						/>
						<FaEnvelope aria-hidden='true' className={tileIcon} />
						<div className='pointer-events-none'>
							<h3 className='font-bold tracking-tight text-base-content'>Email</h3>
							{/* The address only fits once the tile is a quarter of the grid. */}
							<p className='mt-0.5 text-xs text-base-content/70'>
								<span className='lg:hidden'>Tap to write, or copy it</span>
								<span className='hidden lg:inline'>hafidzzakky@gmail.com</span>
							</p>
						</div>
						<button
							type='button'
							aria-label={copied ? 'Email address copied' : 'Copy email address'}
							onClick={copyEmail}
							className='absolute right-3 top-3 z-10 rounded-lg border border-base-content/10 bg-base-100/60 p-2 text-base-content/70 transition-colors hover:border-primary/45 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60'
						>
							{copied ? <PiCheck aria-hidden='true' /> : <PiCopy aria-hidden='true' />}
						</button>
						<span aria-live='polite' className='sr-only'>
							{copied ? 'Email address copied to clipboard' : ''}
						</span>
					</motion.div>
				</Cell>

				<Cell>
					<TileLink
						href='https://wa.me/6285602577078'
						ariaLabel='Contact via WhatsApp'
						label='WhatsApp'
						note='Usually the quickest reply'
						icon={FaWhatsapp}
						onClick={() => trackContactClick('WhatsApp')}
					/>
				</Cell>

				<Cell>
					<TileLink
						href='https://github.com/hafidzzakky'
						ariaLabel='View GitHub profile'
						label='GitHub'
						note='Side projects and experiments'
						icon={FaGithub}
						onClick={() => trackSocialClick('GitHub')}
					/>
				</Cell>

				<Cell>
					<TileLink
						href='https://instagram.com/hafidzzakkyd'
						ariaLabel='Follow on Instagram'
						label='Instagram'
						note='Life outside the editor'
						icon={FaInstagram}
						onClick={() => trackSocialClick('Instagram')}
					/>
				</Cell>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
				className='mt-14 flex flex-col gap-6 border-t border-base-content/10 pt-10 sm:flex-row sm:items-center sm:justify-between'
			>
				<motion.a
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}
					href={cvFile}
					download='Hafidz_Zakky_CV.pdf'
					aria-label='Download CV as PDF'
					onClick={trackCvDownload}
					className='btn btn-outline gap-2 self-start rounded-full px-7 hover:bg-base-content hover:text-base-100'
				>
					<FaDownload aria-hidden='true' /> Download CV
				</motion.a>
				<p className='max-w-[38ch] text-sm leading-relaxed text-base-content/70'>
					Based in Jakarta, Indonesia. Comfortable working remote across timezones.
				</p>
			</motion.div>

			<footer className='mt-14 text-sm text-base-content/65'>
				<p>© {new Date().getFullYear()} Hafidz Zakky D. All rights reserved.</p>
			</footer>
		</section>
	);
};

/** Stagger child wrapper so the grid reveals in reading order. */
const Cell: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
	<motion.div
		variants={{ hidden: { opacity: 0, y: 20 }, shown: { opacity: 1, y: 0 } }}
		transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
		className={className}
	>
		{children}
	</motion.div>
);

interface TileLinkProps {
	href: string;
	ariaLabel: string;
	label: string;
	note: string;
	icon: IconType;
	onClick?: () => void;
}

const TileLink: React.FC<TileLinkProps> = ({ href, ariaLabel, label, note, icon: Icon, onClick }) => (
	<motion.a
		whileHover={lift}
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		aria-label={ariaLabel}
		onClick={onClick}
		className={`${tile} h-full max-lg:min-h-[150px]`}
	>
		<Icon aria-hidden='true' className={tileIcon} />
		<div>
			<h3 className='font-bold tracking-tight text-base-content'>{label}</h3>
			<p className='mt-0.5 text-xs text-base-content/70'>{note}</p>
		</div>
	</motion.a>
);

export default Contact;
