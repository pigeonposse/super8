/**
 * Tailwind config.
 *
 * @description Tailwind config.
 * @see https://tailwindcss.com/docs/
 * @see https://flowbite.com/docs/
 */

module.exports = {
	presets : [
		require( '@s-8/core/tailwind-config' ),
	],
	content : [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/@s-8/core/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-fa/**/*.{html,js,svelte,ts}',
		'./node_modules/svelte-codemirror-editor/**/*.{html,js,svelte,ts}',
	],
	important : '#pp-s8-content',
	darkMode  : 'media',
}
