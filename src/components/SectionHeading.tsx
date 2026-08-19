import { motion } from 'framer-motion';

type SectionHeadingProps = {
	title: string;
	lead?: string;
	level?: 2 | 3;
	align?: 'left' | 'center';
	className?: string;
};

/**
 * Shared section header: headline + a rule that draws itself on entry
 * (marks where a new section starts) + optional lead paragraph.
 */
const SectionHeading = ({ title, lead, level = 2, align = 'left', className = '' }: SectionHeadingProps) => {
	const Tag = level === 2 ? 'h2' : 'h3';
	const centered = align === 'center';

	return (
		<motion.div
			initial={{ opacity: 0, y: 16 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.6 }}
			transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
			className={`will-change-[opacity,transform] ${centered ? 'flex flex-col items-center text-center' : ''} ${className}`}
		>
			<Tag
				className={`font-bold tracking-tight text-base-content ${
					level === 2 ? 'text-[clamp(1.85rem,5vw,3.25rem)] leading-[1.05]' : 'text-[clamp(1.35rem,3vw,2rem)] leading-tight'
				}`}
			>
				{title}
			</Tag>
			<motion.span
				aria-hidden='true'
				initial={{ scaleX: 0 }}
				whileInView={{ scaleX: 1 }}
				viewport={{ once: true }}
				transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
				className={`mt-4 block h-[3px] rounded-full bg-primary ${centered ? 'origin-center' : 'origin-left'} ${
					level === 2 ? 'w-14' : 'w-9'
				}`}
			/>
			{lead && <p className='mt-5 max-w-[62ch] leading-relaxed text-base-content/75'>{lead}</p>}
		</motion.div>
	);
};

export default SectionHeading;
