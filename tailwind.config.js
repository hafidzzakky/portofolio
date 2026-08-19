/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Plus Jakarta Sans Variable"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
			},
			backgroundSize: {
				'300%': '300%',
			},
			animation: {
				gradient: 'gradient-shift 6s ease infinite',
			},
			keyframes: {
				'gradient-shift': {
					'0%, 100%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
				},
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				// Sampled from the hero artwork (gunungan #b0682d, highlight #ef9344) so the
				// light theme shares one warm identity with it, the way luxury's gold already does.
				mytheme: {
					primary: '#A05E26', // 5.1:1 on base-100, passes AA as text and as a button fill
					'primary-content': '#FFFFFF',
					secondary: '#7C4A1E',
					'secondary-content': '#FFFFFF',
					accent: '#EF9344',
					'accent-content': '#241305',
					neutral: '#2A211B',
					'base-100': '#FCFBF9',
					'base-200': '#F4F1EC',
					'base-300': '#E7E2DA',
					'base-content': '#1C1917',
					info: '#3abff8',
					success: '#36d399',
					warning: '#fbbd23',
					error: '#f87272',
				},
			},
			'luxury',
		],
	},
};
