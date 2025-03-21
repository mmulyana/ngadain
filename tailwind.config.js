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
				dark: '#212123',
				background: '#212123',
				backgroundInput: '#161616',
			},
		},
	},
	plugins: [],
}
