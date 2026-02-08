import { Canvas } from '@react-three/fiber';
import { useGLTF, Environment, Float, ContactShadows, OrbitControls } from '@react-three/drei';
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
			<Canvas camera={{ position: [0, 0, 5], fov: 40 }}>
				<ambientLight intensity={0.5} />
				<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
				<Suspense fallback={null}>
					<Float speed={2} rotationIntensity={0.2} floatIntensity={0.2}>
						<Model />
					</Float>
					<Environment preset='city' />
					{/* Shadows moved further down or removed as we focus on upper body */}
					<ContactShadows position={[0, -5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} />
				</Suspense>
				<OrbitControls enableZoom={false} autoRotate={false} minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} />
			</Canvas>
		</div>
	);
};

export default User3D;
