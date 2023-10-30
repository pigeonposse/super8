/**
 * TODO.
 *
 * @description TODO.
 */
import { locales } from '$lib/i18n'

// eslint-disable-next-line arrow-parens
export const match = ( param ) =>{

	const definedLocales = locales.get()
	const paths          = [ ...definedLocales, '' ]
	const slashPaths     = paths.map( l => `${l}/` )

	return [ ...paths, ...slashPaths ].includes( param )

}
