import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import React from 'react';

const Contact = () => {
	return (
		<section className='relative py-20 min-h-[50vh] flex items-center justify-center'>
			{/* Background decoration */}
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				<div className='absolute -top-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-30'></div>
				<div className='absolute -bottom-24 -left-24 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30'></div>
			</div>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.8 }}
				className='container mx-auto px-4 text-center z-10'
			>
				<h2 className='text-4xl md:text-5xl font-bold mb-6'>
					<span className='bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary'>Get In Touch</span>
				</h2>

				<p className='text-lg text-base-content/80 max-w-2xl mx-auto mb-12 leading-relaxed'>
					I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to
					connect, feel free to reach out!
				</p>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16'>
					<ContactCard
						icon={<FaEnvelope />}
						title='Email'
						value='hafidzzakky@gmail.com'
						href='mailto:hafidzzakky@gmail.com'
						color='text-red-400'
					/>
					<ContactCard
						icon={<FaLinkedin />}
						title='LinkedIn'
						value='Hafidz Zakky D'
						href='https://www.linkedin.com/in/hafidzzakkyd/'
						color='text-blue-500'
					/>
					<ContactCard
						icon={<FaWhatsapp />}
						title='WhatsApp'
						value='+62 813-9521-2257'
						href='https://wa.me/6281395212257'
						color='text-green-500'
					/>
				</div>

				<div className='flex justify-center gap-8'>
					<SocialLink href='https://github.com/hafidzzakky' icon={<FaGithub />} label='GitHub' />
				</div>

				<div className='mt-16 text-base-content/40 text-sm'>
					<p>© {new Date().getFullYear()} Hafidz Zakky D. All rights reserved.</p>
					<p className='mt-2 flex items-center justify-center gap-2'>
						Made with <span className='text-red-500 animate-pulse'>❤</span> in Jakarta, Indonesia
					</p>
				</div>
			</motion.div>
		</section>
	);
};

interface ContactCardProps {
	icon: React.ReactNode;
	title: string;
	value: string;
	href: string;
	color: string;
}

const ContactCard: React.FC<ContactCardProps> = ({ icon, title, value, href, color }) => (
	<motion.a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		whileHover={{ y: -5 }}
		className='flex flex-col items-center p-8 rounded-2xl bg-base-100/30 backdrop-blur-md border border-white/10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all group'
	>
		<div className={`text-4xl mb-4 ${color} group-hover:scale-110 transition-transform duration-300`}>{icon}</div>
		<h3 className='text-xl font-bold mb-2'>{title}</h3>
		<p className='text-base-content/70 group-hover:text-primary transition-colors'>{value}</p>
	</motion.a>
);

interface SocialLinkProps {
	href: string;
	icon: React.ReactNode;
	label: string;
}

const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
	<motion.a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		whileHover={{ scale: 1.1 }}
		whileTap={{ scale: 0.95 }}
		className='text-3xl text-base-content/60 hover:text-primary transition-colors'
		title={label}
	>
		{icon}
	</motion.a>
);

export default Contact;
