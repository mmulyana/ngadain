/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./features/**/*.{js,jsx,ts,tsx}',
		'./shared/**/*.{js,jsx,ts,tsx}',
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				primary: '#FFEA4A',
				background: '#212123',
				backgroundInput: '#161616',
				backgroundCard: '#373739',
			},
		},
	},
	plugins: [],
}
