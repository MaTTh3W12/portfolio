/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				cyan: {
					"50": "#ededed",
					"100": "#cffafe",
					"200": "#a5f3fc",
					"300": "#a5f3fc",
					"400": "#22d3ee",
					"500": "#06b6d4",
					"600": "#0891b8",
					"700": "#0e7490",
					"800": "#155e75",
					"900": "#164e63",
					"950": "#083344",
				}
			}
		},
	},
	plugins: [],
}
