import { motion, useTransform } from 'framer-motion';
import type { MotionValue } from 'framer-motion';

interface AbstractBackgroundProps {
	scrollY: MotionValue<number>;
}

const AbstractBackground = ({ scrollY }: AbstractBackgroundProps) => {
	const rotate = useTransform(scrollY, [0, 1000], [0, 45]);
	const scale = useTransform(scrollY, [0, 1000], [1, 1.5]);
	const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
	const y2 = useTransform(scrollY, [0, 1000], [0, -200]);
	const opacity = useTransform(scrollY, [0, 500], [0.5, 0.2]);

	return (
		<div className='fixed inset-0 w-full h-full -z-20 pointer-events-none overflow-hidden'>
			<motion.div
				style={{ rotate, scale, y: y1, opacity }}
				className='absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-[100px] will-change-transform'
			/>

			<motion.div
				style={{ rotate: rotate, scale, y: y2, opacity }}
				className='absolute bottom-[-20%] right-[-10%] w-[80vw] h-[80vw] rounded-full bg-gradient-to-tl from-secondary/20 to-primary/20 blur-[100px] will-change-transform'
			/>

			<div
				className='absolute inset-0 opacity-20'
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
				}}
			/>

			<motion.div
				animate={{
					y: [0, -50, 0],
					rotate: [0, 10, 0],
				}}
				transition={{
					duration: 20,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute top-[20%] right-[20%] w-64 h-64 border border-white/5 rounded-full backdrop-blur-3xl'
			/>

			<motion.div
				animate={{
					y: [0, 50, 0],
					rotate: [0, -10, 0],
				}}
				transition={{
					duration: 25,
					repeat: Infinity,
					ease: 'easeInOut',
				}}
				className='absolute bottom-[20%] left-[20%] w-96 h-96 border border-white/5 rounded-full backdrop-blur-3xl'
			/>
		</div>
	);
};

export default AbstractBackground;
