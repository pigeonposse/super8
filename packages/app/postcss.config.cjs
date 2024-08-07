/**
 * Tailwind config.
 *
 * @description Tailwind config.
 * @see https://tailwindcss.com/docs/
 * @see https://postcss.org/docs/
 */

const tailwindcss  = require( 'tailwindcss' )
const autoprefixer = require( 'autoprefixer' )
// const prefixer     = require( 'postcss-prefix-selector' )

module.exports = {
	plugins : [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		autoprefixer,
	],
}
