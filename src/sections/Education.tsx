import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
	return (
		<section id='education' className='py-20'>
			<motion.div
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.3 }}
				variants={{
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							staggerChildren: 0.2,
						},
					},
				}}
				className='will-change-[opacity,transform]'
			>
				<motion.h2
					variants={{
						hidden: { opacity: 0, y: 20 },
						show: { opacity: 1, y: 0 },
					}}
					className='text-3xl font-bold mb-8 border-b-4 border-primary inline-block pb-1'
				>
					Education
				</motion.h2>

				<motion.div
					variants={{
						hidden: { opacity: 0, y: 20 },
						show: { opacity: 1, y: 0 },
					}}
					whileHover={{ y: -5, transition: { duration: 0.3 } }}
					className='card bg-base-100/30 backdrop-blur-md shadow-sm hover:bg-base-100/40 transition-colors duration-300 [html[data-theme=luxury]_&]:bg-[rgba(255,255,255,0.05)] [html[data-theme=luxury]_&]:backdrop-blur-[10px] [html[data-theme=luxury]_&]:shadow-[0_4px_30px_rgba(0,0,0,0.1)] [html[data-theme=luxury]_&]:border-none [html[data-theme=luxury]_&]:hover:bg-[rgba(255,255,255,0.1)]'
				>
					<div className='card-body p-6 flex flex-col md:flex-row items-start gap-6'>
						<div className='text-primary p-4 bg-primary/10 rounded-2xl shadow-lg backdrop-blur-sm'>
							<FaGraduationCap size={32} />
						</div>
						<div className='flex-1'>
							<div className='flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2'>
								<h3 className='text-xl md:text-2xl font-bold'>Bachelor of Science in Informatics Engineering</h3>
								<span className='inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold'>
									<span className='w-1.5 h-1.5 rounded-full bg-primary/70'></span>
									2013 - 2017
								</span>
							</div>
							<p className='text-lg text-primary font-medium mb-1'>Dian Nuswantoro University, Semarang</p>
							<p className='text-base text-base-content/70'>
								Focused on software engineering, algorithms, and web development.
							</p>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Education;
