import { motion, useTransform, MotionValue } from 'framer-motion';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

interface WorldMapProps {
	scrollY: MotionValue<number>;
}

// Jakarta Coordinates
const position: [number, number] = [-6.2088, 106.8456];

// Custom Pulse Icon
const jakartaIcon = L.divIcon({
	className: 'bg-transparent',
	html: `<div class="relative flex h-6 w-6 -translate-x-1/2 -translate-y-1/2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 duration-1000"></span>
          <span class="relative inline-flex rounded-full h-6 w-6 bg-primary/50 backdrop-blur-sm border-2 border-white/50"></span>
          <div class="absolute top-8 left-1/2 -translate-x-1/2 bg-base-100/80 backdrop-blur-md px-3 py-1 rounded-lg border border-white/10 text-xs font-bold shadow-lg whitespace-nowrap text-base-content">
            Jakarta, Indonesia
          </div>
        </div>`,
	iconSize: [24, 24],
	iconAnchor: [12, 12], // Center the icon
});

const WorldMap = ({ scrollY }: WorldMapProps) => {
	// Zoom effect: Scale the entire map container
	const scale = useTransform(scrollY, [0, 1000], [1, 2]);
	const opacity = useTransform(scrollY, [0, 300, 800], [0.4, 0.2, 0]);
	const y = useTransform(scrollY, [0, 1000], [0, 200]);

	return (
		<motion.div style={{ scale, opacity, y }} className='fixed inset-0 w-full h-full -z-20 pointer-events-none'>
			<MapContainer
				center={position}
				zoom={3}
				scrollWheelZoom={false}
				zoomControl={false}
				dragging={false}
				attributionControl={false}
				doubleClickZoom={false}
				className='w-full h-full bg-transparent'
			>
				<TileLayer
					url='https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png'
					className='!opacity-400 dark:!invert dark:!grayscale'
				/>
				<Marker position={position} icon={jakartaIcon} />
			</MapContainer>

			{/* Label for Jakarta */}
			{/* We place this absolute relative to the window because the marker is moving with the map 
                and the map is being scaled. 
                However, Leaflet markers move with the map. 
                If we want a label attached to the marker, we can use a Popup or a custom icon with text.
                Let's stick to the previous separate label or try to bundle it in the icon.
                Bundling in icon is cleaner for transformations.
            */}
		</motion.div>
	);
};

export default WorldMap;
