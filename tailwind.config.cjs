/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"wb-ivory" : "#FFFFF0",
				"wb-light-gray" : "#D3D3D3",
				"wb-muted-mint" : "#B4D7C9",
				"wb-dark-gray" : "#333333",
				"wb-pale-peach" : "#FFDAB9",
				"quote-green" : "#6CB89A",
			},

			width: {
				"w-600" : "600px",
			},

			height: {
				'100': '25rem',
				'104': '26rem',
				'108': '27rem',
				'112': '28rem',
				'116': '29rem',
				'120': '30rem'
			},

			backgroundImage: theme => ({
				'fade-gradient': 'linear-gradient(rgba(255, 255, 240, 1) 0%, rgba(255, 255, 240, 0.3) 70%, rgba(255, 255, 240, 0) 100%)'
			})

		},
	},
	plugins: [],
}
