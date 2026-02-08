import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaWhatsapp, FaInstagram, FaDownload } from 'react-icons/fa';
import React from 'react';
import cvFile from '../assets/file/Hafidz_Zakky_Senior_Front_End_Engineer.pdf';
import User3D from '../components/User3D';

const Contact = () => {
	return (
		<section className='relative py-20 min-h-[50vh] flex items-center justify-center' id='contact'>
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
					I'm currently open to new opportunities and collaborations. Whether you have a project in mind or just want to connect,
					feel free to reach out!
				</p>

				{/* Bento Grid Layout */}
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto mb-16'>
					{/* Large Block - LinkedIn (Replaces Twitter) */}
					<BentoCard
						href='https://www.linkedin.com/in/hafidzzakkyd/'
						className='col-span-1 sm:col-span-2 lg:col-span-2 lg:row-span-2 flex flex-col justify-between bg-[#0077b5] text-white hover:bg-[#006396] min-h-[250px]'
					>
						<div className='flex justify-between items-start w-full'>
							<span className='text-lg font-bold'>LinkedIn</span>
							<FaLinkedin className='text-4xl' />
						</div>
						<div className='text-left mt-8'>
							<h3 className='text-3xl font-bold mb-2'>Connect with me</h3>
							<p className='opacity-90'>Let's grow our professional network.</p>
						</div>
						<div className='absolute -bottom-10 -right-10 opacity-20 transform rotate-12'>
							<FaLinkedin className='text-9xl' />
						</div>
					</BentoCard>

					{/* 3D Model Box (Replaces WhatsApp) */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						className='aspect-square relative overflow-hidden rounded-3xl bg-gradient-to-br from-white via-indigo-50 to-purple-100 dark:from-white/10 dark:via-indigo-900/20 dark:to-purple-900/20 shadow-lg'
					>
						<User3D className='w-full h-full' />
					</motion.div>

					{/* Email (Small) */}
					<BentoCard
						href='mailto:hafidzzakky@gmail.com'
						className='aspect-square flex flex-col justify-center items-center bg-red-500 text-white hover:bg-red-600'
					>
						<FaEnvelope className='text-5xl mb-4' />
						<span className='font-bold text-xl'>Email</span>
					</BentoCard>

					{/* Instagram (Replaces LinkedIn Small) */}
					<BentoCard
						href='https://instagram.com/'
						className='aspect-square flex flex-col justify-center items-center bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 text-white'
					>
						<FaInstagram className='text-5xl mb-4' />
						<span className='font-bold text-xl'>Instagram</span>
					</BentoCard>

					{/* Github (Small) */}
					<BentoCard
						href='https://github.com/hafidzzakky'
						className='aspect-square flex flex-col justify-center items-center bg-[#24292e] text-white hover:bg-[#1b1f23]'
					>
						<FaGithub className='text-5xl mb-4' />
						<span className='font-bold text-xl'>Github</span>
					</BentoCard>
				</div>

				{/* Download CV Button */}
				<motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='mb-16'>
					<motion.a
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.95 }}
						href={cvFile}
						download='Hafidz_Zakky_CV.pdf'
						className='btn btn-secondary btn-lg gap-2 shadow-lg shadow-secondary/30 hover:shadow-secondary/50 transition-all rounded-full text-white px-8'
					>
						<FaDownload /> Download CV
					</motion.a>
				</motion.div>

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

interface BentoCardProps {
	children: React.ReactNode;
	className?: string;
	href: string;
}

const BentoCard: React.FC<BentoCardProps> = ({ children, className, href }) => (
	<motion.a
		href={href}
		target='_blank'
		rel='noopener noreferrer'
		whileHover={{ scale: 1.02 }}
		whileTap={{ scale: 0.98 }}
		className={`relative overflow-hidden rounded-3xl p-8 shadow-lg transition-all duration-300 ${className}`}
	>
		{children}
	</motion.a>
);

export default Contact;
