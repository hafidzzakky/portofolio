import { motion } from 'framer-motion';

const skillCategories = [
	{
		title: 'Frontend',
		skills: ['React', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SCSS', 'SASS'],
	},
	{
		title: 'UI Kits & Styling',
		skills: ['Ant Design', 'Material UI (MUI)', 'DaisyUI', 'Tailwind CSS'],
	},
	{
		title: 'Architecture & Design',
		skills: ['Component-based architecture', 'Reusable UI components', 'Design systems'],
	},
	{
		title: 'Performance, Rendering & SEO',
		skills: ['Lighthouse', 'SSR/SSG', 'SEO for SPA', 'Server-rendered apps'],
	},
	{
		title: 'Testing & Accessibility',
		skills: ['Jest', 'Accessibility (a11y)'],
	},
	{
		title: 'Frontend Tooling & Build',
		skills: ['Vite', 'Webpack', 'Git', 'Docker'],
	},
	{
		title: 'CI/CD, Quality & Security',
		skills: ['GitLab CI/CD', 'ESLint', 'SonarQube', 'Aikido Security'],
	},
];

const Skills = () => {
	const container = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				staggerChildren: 0.1,
			},
		},
	};

	const item = {
		hidden: { opacity: 0, y: 20 },
		show: { opacity: 1, y: 0 },
	};

	return (
		<section>
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, amount: 0.3 }}
				transition={{ duration: 0.5 }}
				className='mb-8 will-change-[opacity,transform]'
			>
				<h2 className='text-3xl font-bold border-b-4 border-primary inline-block pb-1'>Core Technical Skills</h2>
			</motion.div>

			<motion.div
				variants={container}
				initial='hidden'
				whileInView='show'
				viewport={{ once: true, amount: 0.1 }}
				className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 will-change-[opacity]'
			>
				{skillCategories.map((category, index) => (
					<motion.div
						key={index}
						variants={item}
						className='card bg-base-100/30 backdrop-blur-md shadow-xl border border-white/20 hover:bg-base-100/40 hover:-translate-y-1 transition-all duration-300'
					>
						<div className='card-body p-5'>
							<h3 className='card-title text-lg text-primary mb-3'>{category.title}</h3>
							<div className='flex flex-wrap gap-2'>
								{category.skills.map((skill, idx) => (
									<div
										key={idx}
										className='group relative bg-primary/10 hover:bg-primary backdrop-blur-sm border border-primary/10 hover:border-primary rounded-lg px-3 py-2 transition-all duration-300 flex items-center gap-2 cursor-default'
									>
										<div className='w-1.5 h-1.5 rounded-full bg-primary/80 group-hover:bg-primary-content group-hover:shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all'></div>
										<span className='font-medium text-primary group-hover:text-primary-content transition-colors'>
											{skill}
										</span>
									</div>
								))}
							</div>
						</div>
					</motion.div>
				))}
			</motion.div>
		</section>
	);
};

export default Skills;
