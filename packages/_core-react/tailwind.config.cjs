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
}

module.exports = config
