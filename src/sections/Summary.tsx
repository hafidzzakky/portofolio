import { motion } from 'framer-motion';

const Summary = () => {
	return (
		<section>
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
					Professional Summary
				</motion.h2>
				<motion.div
					variants={{
						hidden: { opacity: 0, y: 20 },
						show: { opacity: 1, y: 0 },
					}}
					className='card bg-base-100/30 backdrop-blur-md shadow-xl border border-white/20 hover:bg-base-100/40 transition-all duration-300'
				>
					<div className='card-body'>
						<p className='text-lg leading-loose text-base-content/90 font-light'>
							Senior Front End Engineer with 6+ years of experience building enterprise React and React Native applications
							using TypeScript. Strong focus on front-end architecture, design-system-driven development, performance
							optimization, SSR/SSG, SEO-aware rendering, testing, accessibility, and secure coding practices. Experienced in
							technical leadership, code reviews, CI/CD pipelines, and improving code quality through ESLint, SonarQube, and
							Lighthouse-driven performance audits.
						</p>
					</div>
				</motion.div>
			</motion.div>
		</section>
	);
};

export default Summary;
