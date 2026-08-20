import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';
import SectionHeading from '../components/SectionHeading';

const focusAreas = ['Software Engineering', 'Algorithms', 'Web Development'];

const Education = () => {
	return (
		<section id='education' aria-label='Education' className='py-20 md:py-28'>
			<SectionHeading title='Education' />

			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.4 }}
				transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
				className='group mt-12 grid gap-10 border-t border-base-content/10 pt-10 md:grid-cols-12 md:gap-14 will-change-[opacity,transform]'
			>
				{/* Years, stacked and joined by a rule that grows on entry */}
				<div className='flex items-center gap-5 md:col-span-3 md:flex-col md:items-start md:gap-3'>
					<span className='text-5xl font-bold leading-none tabular-nums tracking-tight text-base-content/25 transition-colors duration-500 group-hover:text-primary/70 md:text-7xl'>
						2013
					</span>
					<motion.span
						aria-hidden='true'
						initial={{ scaleX: 0, scaleY: 0 }}
						whileInView={{ scaleX: 1, scaleY: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
						className='h-px w-10 origin-left bg-primary/60 md:ml-2 md:h-16 md:w-px md:origin-top'
					/>
					<span className='text-5xl font-bold leading-none tabular-nums tracking-tight text-base-content/25 transition-colors duration-500 group-hover:text-primary/70 md:text-7xl'>
						2017
					</span>
				</div>

				<div className='md:col-span-9'>
					<span
						aria-hidden='true'
						className='inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-500 group-hover:scale-110'
					>
						<FaGraduationCap size={20} />
					</span>
					<h3 className='mt-5 text-2xl font-bold leading-tight tracking-tight text-base-content md:text-4xl'>
						Bachelor of Science in Informatics Engineering
					</h3>
					<p className='mt-3 text-lg font-medium text-primary'>Dian Nuswantoro University, Semarang</p>
					<p className='mt-4 max-w-[58ch] leading-relaxed text-base-content/75'>
						Four years spent on the fundamentals that still hold up daily: data structures, systems thinking, and building
						for the web.
					</p>

					<ul className='mt-6 flex flex-wrap gap-x-6 gap-y-2'>
						{focusAreas.map((area, index) => (
							<motion.li
								key={area}
								initial={{ opacity: 0, y: 8 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.4, delay: 0.25 + index * 0.08 }}
								className='text-sm font-medium text-base-content/70'
							>
								{area}
							</motion.li>
						))}
					</ul>
				</div>
			</motion.div>
		</section>
	);
};

export default Education;
