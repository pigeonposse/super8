/**
 * Tailwind config.
 *
 * @description Tailwind config.
 * @see https://tailwindcss.com/docs/
 * @see https://flowbite.com/docs/
 */

const config = {
	content : [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@s-8/core/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	presets : [
		require( '@s-8/core/tailwind-config' ),
	],
	darkMode : 'media',
	// plugins : [
	// 	require( 'flowbite/plugin' ),
	// ],
	// theme    : {
	// 	extend : {
	// 		colors : {
	// 			/**
	// 			 * Colors of interface.
	// 			 *
	// 			 * @see https://uicolors.app/create
	// 			 * @see https://www.tints.dev/
	// 			 */
	// 			secondary : { 
	// 				'50'  : '#f9f7fd',
	// 				'100' : '#f1edfa',
	// 				'200' : '#e4ddf7',
	// 				'300' : '#d0c3ef',
	// 				'400' : '#b39ce4',
	// 				'500' : '#9676d6',
	// 				'600' : '#7e58c5',
	// 				'700' : '#6a45ab',
	// 				'800' : '#604096',
	// 				'900' : '#4a3172',
	// 				'950' : '#2f1a51',
	// 			},
	// 			primary : { 
	// 				50  : '#FFFDE5',
	// 				100 : '#FFFCCC',
	// 				200 : '#FFF899',
	// 				300 : '#FFF566',
	// 				400 : '#FFF133',
	// 				500 : '#FFED00',
	// 				600 : '#CCBE00',
	// 				700 : '#998F00',
	// 				800 : '#665F00',
	// 				900 : '#333000',
	// 				950 : '#191800',
	// 			},
	// 			// gray : {
	// 			// 	50  : '#E3E4ED',
	// 			// 	100 : '#CACCDD',
	// 			// 	200 : '#9598BC',
	// 			// 	300 : '#606597',
	// 			// 	400 : '#515580',
	// 			// 	500 : '#45496D',
	// 			// 	600 : '#373A57',
	// 			// 	700 : '#2A2C41',
	// 			// 	800 : '#1C1D2C',
	// 			// 	900 : '#0E0F16',
	// 			// 	950 : '#060609',
	// 			// },
	// 			// web gray
	// 			gray : {
	// 				50  : '#E6E6E6',
	// 				100 : '#D9D9D9',
	// 				200 : '#BFBFBF',
	// 				300 : '#A6A6A6',
	// 				400 : '#8C8C8C',
	// 				500 : '#737373',
	// 				600 : '#595959',
	// 				700 : '#404040',
	// 				800 : '#262626',
	// 				900 : '#0D0D0D',
	// 				950 : '#000000',
	// 			},
	// 		},
	// 	},
	// },
}

module.exports = config
