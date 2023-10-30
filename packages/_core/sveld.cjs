/**
 * Sveld config.
 *
 * @description Generate svelte components documentation in markdown.
 * @see https://github.com/carbon-design-system/sveld/
 */

try {

	const { sveld } = require( 'sveld' )
	const pkg       = require( './package.json' )

	sveld( {
		input           : './src/lib/components.js',
		glob            : true,
		json            : false,
		types           : false,
		markdown        : true,
		markdownOptions : {
			onAppend : ( type, document, components ) => {

				if ( type === 'h1' ) {
					
					document.append( 'p','The core of Super8 is built using the Svelte JavaScript framework. Here\'s a list of all the components and their properties for Super8 developers.' )
					document.append( 'quote', `${components.size} components exported from ${pkg.name}@${pkg.version}.` )
				
				}

			},
			outFile : '../../docs/dev-components-info.md',
		},

	} )

}catch( e ){

	console.error( e )

}
