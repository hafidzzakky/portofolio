import { Canvas } from '@react-three/fiber';
import { useGLTF, Float, OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import userModelPath from '../assets/model/3d/user.glb';

const Model = () => {
	const { scene } = useGLTF(userModelPath);
	// Scale up and move down to show upper body only (centering the face/chest)
	return <primitive object={scene} scale={4.5} position={[0, -7.6, 0]} />;
};

const User3D = ({ className = 'w-full h-[300px] md:h-[400px]' }: { className?: string }) => {
	return (
		<div className={className}>
			<Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5], fov: 40 }}>
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
				<Suspense fallback={null}>
					<Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.1}>
						<Model />
					</Float>
				</Suspense>
				<OrbitControls enableZoom={false} autoRotate={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
			</Canvas>
		</div>
	);
};

export default User3D;
