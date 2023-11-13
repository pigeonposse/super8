/**
 * Postcss config.
 *
 * @description Postcss config.
 * @see https://tailwindcss.com/docs/
 * @see https://postcss.org/docs/
 * @see https://github.com/RadValentin/postcss-prefix-selector
 */

const tailwindcss  = require( 'tailwindcss' )
const autoprefixer = require( 'autoprefixer' )
const prefixer     = require( 'postcss-prefix-selector' )

const config = {
	plugins : [
		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
		tailwindcss(),
		prefixer( {
			prefix : '#pp-s8-content',
			transform( prefix, selector, prefixedSelector ) {

				if ( selector.match( /^(html|body)/ ) ) return selector.replace( /^([^\s]*)/, `$1 ${prefix}` )

				return prefixedSelector

			},
			ignoreFiles : [ 
				'src/options/style.css', 
				'src/popup/style.css',
			],
		} ),
		//But others, like autoprefixer, need to run after,
		autoprefixer,
	],
}

module.exports = config
