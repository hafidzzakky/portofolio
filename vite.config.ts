import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig(() => {
	const baseUrl = '/';

	return {
		base: baseUrl,
		plugins: [
			react(),
			VitePWA({
				registerType: 'autoUpdate',
				devOptions: {
					enabled: true,
				},
				includeAssets: [],
				manifest: {
					name: 'Hafidz Zakky - Portfolio',
					short_name: 'Hafidz Porto',
					description: 'Portfolio of Hafidz Zakky, Senior Front End Engineer',
					theme_color: '#09090b',
					background_color: '#09090b',
					start_url: baseUrl,
					scope: baseUrl,
					icons: [
						{
							src: 'pwa-192x192.png',
							sizes: '192x192',
							type: 'image/png',
							purpose: 'any',
						},
						{
							src: 'pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'any',
						},
						{
							src: 'pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
							purpose: 'maskable',
						},
					],
					screenshots: [
						{
							src: 'pwa-192x192.png',
							sizes: '1200x630',
							type: 'image/jpeg',
							form_factor: 'wide',
							label: 'Desktop',
						},
						{
							src: 'pwa-192x192.png',
							sizes: '1200x630',
							type: 'image/jpeg',
							label: 'Mobile',
						},
					],
				},
			}),
		],
		assetsInclude: ['**/*.glb'],
		build: {
			rollupOptions: {
				output: {
					manualChunks: {
						'vendor-motion': ['framer-motion'],
						'vendor-splide': ['@splidejs/react-splide'],
					},
				},
			},
		},
	};
});
