/**
 * Tailwind config.
 *
 * @description Tailwind config.
 * @see https://tailwindcss.com/docs/
 * @see https://flowbite.com/docs/
 */
const plugin = require( 'tailwindcss/plugin' )

const config = {
	content : [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@s-8/core/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
	],
	plugins : [
		require( 'flowbite/plugin' ),
		plugin( function ( { matchUtilities, theme } ) {

			matchUtilities(
				{
					'text-shadow' : value => ( {
						textShadow : value,
					} ),
				},
				{ 
					values : theme( 'textShadow' ), 
				},
			)
		
		} ),
	],
	darkMode : 'class',
	theme    : {
		extend : {
			textShadow : {
				sm      : '0 1px 2px var(--tw-shadow-color)',
				DEFAULT : '0 2px 4px var(--tw-shadow-color)',
				lg      : '0 8px 16px var(--tw-shadow-color)',
			},
			colors : {
				/**
				 * Colors of interface.
				 *
				 * @see https://uicolors.app/create
				 * @see https://www.tints.dev/
				 */
				secondary : { 
					'50'  : '#f9f7fd',
					'100' : '#f1edfa',
					'200' : '#e4ddf7',
					'300' : '#d0c3ef',
					'400' : '#b39ce4',
					'500' : '#9676d6',
					'600' : '#7e58c5',
					'700' : '#6a45ab',
					'800' : '#604096',
					'900' : '#4a3172',
					'950' : '#2f1a51',
				},
				primary : { 
					50  : '#FFFDE5',
					100 : '#FFFCCC',
					200 : '#FFF899',
					300 : '#FFF566',
					400 : '#FFF133',
					500 : '#FFED00',
					600 : '#CCBE00',
					700 : '#998F00',
					800 : '#665F00',
					900 : '#333000',
					950 : '#191800',
				},
				gray : {
					50  : '#E6E6E6',
					100 : '#D9D9D9',
					200 : '#BFBFBF',
					300 : '#A6A6A6',
					400 : '#8C8C8C',
					500 : '#737373',
					600 : '#595959',
					700 : '#404040',
					800 : '#262626',
					900 : '#0D0D0D',
					950 : '#000000',
				},
			},
		},
	},
}

module.exports = config
