import { motion, useMotionValue, useTransform, useScroll } from 'framer-motion';
import { useEffect } from 'react';

import bgBulat from '../assets/image/traditional/v2/bg bulat.svg';
import wayang from '../assets/image/traditional/v2/wayang.svg';
import gunungan from '../assets/image/traditional/v2/gunungan 1.svg';
import gunungan2 from '../assets/image/traditional/v2/gunungan 2.svg';
import awan1 from '../assets/image/traditional/v2/awan 1.svg';
import awan2 from '../assets/image/traditional/v2/awan 2.svg';
import awan3 from '../assets/image/traditional/v2/awan 3.svg';
import awan4 from '../assets/image/traditional/v2/awan 4.svg';
import awan5 from '../assets/image/traditional/v2/awan 5.svg';

const HeroParallax = () => {
	const mouseX = useMotionValue(0);
	const mouseY = useMotionValue(0);
	const { scrollY } = useScroll();

	useEffect(() => {
		const handleMouseMove = (e: MouseEvent) => {
			mouseX.set(e.clientX / window.innerWidth - 0.5);
			mouseY.set(e.clientY / window.innerHeight - 0.5);
		};

		window.addEventListener('mousemove', handleMouseMove);
		return () => window.removeEventListener('mousemove', handleMouseMove);
	}, []);

	// Scroll Layers
	// layerBack: Moves down (positive Y) to simulate distance/sticking
	const layerBack = useTransform(scrollY, [0, 500], [0, 150]);
	// layerMid: Moves down slightly
	const layerMid = useTransform(scrollY, [0, 500], [0, 50]);
	// layerFront: Moves up (negative Y) to simulate closeness/leaving
	const layerFront = useTransform(scrollY, [0, 100], [0, 10]);

	// Parallax Transforms (Mouse + Scroll)

	// Wayang (Front)
	const wayangX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
	const wayangMouseY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
	const wayangY = useTransform([wayangMouseY, layerFront], ([m, s]: number[]) => m + s);

	// Big Gunungan (Mid)
	const gununganBigX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
	const gununganBigMouseY = useTransform(mouseY, [-0.5, 0.5], [20, -20]);
	const gununganBigY = useTransform([gununganBigMouseY, layerMid], ([m, s]: number[]) => m + s);

	// Small Gunungan (Back)
	const gununganSmallX = useTransform(mouseX, [-0.5, 0.5], [20, -20]);
	const gununganSmallMouseY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
	const gununganSmallY = useTransform([gununganSmallMouseY, layerBack], ([m, s]: number[]) => m + s);

	// Circle (Back)
	const circleX = useTransform(mouseX, [-0.5, 0.5], [10, -10]);
	const circleMouseY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
	const circleY = useTransform([circleMouseY, layerBack], ([m, s]: number[]) => m + s);

	// Clouds

	// Awan 1 (Front Right)
	const cloud1X = useTransform(mouseX, [-0.5, 0.5], [-30, 30]);
	const cloud1MouseY = useTransform(mouseY, [-0.5, 0.5], [-5, 5]);
	const cloud1Y = useTransform([cloud1MouseY, layerFront], ([m, s]: number[]) => m + s);

	// Awan 1 (Mid Left - Flipped)
	const cloud2X = useTransform(mouseX, [-0.5, 0.5], [30, -30]);
	const cloud2MouseY = useTransform(mouseY, [-0.5, 0.5], [5, -5]);
	const cloud2Y = useTransform([cloud2MouseY, layerMid], ([m, s]: number[]) => m + s);

	// Awan 5 (Back Left - behind gunungan?)
	const cloud3X = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);
	const cloud3MouseY = useTransform(mouseY, [-0.5, 0.5], [-15, 15]);
	const cloud3Y = useTransform([cloud3MouseY, layerBack], ([m, s]: number[]) => m + s);

	// Awan 2 (Front Right - small)
	const cloud4X = useTransform(mouseX, [-0.5, 0.5], [15, -15]);
	const cloud4MouseY = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
	const cloud4Y = useTransform([cloud4MouseY, layerFront], ([m, s]: number[]) => m + s);

	// Awan 5 (Back Bottom Left)
	const cloud5X = useTransform(mouseX, [-0.5, 0.5], [-25, 25]);
	const cloud5MouseY = useTransform(mouseY, [-0.5, 0.5], [-10, 10]);
	const cloud5Y = useTransform([cloud5MouseY, layerBack], ([m, s]: number[]) => m + s);

	// Awan 4 (Mid Bottom Center)
	const cloud6X = useTransform(mouseX, [-0.5, 0.5], [35, -35]);
	const cloud6MouseY = useTransform(mouseY, [-0.5, 0.5], [10, -10]);
	const cloud6Y = useTransform([cloud6MouseY, layerMid], ([m, s]: number[]) => m + s);

	// Awan 3 (Back Bottom Right)
	const cloud7X = useTransform(mouseX, [-0.5, 0.5], [-20, 20]);
	const cloud7MouseY = useTransform(mouseY, [-0.5, 0.5], [-8, 8]);
	const cloud7Y = useTransform([cloud7MouseY, layerBack], ([m, s]: number[]) => m + s);

	return (
		<motion.div
			initial={{ opacity: 0, scale: 0.8 }}
			animate={{ opacity: 1, scale: 1 }}
			transition={{ duration: 0.8, delay: 0.2 }}
			className='lg:col-span-5 relative h-[500px] flex justify-center items-center perspective-1000'
		>
			{/* Background Circle */}
			<motion.img
				style={{ x: circleX, y: circleY, willChange: 'transform' }}
				src={bgBulat}
				alt='Background Circle'
				className='absolute  w-[450px] md:w-[650px] opacity-100 z-0'
			/>

			{/* Awan 1 */}
			<motion.img
				style={{ x: cloud1X, y: cloud1Y, willChange: 'transform' }}
				src={awan1}
				alt='Cloud small'
				className='absolute opacity-100 z-[3] top-[10px] w-[173px] right-[10px]'
			/>
			<motion.img
				style={{ x: cloud2X, y: cloud2Y, willChange: 'transform' }}
				src={awan1}
				alt='Cloud small'
				className='absolute opacity-100 z-1 top-[20px] w-[150px] left-[10px] scale-x-[-1]'
			/>
			{/* Gunungan 1 */}
			<motion.img
				style={{ x: gununganSmallX, y: gununganSmallY, willChange: 'transform' }}
				src={gunungan2}
				alt='Gunungan small'
				className='absolute opacity-100 z-1 top-[-40px] w-[180px] left-1/3'
			/>
			<motion.img
				style={{ x: cloud3X, y: cloud3Y, willChange: 'transform' }}
				src={awan5}
				alt='Cloud small bottom gunungan 1'
				className='absolute opacity-100 z-2  w-[250px] top-[180px] left-[155px]'
			/>

			<motion.img
				style={{ x: cloud4X, y: cloud4Y, willChange: 'transform' }}
				src={awan2}
				alt='Cloud small'
				className='absolute opacity-100 z-[3] top-[150px] w-[118px] right-[10px]'
			/>

			<motion.img
				style={{ x: gununganBigX, y: gununganBigY, willChange: 'transform' }}
				src={gunungan}
				alt='Gunungan big'
				className='absolute opacity-100 z-2 right-[10px] top-[85px] w-[260px]'
			/>

			<motion.img
				style={{ x: wayangX, y: wayangY, willChange: 'transform' }}
				src={wayang}
				alt='Wayang big'
				className='absolute opacity-100 z-[2] w-[460px] top-[100px] left-[-130px]'
			/>

			<motion.img
				style={{ x: cloud5X, y: cloud5Y, willChange: 'transform' }}
				src={awan5}
				alt='Cloud medium bottom'
				className='absolute opacity-100 z-[1] w-[300px] bottom-[-40px] left-[-65px]'
			/>
			<motion.img
				style={{ x: cloud6X, y: cloud6Y, willChange: 'transform' }}
				src={awan4}
				alt='Cloud big bottom'
				className='absolute opacity-100 z-[4] w-[400px] bottom-[-115px] left-[15px]'
			/>
			<motion.img
				style={{ x: cloud7X, y: cloud7Y, willChange: 'transform' }}
				src={awan3}
				alt='Cloud big bottom right'
				className='absolute opacity-100 z-[3] w-[400px] bottom-[-55px] right-[-40px]'
			/>
		</motion.div>
	);
};

export default HeroParallax;
