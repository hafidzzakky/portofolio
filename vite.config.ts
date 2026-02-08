import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
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
				includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
				manifest: {
					name: 'Hafidz Zakky - Portfolio',
					short_name: 'Hafidz Porto',
					description: 'Portfolio of Hafidz Zakky, Senior Front End Engineer',
					theme_color: '#ffffff',
					start_url: baseUrl,
					scope: baseUrl,
					icons: [
						{
							src: 'pwa-192x192.png',
							sizes: '192x192',
							type: 'image/png',
						},
						{
							src: 'pwa-512x512.png',
							sizes: '512x512',
							type: 'image/png',
						},
					],
					screenshots: [
						{
							src: 'og-image.jpg',
							sizes: '1200x630',
							type: 'image/jpeg',
							form_factor: 'wide',
							label: 'Desktop',
						},
						{
							src: 'og-image.jpg',
							sizes: '1200x630',
							type: 'image/jpeg',
							label: 'Mobile',
						},
					],
				},
			}),
		],
		assetsInclude: ['**/*.glb'],
	};
});
