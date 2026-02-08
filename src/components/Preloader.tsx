import { motion } from 'framer-motion';
import gunungan from '../assets/image/traditional/v2/gunungan 1.svg';

const Preloader = () => {
	return (
		<motion.div
			initial={{ opacity: 1 }}
			exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
			className='fixed inset-0 z-[9999] flex items-center justify-center bg-base-100'
		>
			<div className='relative flex flex-col items-center'>
				<motion.div
					initial={{ scale: 0.8, opacity: 0 }}
					animate={{
						scale: [0.8, 1.1, 1],
						opacity: 1,
						transition: { duration: 1.5, ease: 'easeOut' },
					}}
					className='relative z-10'
				>
					<img src={gunungan} alt='Loading...' className='w-32 h-auto drop-shadow-2xl' />
				</motion.div>

				<motion.div
					initial={{ width: 0 }}
					animate={{ width: '100%' }}
					transition={{ duration: 2, ease: 'easeInOut' }}
					className='h-1 bg-primary mt-8 rounded-full w-48 overflow-hidden'
				>
					<div className='h-full w-full bg-primary/30' />
				</motion.div>
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className='mt-4 text-sm font-medium tracking-widest text-base-content/70'
				>
					LOADING
				</motion.p>
			</div>
		</motion.div>
	);
};

export default Preloader;
